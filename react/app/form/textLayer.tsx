import { useContext } from 'react';
import { CardContext } from "../defaults";
import { Form, Button, Row, Col, Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default function TextLayer({propKey, index, setCardData, position} : textPositionI)  {
  const data = useContext(CardContext);
  const layer = data[propKey][position][index];
  function textInput(value: string) {
    data[propKey][position][index] = {
      ...data[propKey][position][index],
      value
    }
    setCardData(data);
  }

  function textMods(type: string) {
    return <ToggleButton
      id={`${propKey}-${type}-${position}-${index}`}
      type={"checkbox"}
      variant="outline-primary"
      className={`${type}`}
      value={`${type}-${position}-${index}`}
      checked={layer[type as textElementProperties]}
      onChange={() => {
        data[propKey][position][index][type as textElementProperties] = !data[propKey][position][index][type as textElementProperties];
        setCardData(data);
      }}
      >
      {type}
    </ToggleButton>
  }

  return <Container className='colorLayers'>
    <Row className={`colorLayer ${layer.type} p-0`}>
      <Col className='p-2'>
        <Form.Control type="text" placeholder="input text" value={layer.value} onChange={e => textInput(e.target.value)}/>
        <ToggleButtonGroup type="checkbox" name={`${propKey}-${position}-${index}`}>
          {textMods('italics')}
          {textMods('bold')}
        </ToggleButtonGroup>
        <div>change font, size, change underline, color?</div>
      </Col>
      {/* delete button */}
      <Button variant="danger" className="btn-close" onClick={() => {
        data[propKey][position].splice(index, 1);
        setCardData(data);
      }}></Button>
    </Row>
  </Container>
}