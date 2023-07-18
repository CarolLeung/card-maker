import CardSvg from "./card/cardSvg";

export default function Document() {
  const data: CardData = {
    colors: {
      border: {
        value: "#646464",
      }
    }
  }

  return (
    <div>
      <CardSvg {...data} />
    </div>
  )
}