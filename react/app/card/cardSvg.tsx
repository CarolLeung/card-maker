import Background from "./background";
import Guidelines from "./guidelines";

export default function CardSvg({index, data} : {index: number, data: CardData}) {
  return <svg width="216" height="313" viewBox="0 0 216 313" id="svg"
    version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
  style={{
    width: '100%', height: '100%',
  }}
  >
    <mask id="borderMask">
      <rect width={196} height={293} x={10} y={10} rx={5} ry={5} fill="white" /> 
    </mask>
    <Background key={'border'} props={data.border} propKey={'border'} index={index}></Background>
    <Background key={'background'} props={data.background} propKey={'background'} index={index}></Background>

    {data.background.map((layer, i) => (
      layer.showGuide && <Guidelines colorName={`url(#GradientBackground-${index}-${i})`} layer={layer}/>
    ))}
  </svg>
}