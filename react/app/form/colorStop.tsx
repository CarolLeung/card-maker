import { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CardContext } from '../defaults';

interface colorStopSection extends colorSection {
  colorIndex: number;
  showOpacity: boolean;
  deletable: boolean;
}

export default function ColorStop({propKey, index: layerIndex, setCardData, colorIndex, showOpacity, deletable}: colorStopSection){
  const data = useContext(CardContext);
  const [waitForUpdate, setWait] = useState(false);
  const props = data[propKey][layerIndex].value[colorIndex];

  return <>
    <Form.Control type="color" value={props.color} onChange={e => {
      data[propKey][layerIndex].value[colorIndex] = {
        ...data[propKey][layerIndex].value[colorIndex],
        color: e.target.value
      }
      // add delay to update color input so it doesn't lag
      if (!waitForUpdate) {
        setWait(true);
        setTimeout(() => {
          setCardData(data);
          setWait(false);
        }, 100);
      }
    } }/>
    {
      showOpacity && <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="0" max="10" value={props.opacity !== undefined? props.opacity : 5} onChange={e => {
        data[propKey][layerIndex].value[colorIndex] = {
          ...data[propKey][layerIndex].value[colorIndex],
          opacity: Number(e.target.value)
        }
        setCardData(data);
      } }/>
    }
    {/* delete button */}
    { deletable && <Button variant="danger" className="btn-close" disabled={!colorIndex} onClick={() => {
      data[propKey][layerIndex].value.splice(colorIndex, 1);
      setCardData(data);
    }}></Button>}
  </>
}