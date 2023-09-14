import { useContext } from 'react';
import ColorLayer from './colorLayer';
import { Button } from 'react-bootstrap';
import { CardContext, defaultBackground } from "../defaults";

export default function ColorSection({propKey, setCardData} : colorSection)  {
  const data = useContext(CardContext);
  const layers = data[propKey];

  return <>
    {layers.map((_, i) => (
      <ColorLayer key={`${propKey}-layer-${i}`} propKey={propKey as colorKey} index={i} setCardData={setCardData} ></ColorLayer>
    ))}

    <Button variant="primary" className='mt-2' onClick={() => {
      data[propKey].push(JSON.parse(JSON.stringify(defaultBackground)));
      setCardData(data);
    } }>Add Layer</Button>
  </>
}