import Background from "./background";
import Guidelines from "./guidelines";
import { basic } from "../cardLayouts";

export default function CardSvg({index, data} : {index: number, data: CardData}) {
  const boxSizing = basic;

  return <svg width={boxSizing.width} height={boxSizing.height} viewBox={`0 0 ${boxSizing.width} ${boxSizing.height}`} id="svg"
    version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{
    width: '100%', height: '100%',
  }}
  >
    <mask id="borderMask">
      <rect
        width={boxSizing.width - ((boxSizing.borderThickness || 0) * 2)}
        height={boxSizing.height - ((boxSizing.borderThickness || 0) * 2)}
        x={boxSizing.borderThickness} y={boxSizing.borderThickness}
        rx={boxSizing.innerRadius} ry={boxSizing.innerRadius}
        fill="white"
      /> 
    </mask>
    <Background key={'border'} props={data.border} propKey={'border'} index={index}></Background>
    <Background key={'background'} props={data.background} propKey={'background'} index={index}></Background>

    {data.background.map((layer, i) => (
      (layer.directionPreset === 'custom' && layer.showGuide) && <Guidelines key={i} colorName={`url(#GradientBackground-${index}-${i})`} layer={layer}/>
    ))}
  </svg>
}