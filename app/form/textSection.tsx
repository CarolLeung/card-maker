import { useContext } from 'react';
import TextLayer from './textLayer';
import { CardContext, defaultText } from "../defaults";
import { Tabs, Tab, Button } from 'react-bootstrap';
import TextIcon from './textIcon';

export default function TextSection({propKey, setCardData} : textSection)  {
  return <>
    <Tabs
      defaultActiveKey="left"
      id={`${propKey}-position-tabs`}
      className='tabTitle'
      fill
    >
      {['left', 'center', 'right'].map((position) => (
        <Tab key={position} eventKey={position} title={position} className="p-2 tabBody">
          <TextPosition propKey={propKey} setCardData={setCardData} position={position as textPositions} index={0}/>
        </Tab>
      ))}
    </Tabs>
  </>
}

function TextPosition({propKey, setCardData, position} : textPositionI) {
  const data = useContext(CardContext);
  const layer = data[propKey][position];

  return <>
    {
      (layer.icon && position == 'left') && <TextIcon propKey={propKey} setCardData={setCardData} position={position}></TextIcon>
    }
    {layer.text.map((_, i) => (
      <TextLayer key={`${propKey}-layer-${i}`} propKey={propKey} index={i} setCardData={setCardData} position={position}></TextLayer>
    ))}
    {
      (layer.icon && position == 'right') && <TextIcon propKey={propKey} setCardData={setCardData} position={position}></TextIcon>
    }
    <div>
      <Button variant="primary" className='mt-2' onClick={() => {
        data[propKey][position].text.push(JSON.parse(JSON.stringify(defaultText)));
        setCardData(data);
      } }>Add Element</Button>
      {
        (!layer.icon && position != 'center') && <Button variant="primary" className='mt-2' onClick={() => {
          data[propKey][position].icon = {};
          setCardData(data);
        } }>Add Icon</Button>
      }
    </div>
  </>
}