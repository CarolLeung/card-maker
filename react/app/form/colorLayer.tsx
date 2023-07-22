"use client";
import { Dispatch, SetStateAction, useContext } from 'react';
import { Form, InputGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import ColorStop from './colorStop';
import { CardContext } from "../defaultCard";

export default function ColorSection({props: layer, index, setCardData} : {props: background, index: number, setCardData: Dispatch<SetStateAction<CardData>>})  {
  const data = useContext(CardContext);

  return <InputGroup>
      {/* select color type */}
      <Form.Floating>
        <Form.Select value={layer.type} onChange={e => {
          data.background[index] = {
            ...data.background[index],
            type: e.target.value as backgroundType
          }
          setCardData({
            ...data
          });
        }} >
          <option value="solid">Solid</option>
          <option value="linearGradient">Linear Gradient</option>
          <option value="radialGradient">Radial Gradient</option>
          <option value="texture">Texture</option>
          <option value="image">Image</option>
        </Form.Select>
        <Form.Label>Type</Form.Label>
      </Form.Floating>

      {/* set direction or other stats */}
      { (layer.type === "linearGradient" || layer.type === "radialGradient") && <>
        <div className="form-control">
          {/* show guideline */}
          <Form.Check
            type="checkbox"
            checked={!!layer.showGuide}
            label={'Show Guideline'}
            onChange={() => {
              data.background[index].showGuide = !data.background[index].showGuide;
              setCardData({
                ...data
              });
            }}
          />
          {/* start point */}
          <InputGroup>
            <InputGroup.Text>x</InputGroup.Text>
            <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="0" max="99" value={layer.startX !== undefined? layer.startX : 0} onChange={e => {
              data.background[index].startX = Number(e.target.value);
              setCardData({
                ...data
              });
            } }/>
            <InputGroup.Text>y</InputGroup.Text>
            <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="1" max="100" value={layer.startY !== undefined? layer.startY : 0} onChange={e => {
              data.background[index].startY = Number(e.target.value);
              setCardData({
                ...data
              });
            } }/>
          </InputGroup>
          {/* end point */}
          <InputGroup>
            <InputGroup.Text>x</InputGroup.Text>
            <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="0" max="99" value={layer.endX !== undefined? layer.endX : 0} onChange={e => {
              data.background[index].endX = Number(e.target.value);
              setCardData({
                ...data
              });
            } }/>
            <InputGroup.Text>y</InputGroup.Text>
            <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="1" max="100" value={layer.endY !== undefined? layer.endY : 0} onChange={e => {
              data.background[index].endY = Number(e.target.value);
              setCardData({
                ...data
              });
            } }/>
          </InputGroup>
          {/* radial specific */}
          { layer.type === "radialGradient" && <>
            {/* radius */}
            <InputGroup>
              <InputGroup.Text>Radius</InputGroup.Text>
              <Form.Range className="form-control h-auto p-2 bg-primary-subtle" min="1" max="100" value={layer.radius !== undefined? layer.radius : 50} onChange={e => {
                data.background[index].radius = Number(e.target.value);
                setCardData({
                  ...data
                });
              } }/>
            </InputGroup>
            {/* spread */}
            <Form.Select value={layer.spread} onChange={(e) => {
              data.background[index].spread = e.target.value as radialSpread;
              setCardData({
                ...data
              });
            }} >
            <option value="">pad</option>
            <option value="reflect">reflect</option>
            <option value="repeat">repeat</option>
          </Form.Select>
          </>}
        </div>
      </>}

      {/* choose colors */}
      <div className="form-control">
      {
        layer.type === "solid" &&
        <InputGroup>
          <ColorStop props={layer.value[0]} layerIndex={index} colorIndex={0} showOpacity={false} deletable={false} setCardData={setCardData} />
        </InputGroup >
      }
      {
        (layer.type === "linearGradient" || layer.type === "radialGradient") &&
        <Form.Group>
          {layer.value.map((stopColor, stopIndex)=> (
            <InputGroup key={`stop-color-${stopIndex}`}>
              <ColorStop props={stopColor} layerIndex={index} colorIndex={stopIndex} showOpacity={true} deletable={true} setCardData={setCardData} />
            </InputGroup >
          ))}
          <Button variant="secondary" className="mt-2" onClick={() => {
            data.background[index].value.push({color: "#FFFFFF", opacity: 5});
            setCardData({
              ...data,
            });
          }}>Add Color</Button>
        </Form.Group>
      }
      {
        (layer.type === "image" || layer.type === "texture") &&
        <Form.Group>
          <InputGroup>
            <DropdownButton
              variant="outline-secondary"
              title="Source"
              id="input-group-dropdown-1"
            >
              <Dropdown.Item href="#">Link</Dropdown.Item>
              <Dropdown.Item href="#">Upload File</Dropdown.Item>
            </DropdownButton>
            <Form.Control
              placeholder="Username"
              aria-label="Username"
            />
            <Form.Control type="file" />
          </InputGroup>
          
          
        </Form.Group>
      }
      </div>

      {/* delete button */}
      <Button variant="danger" className="btn-close" disabled={!index} onClick={() => {
        data.background.splice(index, 1);
        setCardData({
          ...data,
        });
      }}></Button>
    </InputGroup>  
}