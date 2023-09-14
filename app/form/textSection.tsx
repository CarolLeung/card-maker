import { useContext } from 'react';
import TextLayer from './textLayer';
import { CardContext, defaultText } from "../defaults";
import { Tabs, Tab, Button } from 'react-bootstrap';
import TextIcon from './textIcon';

export default function TextSection({propKey, setCardData} : textSection)  {
  return <>
    <Tabs
      defaultActiveKey="profile"
      id={`${propKey}-position-tabs`}
      className="mb-3"
      fill
    >
      <Tab eventKey="left" title="Left">
        <TextPosition propKey={propKey} setCardData={setCardData} position={'left'} index={0}/>
      </Tab>
      <Tab eventKey="center" title="Center">
        <TextPosition propKey={propKey} setCardData={setCardData} position={'center'} index={0}/>
      </Tab>
      <Tab eventKey="right" title="Right">
        <TextPosition propKey={propKey} setCardData={setCardData} position={'right'} index={0}/>
      </Tab>
    </Tabs>
  </>
}

function TextPosition({propKey, setCardData, position} : textPositionI) {
  const data = useContext(CardContext);
  const layer = data[propKey][position];

  return <>
    {layer.text.map((_, i) => (
      <TextLayer key={`${propKey}-layer-${i}`} propKey={propKey} index={i} setCardData={setCardData} position={position}></TextLayer>
    ))}
    <TextIcon propKey={propKey} setCardData={setCardData} position={position}></TextIcon>
    <Button variant="primary" className='mt-2' onClick={() => {
      data[propKey][position].text.push(JSON.parse(JSON.stringify(defaultText)));
      setCardData(data);
    } }>Add Element</Button>
  </>
}