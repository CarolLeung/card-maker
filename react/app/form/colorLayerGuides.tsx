"use client";
import { Dispatch, SetStateAction, useContext } from 'react';
import { Form, InputGroup } from "react-bootstrap";
import { CardContext } from "../defaultCard";

export default function ColorLayerGuides({propKey, index, setCardData} : {propKey: colorKey, index: number, setCardData: Dispatch<SetStateAction<CardData>>})  {
  const data = useContext(CardContext);
  const layer = data[propKey][index];

  function handleChange(property: backgroundProperty, value : string) {
    switch (property) {
      case 'spread':
        data[propKey][index].spread = value as radialSpread;
        break;
      case 'showGuide':
        data[propKey][index].showGuide = !data[propKey][index].showGuide;
        break;
      default:
        data[propKey][index][property] = Number(value);
        break;
    }
    setCardData({...data});
  }

  return <InputGroup>
    {/* show guideline */}
    <Form.Check
      type="checkbox"
      checked={!!layer.showGuide}
      label={'Show Guideline'}
      onChange={() => {handleChange('showGuide', '')}}
    />
    {/* start point */}
    <InputGroup>
      <InputGroup.Text>x</InputGroup.Text>
      <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="0" max="99" value={layer.startX !== undefined? layer.startX : 0} onChange={(e) => {handleChange('startX', e.target.value)}}
      />
      <InputGroup.Text>y</InputGroup.Text>
      <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="1" max="100" value={layer.startY !== undefined? layer.startY : 0} onChange={(e) => {handleChange('startY', e.target.value)}}/>
    </InputGroup>
    {/* end point */}
    <InputGroup>
      <InputGroup.Text>x</InputGroup.Text>
      <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="0" max="99" value={layer.endX !== undefined? layer.endX : 100} onChange={(e) => {handleChange('endX', e.target.value)}}/>
      <InputGroup.Text>y</InputGroup.Text>
      <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="1" max="100" value={layer.endY !== undefined? layer.endY : 0} onChange={(e) => {handleChange('endY', e.target.value)}}/>
    </InputGroup>
    {/* radial specific */}
    { layer.type === "radialGradient" && <>
      {/* radius */}
      <InputGroup>
        <InputGroup.Text>Radius</InputGroup.Text>
        <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="1" max="100" value={layer.radius !== undefined? layer.radius : 50} onChange={(e) => {handleChange('radius', e.target.value)}}/>
      </InputGroup>
      {/* spread */}
      <Form.Select value={layer.spread} onChange={(e) => {handleChange('spread', e.target.value)}}>
        <option value="pad">pad</option>
        <option value="reflect">reflect</option>
        <option value="repeat">repeat</option>
      </Form.Select>
    </>}
  </InputGroup>  
}