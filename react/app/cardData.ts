interface CardData {
  border: Array<background>
  background: Array<background>
  attacks?: Array<attack>
}

type colorKey = "background" | "border";

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
type backgroundProperty = "showGuide" | "startX" | "startY" | "endX" | "endY" | "spread" | "radius";

type backgroundType = "solid" | "linearGradient" | "radialGradient" | "image";
type radialSpread = "pad" | "reflect" | "repeat";

interface backgroundStops {
  color: string
  opacity?: number
  url?: string
}

interface attack {
  type: "name" | "description"
  text: string
}
