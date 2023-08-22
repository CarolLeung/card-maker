import { useContext, useState } from 'react';
import { CardContext } from "../defaults";
import { Form, Button, Row, Col, Container, ToggleButtonGroup, ToggleButton, FormGroup, InputGroup } from "react-bootstrap";

export default function TextLayer({propKey, index, setCardData, position} : textPositionI)  {
  const data = useContext(CardContext);
  const layer = data[propKey][position][index];
  const [waitForUpdate, setWait] = useState(false);
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
      checked={layer[type as textElementDecorations]}
      onChange={() => {
        data[propKey][position][index][type as textElementDecorations] = !data[propKey][position][index][type as textElementDecorations];
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
        <InputGroup>
          <ToggleButtonGroup type="checkbox" name={`${propKey}-${position}-${index}`}>
            {textMods('italics')}
            {textMods('bold')}
            {textMods('underline')}
          </ToggleButtonGroup>
          <Form.Control type="color" value={layer.color} onChange={e => {
            data[propKey][position][index].color = e.target.value;
            // add delay to update color input so it doesn't lag
            if (!waitForUpdate) {
              setWait(true);
              setTimeout(() => {
                setCardData(data);
                setWait(false);
              }, 100);
            }
          } }/>
          <Form.Control type="number" value={layer.size} min={10} max={18} onChange={e => {
            const value = Number(e.target.value);
            if (value < 10) {
              data[propKey][position][index].size = 10;
            } else if (value > 18) {
              data[propKey][position][index].size = 18;
            } else {
              data[propKey][position][index].size = Number(e.target.value);
            }
            setCardData(data);
          } }/>
          <div>change font</div>
        </InputGroup>

      </Col>
      {/* delete button */}
      <Button variant="danger" className="btn-close" onClick={() => {
        data[propKey][position].splice(index, 1);
        setCardData(data);
      }}></Button>
    </Row>
  </Container>
}