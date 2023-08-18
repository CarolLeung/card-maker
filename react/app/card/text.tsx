import { basic } from "../cardLayouts";

export default function TextFragment({props, propKey, index} : {props: Array<textElement>, propKey: string, index: number}) {
	function setTextDecorationClasses(layer: textElement) {
		const prop = ['italics','bold'];
		let className = layer.position;
		for (let i = 0; i < prop.length; i++) {
			if (layer[prop[i] as textElementProperties] === true) {
				className += ` ${prop[i]}`;
			}
		}
		return className
	}

	function groupTextByPosition() {
		const leftElements = []; const centerElements = []; const rightElements = [];
		// track location, elements go left of each other by section
		for (let i = 0; i < props.length; i++) {
			const layer = props[i];
			// el changes depending on layer.type
			const el = 
				<text key={`${i}`} x={0} y={0} className={setTextDecorationClasses(layer)} id={`svg-${index}-text-${propKey}-title-${i}`}>
					{layer.value} 
				</text>

			switch (layer.position) {
				case 'center':
					centerElements.push(el);
					break;
				case 'right':
					rightElements.push(el);
					break;
				default:
					leftElements.push(el);
					break;
			}
		}
		return <>
			<g className="left">{leftElements}</g>
			<g className="center">{centerElements}</g>
			<g className="right">{rightElements}</g>
		</>
	}

	return <g className={`${propKey}`}>
		{groupTextByPosition()}
	</g>
}