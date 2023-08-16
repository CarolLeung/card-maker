"use client";
import { useContext, useState } from 'react';
import { Form, InputGroup, Button, Row, Col } from "react-bootstrap";
import ColorStop from './colorStop';
import { CardContext } from "../defaults";

export default function ColorLayerData({propKey, index, setCardData} : colorSection)  {
  const data = useContext(CardContext);
  const layer = data[propKey][index];
  const [imageSource, seImageSource] = useState('link');

  function onImageChange(value : string) {
    data[propKey][index].value[0] = {
      ...data[propKey][index].value[0],
      url: value
    }
    setCardData(data);
  }

  return <>
    {/* choose colors */}
    { layer.type === "solid" &&
      <InputGroup>
        <ColorStop propKey={propKey} index={index} colorIndex={0} showOpacity={false} deletable={false} setCardData={setCardData} />
      </InputGroup >}
    { (layer.type === "linearGradient" || layer.type === "radialGradient") &&
      <Form.Group>
        <Form.Check
          type="checkbox"
          checked={!!layer.stripes}
          label={'Stripes'}
          onChange={() => {
            data[propKey][index].stripes = !data[propKey][index].stripes;
            setCardData(data);
          }}
        />
        {layer.value.map((_, stopIndex)=> (
          <InputGroup key={`stop-color-${stopIndex}`}>
            <ColorStop propKey={propKey} index={index} colorIndex={stopIndex} showOpacity={true} deletable={true} setCardData={setCardData} />
          </InputGroup >
        ))}
        <Button variant="secondary" className="mt-2" onClick={() => {
          data[propKey][index].value.push({color: "#FFFFFF", opacity: 5});
          setCardData(data);
        }}>Add Color</Button>
      </Form.Group> }
    { layer.type === "image" && <Form.Group>
      <InputGroup>
        <Row className="w-100">
          <Col sm={4}>
            <Form.Select value={imageSource} onChange={e => { seImageSource(e.target.value); }} >
              <option value="link">Link</option>
              <option value="file">Upload File</option>
            </Form.Select>
          </Col>
          <Col sm={8} className="p-0">
            { imageSource === "link" && <Form.Control type="url" className="w-100" placeholder="Url" aria-label="image url" value={layer.value[0].url || ''}
              onChange={e => onImageChange(e.target.value)}/> }
            { imageSource === "file" && <Form.Control type="file" accept="image/png, image/jpeg" value={layer.value[0].url || ''}
              onChange={e => onImageChange(e.target.value)}/> }
          </Col>
        </Row>
      </InputGroup>
    </Form.Group> }
  </>  
}