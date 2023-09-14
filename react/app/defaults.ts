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
    // {
    //   type: 'linearGradient',
    //   value: [
    //     {color: "#7B00A3", opacity: 5},
    //     {color: "#8f6161", opacity: 5}
    //   ],
    //   showGuide: true,
    //   startX: 0,
    //   startY: 50,
    //   endX: 100,
    //   endY: 50,
    //   radius: 100,
    // }
  ],
  header: {
    left: {
      text: [{
        type: 'text',
        value: 'card title',
        color: '#000000',
        size: 16,
      }],
    },
    center: { text: [] },
    right: { text: [] }
  }
}

export const CardContext = createContext(defaultCard);

export const defaultBackground: background = {
  type: 'linearGradient',
  value: [
    {color: "#ffffff", opacity: 5},
  ],
  showGuide: true,
  startX: 0,
  startY: 50,
  endX: 100,
  endY: 50,
  radius: 100,
  directionPreset: '0-1-0',
  radialPreset: '1-1'
}

export const defaultText: textElement = {
  type: 'text',
  value: 'placeholder',
  color: '#000000',
  size: 16,
}