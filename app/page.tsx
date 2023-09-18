"use client";
import { useState } from 'react';

import CardSvg from "./card/cardSvg";
import MainForm from "./form/mainForm";
import { defaultCard, CardContext } from "./defaults";

import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

export default function Document() {
  const [cardList, setCardList] = useState(()=> {return [JSON.parse(JSON.stringify(defaultCard))]});
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  function cardGroups() {
    const topCards = [];
    const bottomCards = [];

    for (let i = 0; i < cardList.length; i++) {
      let tempCard = <div key={`card-${i}`} onClick={() => setCurrentCardIndex(i)} style={{maxWidth: '100px'}}>
        card {i} 
        {i == currentCardIndex && <> is current card</>}:
        <CardSvg data={cardList[i]} index={i} />
      </div>
      if (i < currentCardIndex) {
        topCards.push(tempCard);
      } else if (i > currentCardIndex) {
        bottomCards.push(tempCard);
      }
    }

    return <>
      <div className='cardBucket'>
        {topCards}
      </div>
      <div style={{margin: '2% 0'}}>
        <Button onClick={makeNewCard} variant="primary">make new card</Button>
        <EditCard cardData={cardList[currentCardIndex]} index={currentCardIndex} ></EditCard>
      </div>
      <div className='cardBucket'>
        {bottomCards}
      </div>
    </>
  }

  function makeNewCard() {
    const newCard = JSON.parse(JSON.stringify(defaultCard));
    cardList.splice(currentCardIndex+1, 0, newCard);

    setCardList(cardList);
    setCurrentCardIndex(currentCardIndex+1);
  };

  // https://codepen.io/Alexander9111/pen/VwLaaPe?editors=1010
  function exportSVG() {
    const svg = document.querySelector('svg');
    if (svg) {
      const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
      const a = document.createElement('a');
      const e = new MouseEvent('click');
      a.download = 'download.svg';
      a.href = 'data:image/svg+xml;base64,' + base64doc;
      a.dispatchEvent(e);
    }
  }

  function exportPNG() {
    const canvas = document.createElement("canvas");
    const svg = document.querySelector('svg');
    if (svg) {
      const base64doc = btoa(unescape(encodeURIComponent(svg.outerHTML)));
      const w = 216// parseInt(svg.getAttribute('width'));
      const h = 313// parseInt(svg.getAttribute('height'));
      const img_to_download = document.createElement('img');
      img_to_download.src = 'data:image/svg+xml;base64,' + base64doc;
      img_to_download.onload = function () {
        canvas.setAttribute('width', `${w}px`);
        canvas.setAttribute('height', `${h}px`);
        const context = canvas.getContext("2d");
        if (context) {
          context.drawImage(img_to_download,0,0,w,h);
          const dataURL = canvas.toDataURL('image/png');
          const a = document.createElement('a');
          const my_evt = new MouseEvent('click');
          a.download = 'download.png';
          a.href = dataURL;
          a.dispatchEvent(my_evt);
        }
      }  
    }
  }

  return (
    <div>
      {/* <Button onClick={exportSVG} variant="primary">export svg</Button>
      <Button onClick={exportPNG} variant="primary">export png</Button> */}

      {cardGroups()}
    </div>
  )
}

function EditCard({cardData, index}: {cardData: CardData, index: number}) {
  const [, setData] = useState(cardData);
  function setCardData(data : CardData) {
    setData({
      ...data,
    });
  }

  return (
    <>
      <Container className='mw-100'>
        <Row>
          <Col sm={8} className='p-1'>
            <CardContext.Provider value={cardData}>
              <MainForm setCardData={setCardData} />
            </CardContext.Provider>
          </Col>
          <Col className='p-1'>
            <CardSvg index={index} data={cardData}  />
          </Col>
        </Row>
      </Container>
      
      {JSON.stringify(cardData)}
    </>
  )
}