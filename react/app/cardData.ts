interface CardData {
  colors: {
    background?: [background],
    border?: border
  },

  // colors: {
    // background: [
    //   {
    //     type: 'solid',
    //     value: [{color: string}]
    //   },
    //   {
    //     type: 'linearGradient',
    //     value: [
    //       {color: "#7B00A3", opacity: 50},
    //       {color: "#8f6161", opacity: 50}
    //     ],
    //     direction: {
    //       showGuide: true,
    //       start: { x: 0, y: 50 },
    //       end: { x: 100, y: 50 },
    //     }
    //   }
    // ],
    // texture: {
    //   value: "snow",
    // }
  // },
  // body: {
  //   attacks: [
  //     {
  //       type: "name",
  //       text: "All Hail!",
  //     },
  //   ],
  // },
}

interface border {
  type?: "solid"; // one of solid, transparent, linear gradient, radial gradient, image
  value: string;
}

interface background {
  type?: "solid";
  value: [
    {color: string, opacity?: number},
  ],
  direction?: {
    showGuide: true,
    start: { x: number, y: number },
    end:   { x: number, y: number },
  }
}