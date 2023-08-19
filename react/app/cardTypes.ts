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
  header: textRow
  // footer: Array<textElement>
}

interface cardSection {
  setCardData: (data: CardData) => void
  index: number
}
interface colorSection extends cardSection { propKey: colorKey }
interface textSection extends cardSection { propKey: textKey }
interface textPositionI extends textSection { position: textPositions }

type colorKey = "background" | "border";
type textKey = "header";// | "footer";

/********************************
* Background interfaces
*********************************/ 
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

/********************************
* Text interfaces
*********************************/
interface textRow {
  left: Array<textElement>
  center: Array<textElement>
  right: Array<textElement>
}

interface textElement {
  type: textElementType
  value: string
  italics?: boolean
  bold?: boolean
}
type textElementType = "text" | "icon";
type textElementProperties = "italics" | "bold";
type textPositions =  "left" | "center" | "right"

interface attack {
  type: "name" | "description"
  text: string
}
