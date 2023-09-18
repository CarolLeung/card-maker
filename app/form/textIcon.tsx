import { useContext, useState } from 'react';
import { CardContext } from "../defaults";
import { Form, Button, Row, Col, Container, ToggleButtonGroup, ToggleButton, InputGroup } from "react-bootstrap";

interface textIconI {
  propKey: textKey
  setCardData: (data: CardData) => void
  position: textPositions
}

export default function TextIcon({propKey, setCardData, position} : textIconI)  {
  const data = useContext(CardContext);
  const layer = data[propKey][position].icon;
  const [waitForUpdate, setWait] = useState(false);

  return <Container className='textIcon colorLayers'>
    {
      layer && <Row className={`colorLayer p-0`}>
        <Col className='p-2 textRow'>
          <Form.Control type="color" value={layer.color} onChange={e => {
            layer.color = e.target.value;
            // add delay to update color input so it doesn't lag
            if (!waitForUpdate) {
              setWait(true);
              setTimeout(() => {
                setCardData(data);
                setWait(false);
              }, 100);
            }
          } }/>
        </Col>
        {/* delete button */}
        <Button variant="danger" className="btn-close" onClick={() => {
          delete data[propKey][position].icon;
          setCardData(data);
        }}></Button>
      </Row>
    }
  </Container>
}