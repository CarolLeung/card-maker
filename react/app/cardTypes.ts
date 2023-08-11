interface cardLayoutParams {
  height: number,
  width: number,
  borderThickness?: number,
  outerRadius?: number,
  innerRadius?: number,
}

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
  directionPreset?: string
  radialPreset?: string
  spread?: radialSpread
  radius?: number
  stripes?: boolean
}

type backgroundProperty = "startX" | "startY" | "endX" | "endY" | "radius";
interface backgroundPropertyDefault {
  startX: backgroundPropertyDefaultFields
  startY: backgroundPropertyDefaultFields
  endX: backgroundPropertyDefaultFields
  endY: backgroundPropertyDefaultFields
  radius: backgroundPropertyDefaultFields
}

interface backgroundPropertyDefaultFields {
  max: number
  min: number
  default: number
}

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
