"use client";
import { useState } from 'react';

import CardSvg from "./card/cardSvg";
import MainForm from "./form/mainForm";
import { defaultCard, CardContext } from "./defaultCard";

import Button from 'react-bootstrap/Button';

export default function Document() {
  const [cardList, setCardList] = useState(()=> {return [JSON.parse(JSON.stringify(defaultCard))]});
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  function makeNewCard() {
    const newCard = JSON.parse(JSON.stringify(defaultCard));
    cardList.splice(currentCardIndex+1, 0, newCard);

    setCardList(cardList);
    setCurrentCardIndex(currentCardIndex+1);
  };

  return (
    <div>
      <Button onClick={makeNewCard} variant="primary">make new card</Button>

      {cardList.map((card, i) => (
        <div key={`card-${i}`}>
          {
            i == currentCardIndex
              ? <EditCard cardData={card} index={i} ></EditCard>
              : <div onClick={() => setCurrentCardIndex(i)}>
                  card {i} 
                  {i == currentCardIndex && <> is current card</>}:
                  <CardSvg data={card} index={i} />
                </div>
          }
        </div>
      ))}
    </div>
  )
}

function EditCard({cardData, index}: {cardData: CardData, index: number}) {
  const [, setData] = useState(cardData);
  return (
    <>
      <CardContext.Provider value={cardData}>
        <MainForm setCardData={setData} />
      </CardContext.Provider>
      
      <CardSvg index={index} data={cardData}  />
      {JSON.stringify(cardData)}
    </>
  )
}