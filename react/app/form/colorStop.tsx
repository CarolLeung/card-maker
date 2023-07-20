import { Dispatch, SetStateAction, useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { CardContext } from '../defaultCard';

export default function ColorStop({props, layerIndex, colorIndex, showOpacity, setCardData} : {props: backgroundStops, layerIndex: number, colorIndex: number, showOpacity: boolean, setCardData: Dispatch<SetStateAction<CardData>>})  {
  const data = useContext(CardContext);

  return <>
    <Form.Control type="color" value={props.color} onChange={e => {
      data.background[layerIndex].value[colorIndex] = {
        ...data.background[layerIndex].value[colorIndex],
        color: e.target.value
      }
      setCardData({
        ...data
      });
    } }/>
    {
      showOpacity && <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="0" max="100" value={props.opacity} onChange={e => {
        data.background[layerIndex].value[colorIndex] = {
          ...data.background[layerIndex].value[colorIndex],
          opacity: Number(e.target.value)
        }
        setCardData({
          ...data
        });
      } }/>
    }
    {/* delete button */}
    { !!layerIndex && <Button ng-if="$index" variant="danger" className="btn-close" ng-click="removeItem(data.color.background, $index)"></Button>}
  </>
}