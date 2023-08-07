import Background from "./background";

export default function CardSvg({index, data} : {index: number, data: CardData}) {
  return <svg width="216" height="313" viewBox="0 0 216 313" style={{
    width: '50%', height: '50%',
  }}>
    <mask id="borderMask">
      <rect width={196} height={293} x={10} y={10} rx={5} ry={5} fill="white" /> 
    </mask>
    <Background key={'border'} props={data.border} propKey={'border'} index={index}></Background>
    <Background key={'background'} props={data.background} propKey={'background'} index={index}></Background>
  </svg>
}