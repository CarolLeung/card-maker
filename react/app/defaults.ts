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
      radius: 100,
    }
  ]
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
}

export const defaultValues: backgroundPropertyDefault = {
  startX: {
    max: 99,
    min: 0,
    default: 0,
  },
  startY: {
    max: 99,
    min: 0,
    default: 0,
  },
  endX: {
    max: 100,
    min: 1,
    default: 100,
  },
  endY: {
    max: 100,
    min: 1,
    default: 0,
  },
  radius: {
    max: 100,
    min: 1,
    default: 50,
  },
};
