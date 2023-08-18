import { useContext } from 'react';
import { CardContext } from "../defaults";
import { Form, Button, Row, Col, Container, ToggleButtonGroup, ToggleButton } from "react-bootstrap";

export default function TextLayer({propKey, index, setCardData} : textSection)  {
  const data = useContext(CardContext);
  const layer = data[propKey][index];

  function textInput(value: string) {
    data[propKey][index] = {
      ...data[propKey][index],
      value
    }
    setCardData(data);
  }

  function textMods(type: string, position?: boolean) {
    return <ToggleButton
      id={`title-${type}-${index}`}
      type={position? "radio" : "checkbox"}
      variant="outline-primary"
      className={`${type}`}
      value={`${type}-${index}`}
      checked={position? layer.position === `${type}-${index}` : layer[type as textElementProperties]}
      onChange={() => {
        if (position) {
          data[propKey][index].position = type as textPositions;
          let x = '0';
          switch (type) {
            case 'center':
              x = '50%';
              break;
            case 'right':
              x = '100%';
              break;
            default:
              x = '0';
              break;
          }
          const textbox = document.querySelector(`#svg-text-header-title-${index}`);
          if (textbox) {
            const boundingClientRectGroup = textbox.getBoundingClientRect();
            if (boundingClientRectGroup) {
              textbox.setAttribute("x", x);
            }
          }
        } else {
          data[propKey][index][type as textElementProperties] = !data[propKey][index][type as textElementProperties];
        }
        setCardData(data);
      }}
      >
      {type}
    </ToggleButton>
  }

  return <Container className='colorLayers'>
  <Row className={`colorLayer ${layer.type} p-0`}>
    <Col sm={2} className='colorType p-0'>
      {/* select type */}
      <Form.Floating>
        <Form.Select value={layer.type} onChange={e => {
          data[propKey][index] = {
            ...data[propKey][index],
            type: e.target.value as textElementType
          }
          setCardData(data);
        }} >
          <option value="title">title</option>
          <option value="subtitle">subtitle</option>
          <option value="icon">icon</option>
        </Form.Select>
        <Form.Label>Type</Form.Label>
      </Form.Floating>
    </Col>
    {
      layer.type === 'title' && <Col className='p-2'>
        <Form.Control type="text" placeholder="input text" value={layer.value} onChange={e => textInput(e.target.value)}/>
        <ToggleButtonGroup type="checkbox" name={`title-${index}-styling`}>
          {textMods('italics')}
          {textMods('bold')}
        </ToggleButtonGroup>
        <div>change font, size, change underline, color?</div>
        <ToggleButtonGroup type="radio" name={`title-${index}-position`}>
          {textMods('left', true)}
          {textMods('center', true)}
          {textMods('right', true)}
        </ToggleButtonGroup>
      </Col>
    }
    {/* delete button */}
    <Button variant="danger" className="btn-close" disabled={!index} onClick={() => {
      data[propKey].splice(index, 1);
      setCardData(data);
    }}></Button>
  </Row>
</Container>
}