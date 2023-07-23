"use client";
import { Dispatch, SetStateAction, useContext } from 'react';
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import { CardContext } from "../defaultCard";
import ColorLayerData from './colorLayerData';
import ColorLayerGuides from './colorLayerGuides';

export default function ColorLayer({propKey, index, setCardData} : {propKey: colorKey, index: number, setCardData: Dispatch<SetStateAction<CardData>>})  {
  const data = useContext(CardContext);
  const layer = data[propKey][index];

  return <Container>
    <Row>
      <Col sm={3} className='p-0'>
        {/* select type */}
        <Form.Floating>
          <Form.Select value={layer.type} disabled={!index} onChange={e => {
            data[propKey][index] = {
              ...data[propKey][index],
              type: e.target.value as backgroundType
            }
            setCardData({
              ...data
            });
          }} >
            {!index && <option value="solid">Solid</option>}
            <option value="linearGradient">Linear Gradient</option>
            <option value="radialGradient">Radial Gradient</option>
            <option value="image">Image</option>
          </Form.Select>
          <Form.Label>Type</Form.Label>
        </Form.Floating>
      </Col>
      { (layer.type === 'linearGradient' || layer.type === 'radialGradient') && <Col sm={4} className='p-2'>
        <ColorLayerGuides propKey={propKey} index={index} setCardData={setCardData} ></ColorLayerGuides>
      </Col> }
      <Col className='p-2'>
        <ColorLayerData props={layer} propKey={propKey} index={index} setCardData={setCardData} ></ColorLayerData>
      </Col>
      {/* delete button */}
      <Button variant="danger" className="btn-close" disabled={!index} onClick={() => {
        data[propKey].splice(index, 1);
        setCardData({
          ...data,
        });
      }}></Button>
    </Row>
  </Container>
}