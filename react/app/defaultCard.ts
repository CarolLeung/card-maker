import { createContext } from 'react';

export const defaultCard: CardData = {
  border: {value: '#ffec9d'},
  background: [
    {
      type: 'solid',
      value: [{color: '#ffffff'}]
    },
    {
      type: 'linearGradient',
      value: [
        {color: "#7B00A3", opacity: 50},
        {color: "#8f6161", opacity: 50}
      ],
      showGuide: true,
      startX: 0,
      startY: 50,
      endX: 100,
      endY: 50,
    }
  ]
}

export const CardContext = createContext(defaultCard);
