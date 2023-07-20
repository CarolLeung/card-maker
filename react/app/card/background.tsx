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
                  offset={`${colorIndex * (100 / (layer.value.length - 1))}%`}
                  stopColor={gradientColor.color}
                  stopOpacity={`${gradientColor.opacity}%`}
                />
              ))}
            </linearGradient>
          </defs> 
        }
        {
          layer.type === "radicalGradient" && <defs>
            <radialGradient
              id={`GradientBackground-${index}-${i}`}
              fx={`${layer.startX || 0}%`}
              fy={`${layer.startY || 0}%`}
              cx={`${layer.endX || 0}%`}
              cy={`${layer.endY || 0}%`}
              r={layer.spread || 0}
            >
              {layer.value.map((gradientColor, colorIndex)=>(
                <stop
                  key={`stop-${colorIndex}`}
                  offset={`${colorIndex * (100 / (layer.value.length - 1))}%`}
                  stopColor={gradientColor.color}
                  stopOpacity={`${gradientColor.opacity}%`}
                />
              ))}
            </radialGradient>
          </defs> 
        }
        <rect
          className="background"
          width={196}
          height={293}
          x={10} y={10} rx={5} ry={5}
          fill={layer.type === "solid" && layer.value[0].color || `url(#GradientBackground-${index}-${i})`}
        />
      </g>
    ))}
  </>
}