import { useContext } from 'react';
import ColorLayer from './colorLayer';
import { Button } from 'react-bootstrap';
import { CardContext } from "../defaults";

export default function ColorSection({propKey, setCardData} : {propKey: colorKey, setCardData: (data: CardData) => void})  {
  const data = useContext(CardContext);
  const layers = data[propKey];

  return <>
    {layers.map((layer, i) => (
      <ColorLayer key={`background-layer-${i}`} propKey={propKey} index={i} setCardData={setCardData} ></ColorLayer>
    ))}

    <Button variant="primary" className='mt-2' onClick={() => {
      data[propKey].push({
        type: 'linearGradient',
        value: [{color: '#eeeeee'}]
      })
      setCardData(data);
    } }>Add Layer</Button>
  </>
}