import { useContext } from 'react';
import TextLayer from './textLayer';
import { Button } from 'react-bootstrap';
import { CardContext, defaultBackground } from "../defaults";

export default function TextSection({propKey, setCardData} : textSection)  {
  const data = useContext(CardContext);
  const layers = data[propKey];

  return <>
    {layers.map((_, i) => (
      <TextLayer key={`${propKey}-layer-${i}`} propKey={propKey as textKey} index={i} setCardData={setCardData} ></TextLayer>
    ))}
    list of possible parts:
    <div>textbox -- title</div>
    <div>subtitle</div>
    <div>icon</div>
    <Button variant="primary" className='mt-2' onClick={() => {
      data[propKey].push(JSON.parse(JSON.stringify(defaultBackground)));
      setCardData(data);
    } }>Add Element</Button>
  </>
}