import Border from "./border";

export default function CardSvg(data: CardData) {
  return <svg width="216" height="313" viewBox="0 0 216 313" style={{
    width: '50%', height: '50%'
  }}>
    <Border props={data.colors.border}></Border>
  </svg>
}