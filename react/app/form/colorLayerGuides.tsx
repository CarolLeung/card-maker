"use client";
import { useContext } from 'react';
import { Form, InputGroup } from "react-bootstrap";
import { CardContext, defaultValues } from "../defaults";

export default function ColorLayerGuides({propKey, index, setCardData} : {propKey: colorKey, index: number, setCardData: (data: CardData) => void})  {
  const data = useContext(CardContext);
  const layer = data[propKey][index];

  function createRange(key : backgroundProperty) {
    return <>
      <InputGroup.Text>{key}</InputGroup.Text>
      <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min={defaultValues[key].min} max={defaultValues[key].max} value={layer[key] !== undefined? layer[key] : defaultValues[key].default} onChange={(e) => {handleChange(key, e.target.value)}}/>
      {layer[key]}
    </>
  }

  function handleChange(property: backgroundProperty | 'showGuide' | 'spread', value : string) {
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
    setCardData(data);
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
      {createRange('startX')}
      {createRange('startY')}
    </InputGroup>
    {/* end point */}
    <InputGroup>
      {createRange('endX')}
      {createRange('endY')}
    </InputGroup>
    {/* radial specific */}
    { layer.type === "radialGradient" && <>
      {/* radius */}
      <InputGroup>
        {createRange('radius')}
      </InputGroup>
      {/* spread */}
      <Form.Select value={layer.spread} onChange={(e) => {handleChange('spread', e.target.value)}}>
        <option value="pad">Normal</option>
        <option value="repeat">Repeating</option>
        <option value="reflect">Mirrored Repeating</option>
      </Form.Select>
    </>}
  </InputGroup>  
}