"use client";
import { useContext, useState } from 'react';
import { Form, Button, Row, Col, Container, ToggleButtonGroup, ToggleButton, Table } from "react-bootstrap";
import { CardContext } from "../defaults";
import ColorLayerData from './colorLayerData';
import ColorLayerGuides from './colorLayerGuides';

export default function ColorLayer({propKey, index, setCardData} : {propKey: colorKey, index: number, setCardData: (data: CardData) => void})  {
  const data = useContext(CardContext);
  const layer = data[propKey][index];

  function setDirection(value: string) {
    const location = value.split('-');
    if (layer.type === 'linearGradient') {
      data[propKey][index].directionPreset = value;
      if (value !== 'custom') {
        data[propKey][index] = {
          ...data[propKey][index],
          startX: 0,
          startY: 100 * Number(location[0]),
          endX: 100 * Number(location[1]),
          endY: 100 * Number(location[2]),
        }
      }
    } else {
      data[propKey][index] = {
        ...data[propKey][index],
        startX: 50 * Number(location[0]),
        startY: 50 * Number(location[1]),
        endX: 50 * Number(location[0]),
        endY: 50 * Number(location[1]),
        radialPreset: value
      }
    }
    setCardData(data);
  }

  return <Container className='colorLayers'>
    <Row className={`colorLayer ${layer.type} p-0`}>
      <Col sm={2} className='colorType p-0'>
        {/* select type */}
        <Form.Floating>
          <Form.Select value={layer.type} disabled={!index} onChange={e => {
            data[propKey][index] = {
              ...data[propKey][index],
              type: e.target.value as backgroundType
            }
            setCardData(data);
          }} >
            {!index && <option value="solid">Solid</option>}
            <option value="linearGradient">Linear Gradient</option>
            <option value="radialGradient">Radial Gradient</option>
            <option value="image">Image</option>
          </Form.Select>
          <Form.Label>Type</Form.Label>
        </Form.Floating>
      </Col>
      { layer.type === 'linearGradient' && <Col sm={5} className='p-2'>
        <Form.Floating>
          <Form.Select value={layer.directionPreset} onChange={e => setDirection(e.target.value)} >
            <option value="0-1-0">Left to Right</option>
            <option value="0-0-1">Top to Bottom</option>
            <option value="0-1-1">Top Left Corner to Bottom Right Corner</option>
            <option value="1-1-0">Bottom Left Corner to Top Right Corner</option>
            <option value="custom">Custom</option>
          </Form.Select>
          <Form.Label>Direction</Form.Label>
        </Form.Floating>
        {layer.directionPreset === 'custom' && 
          <ColorLayerGuides propKey={propKey} index={index} setCardData={setCardData}></ColorLayerGuides>
        }
      </Col> }
      { layer.type === 'radialGradient' && <Col sm={5} className='p-2'>
        <Form.Floating>
          <Form.Select value={layer.directionPreset} onChange={e => setDirection(e.target.value)} >
            <option value="">Select Start Point</option>
            <option value="custom">Custom</option>
          </Form.Select>
          <Form.Label>Direction</Form.Label>
        </Form.Floating>
        <ToggleButtonGroup type="radio" name="options">
          {Array.from({ length: 3 }).map((_, indexRow) => (
            <Row className='m-0' key={indexRow}>
              {Array.from({ length: 3 }).map((_, indexCol) => (
                <ToggleButton
                  key={indexCol}
                  id={`${propKey}RadialLocation${3 * indexRow +  (indexCol + 1)}-layer${index}`}
                  type="radio"
                  variant="outline-primary"
                  name={`layer-${index}`}
                  value={`${indexRow}-${indexCol}`}
                  checked={layer.radialPreset === `${indexRow}-${indexCol}`}
                  onChange={e => setDirection(e.target.value)}
                  >
                  {3 * indexRow +  (indexCol + 1)}
                </ToggleButton>
              ))}
            </Row>
          ))}
        </ToggleButtonGroup>
        <ColorLayerGuides propKey={propKey} index={index} setCardData={setCardData} hideXY={layer.directionPreset !== 'custom'} ></ColorLayerGuides>
      </Col> }
      <Col className='p-2'>
        <ColorLayerData propKey={propKey} index={index} setCardData={setCardData} ></ColorLayerData>
      </Col>
      {/* delete button */}
      <Button variant="danger" className="btn-close" disabled={!index} onClick={() => {
        data[propKey].splice(index, 1);
        setCardData(data);
      }}></Button>
    </Row>
  </Container>
}