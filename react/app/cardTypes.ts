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
  header: Array<string>
  // footer: Array<string>
}

interface cardSection {
  setCardData: (data: CardData) => void;
  index: number;
}

interface colorSection extends cardSection {
  propKey: colorKey
}

interface textSection extends cardSection {
  propKey: textKey
}


type colorKey = "background" | "border";
type textKey = "header";// | "footer";

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
