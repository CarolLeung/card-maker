import Background from "./background";
import Border from "./border";

export default function CardSvg({index, data} : {index: number, data: CardData}) {
  return <svg width="216" height="313" viewBox="0 0 216 313" style={{
    width: '50%', height: '50%',
  }}>
    <Border props={data.border}></Border>
    <Background props={data.background} index={index}></Background>
  </svg>
}