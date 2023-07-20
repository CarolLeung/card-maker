import { Dispatch, SetStateAction } from 'react';
import ColorLayer from './colorLayer';

export default function ColorSection(
  {props: layers, setCardData} : {props: Array<background>, setCardData: Dispatch<SetStateAction<CardData>>}
  )  {
  return <>
    {layers.map((layer, i) => (
      <ColorLayer key={`background-layer-${i}`} props={layer} index={i} setCardData={setCardData} ></ColorLayer>
    ))}
  </>
}