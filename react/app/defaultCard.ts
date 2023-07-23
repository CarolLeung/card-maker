import { createContext } from 'react';

export const defaultCard: CardData = {
  border: [
    {
      type: 'solid',
      value: [{color: '#ffec9d'}]
    },
  ],
  background: [
    {
      type: 'solid',
      value: [{color: '#ffffff'}]
    },
    {
      type: 'linearGradient',
      value: [
        {color: "#7B00A3", opacity: 5},
        {color: "#8f6161", opacity: 5}
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
