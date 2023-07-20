interface CardData {
  border: border
  background: Array<background>
  attacks?: Array<attack>
}

interface border {
  type?: "solid" // one of solid, transparent, linear gradient, radial gradient, image
  value: string
}

interface background {
  type?: string // backgroundType
  value: Array<backgroundStops>
  showGuide?: boolean
  startX?: number
  startY?: number
  endX?: number
  endY?: number
  spread?: "pad" | "reflect" | "repeat"
}

type backgroundType = "solid" | "linearGradient" | "radicalGradient";

interface backgroundStops {
  color: string
  opacity?: number
}

interface attack {
  type: "name" | "description"
  text: string
}
