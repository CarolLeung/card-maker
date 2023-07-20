"use client";
import { Dispatch, SetStateAction, useContext } from 'react';
import { Form, InputGroup, Button } from "react-bootstrap";
import ColorStop from './colorStop';
import { CardContext } from "../defaultCard";

export default function ColorSection(
  {props: layer, index, setCardData} : {props: background, index: number, setCardData: Dispatch<SetStateAction<CardData>>}
  )  {
    const data = useContext(CardContext);

return <InputGroup>
      {/* select color type */}
      <Form.Floating>
        <Form.Select value={layer.type} onChange={e => {
          data.background[index] = {
            ...data.background[index],
            type: e.target.value
          }
          setCardData({
            ...data
          });
        }} >
          <option value="solid">Solid</option>
          <option value="linearGradient">Linear Gradient</option>
          <option value="radialGradient">Radial Gradient</option>
          <option value="texture">Texture</option>
          <option value="image">Image</option>
        </Form.Select>
        <Form.Label>Type</Form.Label>
      </Form.Floating>

      {/* set direction or other stats */}
      {/* { (layer.type === "linearGradient" || layer.type === "radialGradient") && <Form.Control>
        
      </Form.Control>} */}

      {/* choose colors */}
      <div className="form-control">
      {
        layer.type === "solid" &&
        <InputGroup>
          <ColorStop props={layer.value[0]} layerIndex={index} colorIndex={0} showOpacity={false} setCardData={setCardData} />
        </InputGroup >
        
      }
      {
        (layer.type === "linearGradient" || layer.type === "radialGradient") &&
        <Form.Group>
          {layer.value.map((stopColor, stopIndex)=> (
            <InputGroup key={`stop-color-${stopIndex}`}>
              <ColorStop props={stopColor} layerIndex={index} colorIndex={stopIndex} showOpacity={true} setCardData={setCardData} />
            </InputGroup >
          ))}
        </Form.Group>
      }
      </div>

      {/* delete button */}
      <Button ng-if="$index" variant="danger" className="btn-close" ng-click="removeItem(data.color.background, $index)" disabled={!index}></Button>
    </InputGroup>  
}