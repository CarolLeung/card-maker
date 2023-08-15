export default function Guidelines({colorName, layer} : {colorName: string, layer: background}) {
	const startX = `${(layer.startX === layer.endX? 50 : layer.startX || 0) - 0.001}%`;
	const startY = `${(layer.startY === layer.endY? 50 : layer.startY || 0) - 0.001}%`;
	const endX = `${(layer.startX === layer.endX? 50 : layer.endX || 0) + 0.001}%`;
	const endY = `${(layer.startY === layer.endY? 50 : layer.endY || 0) + 0.001}%`;

	function pointerEventTest() {
		console.log(event)
	}

	return <g>
		<line
			x1={startX} y1={startY}
			x2={endX} y2={endY}
			stroke="#cfe2ff" strokeWidth="7"
		/>
		<circle cx={startX} cy={startY} r="7" fill="#cfe2ff" />
		<circle cx={endX} cy={endY} r="7" fill="#cfe2ff" />
		<line
			x1={startX} y1={startY}
			x2={endX} y2={endY}
			stroke={colorName}
			strokeWidth="5"
		/>

		<circle
			cx={`50%`} cy={`50%`}
			stroke={colorName}
			fill="black"
			r="20"
			strokeWidth="10"
			pointerEvents="visiblePainted"
			onPointerDown={pointerEventTest}
		/>
		<circle cx={startX} cy={startY} r="6" fill={layer.value[0].color}/>
		<circle cx={endX} cy={endY} r="6" fill={layer.value[layer.value.length-1].color}/>
  </g>
}