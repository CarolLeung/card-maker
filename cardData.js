const cardDataList = [
  {
    "name": "Patron Saint",
    "src": "0_carol_ugly_dutchess.jpg",
    "mainColor": "#9562a3",
    "icon": "art",
    "mainImg": {
      "top": "-98px"
    },
    "numberDesc": "year",
    "numberValue": 1513,
    "stage": 0, // false or a number
    "attacks": [
      {
        "name": "All Hail!",
        "description": "Praying to the ugly dutchess grants a greater appreciation to the fine arts."
      },
      {
        "name": "Not to scale",
        "description": "Paintings are smaller in real life."
      },
      {
        "name": "Aren't you glad we hunted her down?",
        "description": "We saw the hidden gem of London."
      }
    ],
    colors: {
      background: {
        type: "linearGradient", // one of solid, transparent, linear gradient, radical gradient, image
        solid: "#7B62A3",
        linearGradient: [
          {value: "#7B62A3"},
          {value: "#8f6161"}
        ],
        radicalGradient: ["#7B62A3"],
      },
      border: {
        type: "solid", // one of solid, transparent, linear gradient, radical gradient, image
        value: "#646464",
      },
      texture: {
        value: "snow",
      }
    },
    "body": {
      attacks: [
        {
          type: "name",
          text: "All Hail!",
        },
        {
          type: "description",
          text: "Praying to the ugly dutchess grants a",
        },
        {
          type: "description",
          text: "greater appreciation to the fine arts.",
        },
        {
          type: "name",
          text: "Not to scale",
        },
        {
          type: "description",
          text: "Paintings are smaller in real life.",
        },
        {
          type: "name",
          text: "Aren't you glad we hunted her down?",
        },
        {
          type: "description",
          text: "We saw the hidden gem of London.",
        },
      ],
    },
    "full": false
  },
  {
    "name": "captain ebu",
    "src": "1_ebu_belfast.jpg",
    "mainColor": "#d89abb",
    "icon": "boat",
    "mainImg": {
      "height": "100%",
      "width": "auto",
      "top": 0,
      "left": 0
    },
    "numberDesc": "june",
    "numberValue": "5",
    "stage": 1, // false or a number
    "attacks": [
      {
        "name": "Chain of Command",
        "description": "Order around white men (3 turns)"
      },
      {
        "name": "Stiff upper lip",
        "description": "Ready to conquer the high seas."
      },
      {
        "name": "Houston, we have a problem",
        "description": "You'd better come see this."
      }
    ],
    "full": false
  },
  {
    "name": "Real Live Dragon",
    "src": "2_carol_dragon.jpg",
    "mainColor": "#ef6216",
    "icon": "fire",
    "full": true,
    "mainImg": {
      "height": "auto",
      'width': "215px",
      "left": "-12px",
      "top": "-80px"
    },
    "numberDesc": "lv",
    "numberValue": 23,
    "stage": 0, // false or a number
    "attacks": [
      {
        "name": "Draconic Blessing",
        "description": "Apply protection status to yourself when worshipping your reptilian overlord."
      },
      {
        "name": "Hug, please",
        "description": "Its scales are hard but its heart is soft."
      }
    ],
    "mainDescription": "description"
  },
  // {
  //   "name": "Fabulous Flourish",
  //   "src": "3_cry_tree.jpg",
  //   "mainColor": "#46bdc6",
  //   "icon": "stretch",
  //   "mainImg": {
  //     "height": "auto",
  //     'width': "100%",
  //     "left": "0",
  //     "top": "-55px"
  //   },
  //   "numberDesc": "deg",
  //   "numberValue": "130",
  //   "attacks": [
  //     {
  //       "name": "Strike a Pose",
  //       "description": "Stripping responsibly increases your style rating."
  //     },
  //     {
  //       "name": "Yaaaaaaas",
  //       "description": "Work that body."
  //     },
  //     {
  //       "name": "wooOoOOt",
  //       "description": "Swing that shirt."
  //     }
  //   ],
  //   "full": false
  // },
  // {
  //   "name": "Fitness is Hard",
  //   "src": "5_bum_fan.jpg",
  //   "mainColor": "#81a7a3",
  //   "icon": "fan",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-76%",
  //     "left": 0
  //   },
  //   "imageDesc": "trampoline park",
  //   "numberDesc": "hp",
  //   "numberValue": "1",
  //   "stage": false,
  //   "evolvesFrom": "x",
  //   "attacks": [
  //     {
  //       "name": "\"I'm flying!!!\"",
  //       "description": "Increase your attack for one turn by jumping really high."
  //     },
  //     {
  //       "name": "Not a Fan of the Heat",
  //       "description": "Bench yourself because of lactic acid buildup."
  //     },
  //     {
  //       "name": "Sneaky Max Fan in the Background",
  //       "description": ""
  //     }
  //   ],
  //   "mainDescription": "Guest star Max Fan."
  // },
  // {
  //   "name": "Circle of life",
  //   "src": "4_cry_backpack.jpg",
  //   "mainColor": "#33a774",
  //   "icon": "stretch",
  //   "full": true,
  //   "mainImg": {
  //     "height": "263%",
  //     "width": "auto",
  //     "top": "-35%",
  //     "left": "-10%"
  //   },
  //   "imageDesc": "",
  //   "numberDesc": "meters",
  //   "numberValue": "100",
  //   "stage": "",
  //   "evolvesFrom": "x",
  //   "attacks": [
  //     {
  //       "name": "NAHHH ZABENYA",
  //       "description": "BADABEETSEE BABA"
  //     },
  //     {
  //       "name": "Look, there's a backpack.",
  //       "description": "Yep, that's a backpack."
  //     }
  //   ],
  //   "mainDescription": ""
  // },
  // {
  //   "name": "Alchemist",
  //   "src": "20180605_063605.jpg",
  //   "mainColor": "#ff80c4",
  //   "borderColor": "#FFE165",
  //   "icon": "knife",
  //   "full": false,
  //   "mainImg": {
  //     "height": "197%",
  //     "width": "auto",
  //     "top": "-49%",
  //     "left": "-63%"
  //   },
  //   "imageDesc": "image description",
  //   "numberDesc": "bce",
  //   "numberValue": "78",
  //   "attacks": [
  //     {
  //       "name": "What Can I Get You?",
  //       "description": "Apply random effects to one ally."
  //     },
  //     {
  //       "name": "Hospital Trip",
  //       "description": "Your ally got a weird disease..."
  //     },
  //     {
  //       "name": "Pre-med Student",
  //       "description": "Wait 2 turns to finish brewing a potion."
  //     }
  //   ],
  //   "mainDescription": "other descriptive text"
  // },
  // {
  //   "name": "(screeching noise)",
  //   "src": "50455497_2186044851661125_5405081059136110592_n.jpg",
  //   "mainColor": "#88997a",
  //   "borderColor": "#000000",
  //   "icon": "music",
  //   "full": true,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "112%",
  //     "top": "-75%",
  //     "left": "-7%"
  //   },
  //   "imageDesc": "",
  //   "numberDesc": "grade",
  //   "numberValue": "10",
  //   "stage": false,
  //   "evolvesFrom": "x",
  //   "attacks": [
  //     {
  //       "name": "Bad Tuning",
  //       "description": "Stun all enemies for one turn."
  //     },
  //     {
  //       "name": "\"This doesn't sound right...\"",
  //       "description": "Because body parts can't play instruments."
  //     }
  //   ],
  //   "mainDescription": "other descriptive text"
  // },
  // {
  //   "name": "Existential Crisis",
  //   "src": "28946804_10156171473970996_1135830852_o.jpg",
  //   "mainColor": "#f1eb80",
  //   "icon": "knife",
  //   "full": true,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "116%",
  //     "top": "-54%",
  //     "left": "-7%",
  //     "transform": "rotate(-2deg)"
  //   },
  //   "imageDesc": "image description",
  //   "numberDesc": "meals",
  //   "numberValue": "5",
  //   "stage": false,
  //   "evolvesFrom": "x",
  //   "attacks": [
  //     {
  //       "name": "Carbs Galore",
  //       "description": "Add (comatose) status to yourself."
  //     },
  //     {
  //       "name": "\"How am I going to finish all this?\"",
  //       "description": "You're not."
  //     }
  //   ],
  //   "mainDescription": "other descriptive text"
  // },
  // {
  //   "name": "Vegetable Companion",
  //   "src": "20190324_115425.jpg",
  //   "mainColor": "#f5861e",
  //   "icon": "art",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": "0%",
  //     "left": "-13%"
  //   },
  //   "imageDesc": "image description",
  //   "numberDesc": "$",
  //   "numberValue": "0.79",
  //   "stage": false,
  //   "evolvesFrom": "x",
  //   "attacks": [
  //     {
  //       "name": "Source of Lutein",
  //       "description": "Cures blind status."
  //     },
  //     {
  //       "name": "Cannibalism",
  //       "description": "Eating the woman doesn't cure anything."
  //     },
  //     {
  //       "name": "Mini Armchair",
  //       "description": "Taking a one-seater couch to the extreme."
  //     }
  //   ],
  //   "mainDescription": "other descriptive text"
  // },
  // {
  //   "name": "Forbidden Dissection",
  //   "src": "40683967_1591549237617070_5641953595046756352_n.jpg",
  //   "mainColor": "#ff9898",
  //   "icon": "pig",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-16%",
  //     "left": "0%"
  //   },
  //   "imageDesc": "image description",
  //   "numberDesc": "am",
  //   "numberValue": "7:30",
  //   "stage": false,
  //   "evolvesFrom": "x",
  //   "attacks": [
  //     {
  //       "name": "Swine Beheading",
  //       "description": "Apply confusion status to yourself when holding the head of a baby pig."
  //     },
  //     {
  //       "name": "\"I'm not awake enough for this.\"",
  //       "description": "\"It's okay, just look at the camera.\""
  //     },
  //     {
  //       "name": "Image taken before disaster",
  //       "description": "Remove the skin, snout and finally the brain."
  //     }
  //   ],
  //   "mainDescription": "other descriptive text"
  // },
  // {
  //   "name": "Race queen",
  //   "src": "67360266_1139627736246683_3510533077489156096_n.jpg",
  //   "mainColor": "#d3497e",
  //   "borderColor": "#b5b5b5",
  //   "icon": "car",
  //   "full": true,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "125%",
  //     "top": "-100%",
  //     "left": "-14%",
  //     "transform": "rotate(-5deg)"
  //   },
  //   "imageDesc": "image description",
  //   "numberDesc": "km/h",
  //   "numberValue": "0",
  //   "stage": false,
  //   "evolvesFrom": "x",
  //   "attacks": [
  //     {
  //       "name": "Pink Cadillac",
  //       "description": "Greatly increase your attack when you're hugging a car."
  //     },
  //     {
  //       "name": "American Dream",
  //       "description": "You want a smol car, not a white picket fence."
  //     }
  //   ],
  //   "mainDescription": "other descriptive text"
  // },
  // {
  //   "name": "Dubious Squint",
  //   "src": "20180318.jpg",
  //   "mainColor": "#98982e",
  //   "icon": "eye",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "108%",
  //     "top": "-100%",
  //     "left": "-2%",
  //     "transform": "rotate(-5deg)"
  //   },
  //   "numberDesc": "pictures",
  //   "numberValue": "3",
  //   "attacks": [
  //     {
  //       "name": "Judgement",
  //       "description": "Remove all buffs from one enemy by staring at them."
  //     },
  //     {
  //       "name": "\"Why are you taking my picture?\"",
  //       "description": "Only the person who took this will ever know."
  //     },
  //     {
  //       "name": "It's Bum by the way.",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Surprise Visit",
  //   "src": "20210125_195204.jpg",
  //   "mainColor": "#83a3be",
  //   "borderColor": "#FFE165",
  //   "icon": "fire",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-85%",
  //     "left": 0
  //   },
  //   "numberDesc": "celsius",
  //   "numberValue": "1",
  //   "attacks": [
  //     {
  //       "name": "Cake Offering",
  //       "description": "Apply birthday blessing to one ally."
  //     },
  //     {
  //       "name": "Too Cold",
  //       "description": "Skip your turn because you were too busy trying to light the candle."
  //     },
  //     {
  //       "name": "Too Windy",
  //       "description": "Fail to light the candle."
  //     }
  //   ]
  // },
  // {
  //   "name": "Bunking Around",
  //   "src": "20180603_155247.jpg",
  //   "mainColor": "#e25454",
  //   "borderColor": "#FFE165",
  //   "icon": "sleep",
  //   "full": false,
  //   "mainImg": {
  //     "height": "111%",
  //     "width": "auto",
  //     "top": "-10%",
  //     "left": "-9%",
  //     "transform": "rotate(-1deg)"
  //   },
  //   "numberDesc": "beds",
  //   "numberValue": "6",
  //   "attacks": [
  //     {
  //       "name": "Lower Bunk",
  //       "description": "Apply evade as long as you're lying down. "
  //     },
  //     {
  //       "name": "Upper Bunk",
  //       "description": "Make one enemy cry because they can't have the top bunk."
  //     },
  //     {
  //       "name": "Not the Titanic",
  //       "description": "Draw me like one of your chinese girls."
  //     }
  //   ]
  // },
  // {
  //   "name": "Take a Break",
  //   "src": "69329496_1615849325212516_3303713823612993536_n.jpg",
  //   "mainColor": "#3fb161",
  //   "borderColor": "#FFE165",
  //   "icon": "sleep",
  //   "full": false,
  //   "mainImg": {
  //     "height": "111%",
  //     "width": "auto",
  //     "top": "-8%",
  //     "left": "-24%"
  //   },
  //   "numberDesc": "spf",
  //   "numberValue": "50",
  //   "attacks": [
  //     {
  //       "name": "Hand Shield",
  //       "description": "Preventing sunburn for an ally applies debuff immune status to you."
  //     },
  //     {
  //       "name": "The Great Outdoors",
  //       "description": "Vitamin D is still important."
  //     },
  //     {
  //       "name": "Hold your hand higher",
  //       "description": "A little to the right."
  //     }
  //   ]
  // },
  // {
  //   "name": "Happy faces",
  //   "src": "59894101_423913468399703_6167574411445534720_n.jpg",
  //   "mainColor": "#34d0ef",
  //   "icon": "knife",
  //   "full": true,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "142%",
  //     "top": "-64%",
  //     "left": "-30%"
  //   },
  //   "numberDesc": "smiles",
  //   "numberValue": "4",
  //   "attacks": [
  //     {
  //       "name": "Normal Pose",
  //       "description": "This attack does nothing because <br> everyone's not weird enough."
  //     },
  //     {
  //       "name": "Armed and Dangerous",
  //       "description": "Ready to murder a volcano."
  //     }
  //   ]
  // },
  // {
  //   "name": "in sync",
  //   "src": "44874045_2009900995700068_5670550655534628864_n.jpg",
  //   "mainColor": "#962d2d",
  //   "icon": "paw",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": "0%",
  //     "left": "-6%"
  //   },
  //   "numberDesc": "spirit animals",
  //   "numberValue": "2",
  //   "attacks": [
  //     {
  //       "name": "Look Over There",
  //       "description": "Make all enemies look away-- their attacks will miss you for one turn."
  //     },
  //     {
  //       "name": "D'aww",
  //       "description": "I want to give both of them a big squeeeeeeeeeeze <3"
  //     },
  //     {
  //       "name": "Easily Distracted",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "like the fog has lifted",
  //   "src": "43368924_466875450385978_2478351418629554176_n.jpg",
  //   "mainColor": "#81ccd9",
  //   "borderColor": "#FFE165",
  //   "icon": "stretch",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": "0%",
  //     "left": "-6%"
  //   },
  //   "numberDesc": "lamps",
  //   "numberValue": "2",
  //   "attacks": [
  //     {
  //       "name": "And at Last I See the Light",
  //       "description": "Embrace illumination and increase attack for you and one other ally."
  //     },
  //     {
  //       "name": "Warm and Real and Bright",
  //       "description": "Bonus attack if you and your ally have no idea why they're acting this way."
  //     },
  //     {
  //       "name": "(Lyrics from Tangled)",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Triple Derp",
  //   "src": "20181230_135742.jpg",
  //   "mainColor": "#d0c48b",
  //   "borderColor": "#FFE165",
  //   "icon": "music",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-64%",
  //     "left": 0
  //   },
  //   "numberDesc": "derps",
  //   "numberValue": "3",
  //   "attacks": [
  //     {
  //       "name": "Symbiosis",
  //       "description": "Increase attack and defense for your entire party when everyone acts weird."
  //     },
  //     {
  //       "name": "Hokey Pokey in the kitchen",
  //       "description": "You put your left hand in <br> You put your left hand out <br> You put your left hand in <br> And you shake it all about"
  //     }
  //   ]
  // },
  // {
  //   "name": "Terracotta Buddies",
  //   "src": "20181203_132837.jpg",
  //   "mainColor": "#9388a5",
  //   "borderColor": "#FFE165",
  //   "icon": "eye",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-45%",
  //     "left": "0%"
  //   },
  //   "numberDesc": "bce",
  //   "numberValue": "210",
  //   "attacks": [
  //     {
  //       "name": "Greetings From 210 BCE",
  //       "description": "Photobomb so hard that you turn one enemy into a statue."
  //     },
  //     {
  //       "name": "Multigenerational Genes",
  //       "description": "The judging look was inherited down the family for centuries."
  //     },
  //     {
  //       "name": "Look of a Great Warrior",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Typical Day At Home",
  //   "src": "20181031_220332.jpg",
  //   "mainColor": "#2e615d",
  //   "icon": "knife",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": 0,
  //     "left": "-4%"
  //   },
  //   "numberDesc": "blade",
  //   "numberValue": "1",
  //   "attacks": [
  //     {
  //       "name": "Just Admiring My Knife",
  //       "description": "Contemplate existence with a dirty kitchen tool."
  //     },
  //     {
  //       "name": "Stop It",
  //       "description": "Just put it down."
  //     },
  //     {
  //       "name": "That knife is bigger than your head",
  //       "description": "Simple observation."
  //     }
  //   ]
  // },
  // {
  //   "name": "Hello Kitty & Friends",
  //   "src": "20180721_111936.jpg",
  //   "mainColor": "#c4e275",
  //   "icon": "car",
  //   "full": false,
  //   "mainImg": {
  //     "height": "111%",
  //     "width": "auto",
  //     "top": "-11%",
  //     "left": "-12%"
  //   },
  //   "numberDesc": "wheels",
  //   "numberValue": "4",
  //   "attacks": [
  //     {
  //       "name": "Best Buds",
  //       "description": "Heal an ally by taking them for a joyride."
  //     },
  //     {
  //       "name": "No One's Wearing Seatbelts",
  //       "description": "Why can't anyone follow basic road safety???"
  //     },
  //     {
  //       "name": "Beep Beep Motherf*ckers",
  //       "description": "I see you driving 'round town with the girl I love and I'm like, \"F*ck youUUuuUUU!\""
  //     }
  //   ]
  // },
  // {
  //   "name": "Keratinous Strands",
  //   "src": "20180623_123044.jpg",
  //   "mainColor": "#63a17b",
  //   "icon": "bone",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-74%",
  //     "left": "0%"
  //   },
  //   "numberDesc": "hairs",
  //   "numberValue": "74",
  //   "attacks": [
  //     {
  //       "name": "You Smell Good",
  //       "description": "KO one enemy when you sniff their hair because they probably weren't expecting it."
  //     },
  //     {
  //       "name": "So that's what you were doing",
  //       "description": "I thought you were making a long mustache."
  //     },
  //     {
  //       "name": "Hair????",
  //       "description": "Bubble tea is life - Ebu 2021/3/10"
  //     }
  //   ]
  // },
  // {
  //   "name": "Bus Driving Radiologist",
  //   "src": "20180608_150123.jpg",
  //   "mainColor": "#525e98",
  //   "borderColor": "#FFE165",
  //   "icon": "car",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": "0%",
  //     "left": "-20%"
  //   },
  //   "numberDesc": "$",
  //   "numberValue": "3",
  //   "attacks": [
  //     {
  //       "name": "Designated Driver",
  //       "description": "She knows all of the street names!!!"
  //     },
  //     {
  //       "name": "She Does It All",
  //       "description": "She's also against animal testing!!!!"
  //     },
  //     {
  //       "name": "Jack of All Trades",
  //       "description": "She makes leather wallets as well!!!!!"
  //     }
  //   ]
  // },
  // {
  //   "name": "Sigh",
  //   "src": "20180607_164515.jpg",
  //   "mainColor": "#0d4618",
  //   "icon": "art",
  //   "full": false,
  //   "mainImg": {
  //     "height": "107%",
  //     "width": "auto",
  //     "top": "-4%",
  //     "left": "-23%"
  //   },
  //   "numberDesc": "headaches",
  //   "numberValue": "2",
  //   "attacks": [
  //     {
  //       "name": "Oh No",
  //       "description": "Do something really dumb and apply confusion status to one enemy."
  //     },
  //     {
  //       "name": "They Didn't",
  //       "description": "Wonder why you did the dumb thing and confuse yourself too."
  //     },
  //     {
  //       "name": "Unfortunately, They Did",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Pure Pained Smile",
  //   "src": "20180607_153307.jpg",
  //   "mainColor": "#ddac92",
  //   "borderColor": "#dbdbdb",
  //   "icon": "fire",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": 0,
  //     "left": "-11%"
  //   },
  //   "numberDesc": "pain level",
  //   "numberValue": "6",
  //   "attacks": [
  //     {
  //       "name": "Weird Dragon",
  //       "description": "Squint really hard because you're not sure what that is and skip your turn."
  //     },
  //     {
  //       "name": "Is This a Dragon?",
  //       "description": "Absolutely not, it's a pig with a funky tail."
  //     },
  //     {
  //       "name": "Or is it a Wild Carol",
  //       "description": "Can't be tamed. (That's a lie please pet me.)"
  //     }
  //   ]
  // },
  // {
  //   "name": "Musically Gifted",
  //   "src": "20180608_133550.jpg",
  //   "mainColor": "#b39240",
  //   "icon": "music",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-105%",
  //     "left": 0
  //   },
  //   "numberDesc": "year",
  //   "numberValue": "1712",
  //   "attacks": [
  //     {
  //       "name": "Clavichord",
  //       "description": "Play some music and recover HP."
  //     },
  //     {
  //       "name": "Lute",
  //       "description": "Play some more music and <br>recover HP for an ally."
  //     },
  //     {
  //       "name": "Cornet",
  //       "description": "Play some music and revive an ally."
  //     }
  //   ]
  // },
  // {
  //   "name": "Squatters",
  //   "src": "20180826.jpg",
  //   "mainColor": "#5a9037",
  //   "borderColor": "#FFE165",
  //   "icon": "stretch",
  //   "full": false,
  //   "mainImg": {
  //     "height": "111%",
  //     "width": "auto",
  //     "top": "-9%",
  //     "left": "-17%"
  //   },
  //   "numberDesc": "posers",
  //   "numberValue": "3",
  //   "attacks": [
  //     {
  //       "name": "Do You Even Squat Bro",
  //       "description": "Increase your defense by strengthening your BUM."
  //     },
  //     {
  //       "name": "Training to be a Sumo Wrestler",
  //       "description": "Must practice the asian squat."
  //     },
  //     {
  //       "name": "Statues Have Feelings Too",
  //       "description": "\"Please don't hump my hand.\""
  //     }
  //   ]
  // },
  // {
  //   "name": "Burial Ground",
  //   "src": "20180608_190225.jpg",
  //   "mainColor": "#ce6e00",
  //   "borderColor": "#c9c9c9",
  //   "icon": "bone",
  //   "full": false,
  //   "mainImg": {
  //     "height": "118%",
  //     "width": "auto",
  //     "top": 0,
  //     "left": "-27%"
  //   },
  //   "numberDesc": "bones",
  //   "numberValue": "852",
  //   "attacks": [
  //     {
  //       "name": "Feeling Bonely",
  //       "description": "You're the only one alive."
  //     },
  //     {
  //       "name": "They Were Like This <Br> When I Found Them",
  //       "description": "I swear I didn't do this."
  //     },
  //     {
  //       "name": "Caught at the Scene of the Crime",
  //       "description": "The bodies were moved post mortem!"
  //     }
  //   ]
  // },
  // {
  //   "name": "A Big Friend",
  //   "src": "20150504_123146.jpg",
  //   "mainColor": "#69aed8",
  //   "borderColor": "#FFE165",
  //   "icon": "paw",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "100%",
  //     "top": "-90%",
  //     "left": "0%"
  //   },
  //   "numberDesc": "legs",
  //   "numberValue": "6",
  //   "attacks": [
  //     {
  //       "name": "What a Beautiful Moth",
  //       "description": "Marvel at this creature and skip your turn."
  //     },
  //     {
  //       "name": "Curly Antennae",
  //       "description": "Look at that beautiful Fibonacci curve."
  //     },
  //     {
  //       "name": "Bugs Eww",
  //       "description": "Wouldn't be so happy if the bug wasn't behind glass."
  //     }
  //   ]
  // },
  // {
  //   "name": "Yes Ma'am",
  //   "src": "20180607_141833.jpg",
  //   "mainColor": "#8ad06b",
  //   "icon": "stretch",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": 100,
  //     "top": "-62%",
  //     "left": 0
  //   },
  //   "numberDesc": "rank",
  //   "numberValue": "1",
  //   "attacks": [
  //     {
  //       "name": "Salute your Officers",
  //       "description": "Saluting one enemy will confuse them because they're not even part of the military."
  //     },
  //     {
  //       "name": "High Rank",
  //       "description": "When the enemy is confused, demote them."
  //     },
  //     {
  //       "name": "Looking Cool Ebu",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Beary Vicious",
  //   "src": "20180604_121104.jpg",
  //   "mainColor": "#006db5",
  //   "icon": "paw",
  //   "full": true,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "112%",
  //     "top": "-124%",
  //     "left": "-7%"
  //   },
  //   "numberDesc": "cm",
  //   "numberValue": "160",
  //   "attacks": [
  //     {
  //       "name": "Imitation",
  //       "description": "Causes one enemy to turn into a bear that will hibernate and not attack you."
  //     },
  //     {
  //       "name": "Let Me Out",
  //       "description": "Poor bear just wants to be freed."
  //     }
  //   ]
  // },
  // {
  //   "name": "Inside the Galleon",
  //   "src": "20180605_053324_HDR.jpg",
  //   "mainColor": "#7d496e",
  //   "icon": "boat",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": 0,
  //     "left": "-9%"
  //   },
  //   "numberDesc": "sailor",
  //   "numberValue": "1",
  //   "attacks": [
  //     {
  //       "name": "A Smooth Ride",
  //       "description": "Heal 1/3 of your HP by sitting down with your captain."
  //     },
  //     {
  //       "name": "Oof, A Rogue Wave",
  //       "description": "Lose 1/3 of your HP because of seasickness."
  //     },
  //     {
  //       "name": "NEAR FAR WHEREVER YOU ARE",
  //       "description": "I BELIEVE THAT THE HEART DOES GO ON"
  //     }
  //   ]
  // },
  // {
  //   "name": "London Dab",
  //   "src": "received_2373515449331339.jpeg",
  //   "mainColor": "#93ec6a",
  //   "icon": "stretch",
  //   "full": true,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "113%",
  //     "top": "-95%",
  //     "left": "-7%"
  //   },
  //   "numberDesc": "age",
  //   "numberValue": "20+",
  //   "attacks": [
  //     {
  //       "name": "Dance of the Youth",
  //       "description": "Posing like this automatically makes all enemies forfeit the battle."
  //     },
  //     {
  //       "name": "Cleanup in Aisle 6",
  //       "description": "Destroy those young'uns with the dab of a twenty-something."
  //     }
  //   ]
  // },
  // {
  //   "name": "Take Five",
  //   "src": "20190602_141911.jpg",
  //   "mainColor": "#3f88da",
  //   "icon": "sleep",
  //   "full": false,
  //   "mainImg": {
  //     "height": "108%",
  //     "width": "auto",
  //     "top": 0,
  //     "left": "-13%"
  //   },
  //   "numberDesc": "nap",
  //   "numberValue": "2:00",
  //   "attacks": [
  //     {
  //       "name": "Coal Harbour Park",
  //       "description": "Experience the splendor of Burrard Inlet and remove all negative status effects from yourself."
  //     },
  //     {
  //       "name": "Grass is Good",
  //       "description": "Lie down and have a nap. :)"
  //     },
  //     {
  //       "name": "Clear skies make us sleepy",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Elevator Social Distancing",
  //   "src": "20210125_195704.jpg",
  //   "mainColor": "#e260dd",
  //   "icon": "eye",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": 0,
  //     "left": "-4%"
  //   },
  //   "numberDesc": "balloons",
  //   "numberValue": "28",
  //   "attacks": [
  //     {
  //       "name": "6 Feet",
  //       "description": "Increase your resistance to viruses with the power of friendship."
  //     },
  //     {
  //       "name": "I Can't See",
  //       "description": "Apply blind status because masks and glasses don't go well together."
  //     },
  //     {
  //       "name": "Life during Mar 2020 - TBD",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Health Gadgets",
  //   "src": "40752809_2183062785294672_6118782414731870208_n.jpg",
  //   "mainColor": "#9752ff",
  //   "icon": "stretch",
  //   "full": true,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "111%",
  //     "top": "-60%",
  //     "left": "-12px"
  //   },
  //   "numberDesc": "confused",
  //   "numberValue": "2",
  //   "attacks": [
  //     {
  //       "name": "A Thingamabob",
  //       "description": "Step on the thingamabob and get your chakras aligned!"
  //     },
  //     {
  //       "name": "A Doohickey",
  //       "description": "Step on the doohickey again for your daily vitamin intake!!!"
  //     }
  //   ]
  // },
  // {
  //   "name": "No One is Normal",
  //   "src": "51092621_314978155817313_7966889232834756608_n.jpg",
  //   "mainColor": "#ffe165",
  //   "icon": "pig",
  //   "full": false,
  //   "mainImg": {
  //     "height": "100%",
  //     "width": "auto",
  //     "top": 0,
  //     "left": "-13%"
  //   },
  //   "numberDesc": "humans",
  //   "numberValue": "4",
  //   "attacks": [
  //     {
  //       "name": "Full Derp",
  //       "description": "Increase max health for your entire party when no one is posing properly."
  //     },
  //     {
  //       "name": "Extra Derp",
  //       "description": "Even your food will start to make funny expressions."
  //     },
  //     {
  //       "name": "Pre Sugar Sugar Rush",
  //       "description": ""
  //     }
  //   ]
  // },
  // {
  //   "name": "Face the Front",
  //   "src": "DSC06771.JPG",
  //   "mainColor": "#b6597b",
  //   "icon": "fan",
  //   "full": false,
  //   "mainImg": {
  //     "height": "auto",
  //     "width": "115%",
  //     "top": "-18%",
  //     "left": 0
  //   },
  //   "numberDesc": "posers",
  //   "numberValue": "4",
  //   "attacks": [
  //     {
  //       "name": "More Inexplicable Poses",
  //       "description": "Why are our backs to the camera?"
  //     },
  //     {
  //       "name": "I actually have no idea <br>what's going on.",
  //       "description": "Like... why??"
  //     },
  //     {
  //       "name": "Because it's for a photo.",
  //       "description": "Think of it like a professional photoshoot."
  //     }
  //   ]
  // }
]
