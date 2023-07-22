import { Dispatch, SetStateAction, useContext } from 'react';
import ColorLayer from './colorLayer';
import { Button } from 'react-bootstrap';
import { CardContext } from "../defaultCard";

export default function ColorSection(
  {propKey, setCardData} : {propKey: 'background', setCardData: Dispatch<SetStateAction<CardData>>}
  )  {
    const data = useContext(CardContext);
    const layers = data[propKey];

    return <>
    {layers.map((layer, i) => (
      <ColorLayer key={`background-layer-${i}`} props={layer} index={i} setCardData={setCardData} ></ColorLayer>
    ))}
    <Button variant="primary" className='mt-2' onClick={() => {
      data.background.push({
        type: 'solid',
        value: [{color: '#ffffff'}]
      })
      setCardData({
        ...data,
      });
      } }>Add Layer</Button>
  </>
}