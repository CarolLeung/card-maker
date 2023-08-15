"use client";
import { useContext } from 'react';
import { Form, InputGroup } from "react-bootstrap";
import { CardContext } from "../defaults";

export default function ColorLayerGuides({propKey, index, setCardData, hideXY} : {propKey: colorKey, index: number, setCardData: (data: CardData) => void, hideXY?: boolean})  {
  const data = useContext(CardContext);
  const layer = data[propKey][index];

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
    {
      !hideXY && <>
        {/* show guideline */}
        <Form.Check
          type="checkbox"
          checked={!!layer.showGuide}
          label={'Show Guideline'}
          onChange={() => {handleChange('showGuide', '')}}
        />
        <InputGroup style={{justifyContent: 'space-evenly', margin: '0.5rem 0'}}>
          <div className='coordinate-sliders'>
            <Form.Range className="p-2 bg-primary-subtle" min={0} max={100} step={10} value={layer.startX} onChange={e => {handleChange('startX', e.target.value)}}/>
            <Form.Range className="p-2 bg-primary-subtle vertical-range" min={0} max={100} step={10} value={layer.startY} onChange={e => {handleChange('startY', e.target.value)}}/>
            <div className='background' style={{backgroundColor: layer.value[0].color}}/>
            <div>1</div>
          </div>
          <div className='coordinate-sliders'>
            <Form.Range className="p-2 bg-primary-subtle" min={0} max={100} step={10} value={layer.endX} onChange={e => {handleChange('endX', e.target.value)}}/>
            <Form.Range className="p-2 bg-primary-subtle vertical-range" min={0} max={100} step={10} value={layer.endY} onChange={e => {handleChange('endY', e.target.value)}}/>
            <div className='background' style={{backgroundColor: layer.value[layer.value.length - 1].color}}/>
            <div>2</div>
          </div>
        </InputGroup>
      </>
    }

    {/* radial specific */}
    {
      layer.type === 'radialGradient' && <>
        {/* radius */}
        <InputGroup>
          <InputGroup.Text>radius</InputGroup.Text>
          <Form.Range className="form-control h-auto p-2 bg-primary-subtle"
            min={0} max={100} value={layer.radius !== undefined? layer.radius : 100}
            onChange={(e) => {handleChange('radius', e.target.value)}}
          />
        </InputGroup>
        {/* spread */}
        <Form.Select value={layer.spread} onChange={(e) => {handleChange('spread', e.target.value)}}>
          <option value="pad">Normal</option>
          <option value="repeat">Repeating</option>
          <option value="reflect">Mirrored Repeating</option>
        </Form.Select>
      </>
    }
  </InputGroup>  
}