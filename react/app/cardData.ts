interface CardData {
  border: border
  background: Array<background>
  attacks?: Array<attack>
}

interface border {
  type?: backgroundType
  value: string
}

interface background {
  type: backgroundType
  value: Array<backgroundStops>
  showGuide?: boolean
  startX?: number
  startY?: number
  endX?: number
  endY?: number
  spread?: radialSpread
  radius?: number
}

type backgroundType = "solid" | "linearGradient" | "radialGradient" | "image" | "texture";
type radialSpread = "pad" | "reflect" | "repeat";

interface backgroundStops {
  color: string
  opacity?: number
}

interface attack {
  type: "name" | "description"
  text: string
}
