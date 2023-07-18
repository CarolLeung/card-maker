export default function Border({props} : {props: border | undefined})  {
  return <rect className="border"
    width={216}
    height={313}
    rx={10} ry={10}
    fill={props? props.value : "#ffec9d"}
  />
}