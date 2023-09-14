import { basic } from "../cardLayouts";

export default function Guidelines({colorName, layer} : {colorName: string, layer: background}) {
	const radius = 20;
  const boxSizing = basic;

	function constrainInBounds(value : number, dimensionType: 'width' | 'height', offset: number) {
		if (value < 10) {
			return `${value + radius + offset}px`;
		}
		if (value > 90) {
			return `${boxSizing[dimensionType] - radius + offset}px`
		}
		return `${value + offset}%`
	}
	const startX = constrainInBounds(layer.startX || 0, 'width', -0.001);
	const startY = constrainInBounds(layer.startY || 0, 'height', -0.001);
	const endX = constrainInBounds(layer.endX || 0, 'width', 0.001);
	const endY = constrainInBounds(layer.endY || 0, 'height', 0.001);

	return <g>
		<line
			x1={startX} y1={startY}
			x2={endX} y2={endY}
			stroke="#cfe2ff" strokeWidth="7"
		/>
		<circle cx={startX} cy={startY} r={radius} fill="#cfe2ff" />
		<circle cx={endX} cy={endY} r={radius} fill="#cfe2ff" />

		{/* <line
			x1={startX} y1={startY}
			x2={endX} y2={endY}
			stroke={colorName}
			strokeWidth="7"
		/> */}

		<circle cx={startX} cy={startY} r="15" fill={layer.value[0].color}/>
		<text x={startX} y={startY} dx={-6} dy={10} className="guide-text">1</text>

		<circle cx={endX} cy={endY} r="15" fill={layer.value[layer.value.length-1].color}/>
		<text x={endX} y={endY} dx={-8} dy={10} className="guide-text">2</text>
  </g>
}