export default function Background({props: layers, propKey, index} : {props: Array<background>, propKey: colorKey, index: number})  {
  const boxSizing = {
    height: 313,
    width: 216,
    borderThickness: 10,
    outerRadius: 10,
    innerRadius: 5,
  }

  return <>
    {layers.map((layer, i) => (
      <g key={`background-${i}`}>
        {
          layer.type === "linearGradient" && <defs>
            <linearGradient
              id={`GradientBackground-${index}-${i}`}
              x1={`${layer.startX || 0}%`}
              y1={`${layer.startY || 0}%`}
              x2={`${layer.endX || 0}%`}
              y2={`${layer.endY || 0}%`}
            >
              {layer.value.map((gradientColor, colorIndex)=>(
                <stop
                  key={`stop-${colorIndex}`}
                  offset={`${(layer.value.length > 1) ? colorIndex * (100 / (layer.value.length - 1)) : 0}%`}
                  stopColor={gradientColor.color}
                  stopOpacity={`${gradientColor.opacity !== undefined? gradientColor.opacity * 10 : 50}%`}
                />
              ))}
            </linearGradient>
          </defs> 
        }
        {
          layer.type === "radialGradient" && <defs>
            <radialGradient
              id={`GradientBackground-${index}-${i}`}
              cx={`${layer.startX || 0}%`}
              cy={`${layer.startY || 0}%`}
              fx={`${layer.endX || 0}%`}
              fy={`${layer.endY || 0}%`}
              r={`${layer.radius || 50}%`}
              spreadMethod={layer.spread || 'pad'}
            >
              {layer.value.map((gradientColor, colorIndex)=>(
                <stop
                  key={`stop-${colorIndex}`}
                  offset={`${(layer.value.length > 1) ? colorIndex * (100 / (layer.value.length - 1)) : 0}%`}
                  stopColor={gradientColor.color}
                  stopOpacity={`${gradientColor.opacity !== undefined? gradientColor.opacity * 10 : 50}%`}
                />
              ))}
            </radialGradient>
          </defs> 
        }
        {
          layer.type === "image"
          ? <image 
            href={layer.value[0].url ||"https://www.transparenttextures.com/patterns/fresh-snow.png"}
            height={boxSizing.height - (propKey !== 'border'? boxSizing.borderThickness * 2 : 0)}
            x={propKey !== 'border' ? boxSizing.borderThickness : 0} y={propKey !== 'border' ? boxSizing.borderThickness : 0}
            mask="url(#borderMask)"/>
          : <rect
            className="background"
            width={boxSizing.width - (propKey !== 'border'? boxSizing.borderThickness * 2 : 0)}
            height={boxSizing.height - (propKey !== 'border'? boxSizing.borderThickness * 2 : 0)}
            x={propKey !== 'border' ? boxSizing.borderThickness : 0} y={propKey !== 'border' ? boxSizing.borderThickness : 0} rx={propKey !== 'border' ? boxSizing.innerRadius : boxSizing.outerRadius} ry={propKey !== 'border' ? boxSizing.innerRadius : boxSizing.outerRadius}
            fill={layer.type === "solid" && layer.value[0].color || `url(#GradientBackground-${index}-${i})`}
          />
        }
      </g>
    ))}
  </>
}