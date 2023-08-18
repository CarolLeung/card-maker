import { useContext } from 'react';
import TextLayer from './textLayer';
import { Button } from 'react-bootstrap';
import { CardContext, defaultText } from "../defaults";

export default function TextSection({propKey, setCardData} : textSection)  {
  const data = useContext(CardContext);
  const layers = data[propKey];

  return <>
    {layers.map((_, i) => (
      <TextLayer key={`${propKey}-layer-${i}`} propKey={propKey as textKey} index={i} setCardData={setCardData} ></TextLayer>
    ))}
    <Button variant="primary" className='mt-2' onClick={() => {
      data[propKey].push(JSON.parse(JSON.stringify(defaultText)));
      setCardData(data);
    } }>Add Element</Button>
  </>
}