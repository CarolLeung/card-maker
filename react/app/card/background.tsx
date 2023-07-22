export default function Background({props: layers, index} : {props: Array<background>, index: number})  {
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
          layer.type === "image" || layer.type === "texture"
          ? <image 
            href="https://www.transparenttextures.com/patterns/fresh-snow.png"
            height={293}
            x={10} y={10} />
          : <rect
            className="background"
            width={196}
            height={293}
            x={10} y={10} rx={5} ry={5}
            fill={layer.type === "solid" && layer.value[0].color || `url(#GradientBackground-${index}-${i})`}
          />
        }
      </g>
    ))}
  </>
}