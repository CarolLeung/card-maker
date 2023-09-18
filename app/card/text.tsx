import { basic } from "../cardLayouts";

export default function TextFragment({props, propKey} : {props: textRow, propKey: string}) {
	const cardLayout = basic;

	function setTextDecorationClasses(layer: textElement) {
		const prop = ['italics','bold','underline'];
		let className = '';
		for (let i = 0; i < prop.length; i++) {
			if (layer[prop[i] as textElementDecorations] === true) {
				className += `${prop[i]} `;
			}
		}
		return className;
	}

	function groupTextByPosition(position: textPositions) {
		const elements = [];
		for (let i = 0; i < props[position].text.length; i++) {
			const layer = props[position].text[i];
			const el = 
				<tspan key={`${i}`} className={setTextDecorationClasses(layer)} style={{fill: layer.color, fontSize: layer.size}}>
					{layer.value} 
				</tspan>
			elements.push(el);
		}
		return <>
			{elements}
		</>
	}

	return <g className={`${propKey}`}
	 	transform={`translate(${(cardLayout.borderThickness || 0) + 3},${(cardLayout.borderThickness || 0) + 15})`}
	 >
		{
			props.left.icon && <circle cx={6} cy={-6} r="6" fill={props.left.icon.color}/>
		}
		<text className="left" style={{textAnchor: 'start'}} x={props.left.icon? 12: 0}>{groupTextByPosition('left')}</text>
		<text className="center" style={{textAnchor: 'middle'}}
			x={cardLayout.width / 2 - ((cardLayout.borderThickness || 0)) - 3}>
				{groupTextByPosition('center')}
		</text>
		<text className="right" style={{textAnchor: 'end'}}
			x={cardLayout.width - ((cardLayout.borderThickness || 0) * 2) - 6 - (props.right.icon? 13: 0)}>
				{groupTextByPosition('right')}
		</text>
		{
			props.right.icon && <circle cx={cardLayout.width - (cardLayout.borderThickness || 0) * 3 - 2} cy={-6} r="6" fill={props.right.icon.color}/>
		}
	</g>
}