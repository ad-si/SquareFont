type Config = {
  width?: number
  height?: number
  fill?: string
  stroke?: string
  text?: string
}

export default function (conf: Config = {}, tools) {
  const defaults = {
    width: 800,
    height: 100,
    fill: "orange",
    stroke: "black",
    text: `abcdefghijklmnopqrstuvwxyz \
ABCDEFGHIJKLMNOPQRSTUVWXYZ \
1234567890 \
(){}[]`,
  }

  conf = tools.applyDefaults(conf, defaults)

  const svgDom = [
    "svg",
    {
      width: conf.width,
      height: conf.height,
    },

    [
      "defs",
      [
        "font#adrians-font",
        { "horiz-adv-x": 10 },
        [
          "font-face",
          {
            "font-family": "Adrians Font",
            "font-weight": 400,
            "font-style": "normal",
            "units-per-em": 16,
            "cap-height": 8,
            "x-height": 8,
            ascent: 12,
            descent: 4,
            alphabetic: 0,
            mathematical: 4,
            ideographic: 5,
            hanging: 8,
          },
          ["font-face-src", ["font-face-name", { name: "Adrians Font" }]],
        ],
        ["missing-glyph", ["path", { d: "M0,0 h200 v200 h-200 z" }]],
        [
          "glyph",
          {
            unicode: "a",
            d: `M0,0 h8 v8 h-8 v-1 h7 v-2 h-7 z \
M1,1 h6 v3 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "b",
            d: `M0,0 h8 v8 h-7 v6 h-1 z \
M1,1 h6 v6 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "c",
            d: "M0,0 h8 v1 h-7 v6 h7 v1 h-8 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "d",
            d: `M0,0 h8 v14 h-1 v-6 h-7 z \
M1,1 h6 v6 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "e",
            d: `M0,0 h8 v1 h-7 v3 h7 v4 h-8 z \
M1,5 h6 v2 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "f",
            d: "M4,0 h1 v7 h3 v1 h-3 v5 h2 v1 h-3 v-6 h-3 v-1 h3 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "g",
            d: `M0,0 h7 v-3 h-7 v-1 h8 v12 h-8 z \
M1,1 h6 v6 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "h",
            d: "M0,0 h1 v7 h6 v-7 h1 v8 h-7 v6 h-1 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "i",
            d: `M4,0 h1 v8 h-4 v-1 h3 z \
M4,10 h1 v1 h-1 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "j",
            d: `M4,0 v-3 h-3 v-1 h4 v12 h-4 v-1 h3 z \
M4,10 h1 v1 h-1 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "k",
            d: "M0,0 h1 v4 h6 v-4 h1 v8 h-1 v-3 h-6 v9 h-1 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "l",
            d: "M4,0 h1 v14 h-4 v-1 h3 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "m",
            d: "M0,0 h1 v7 h3 v-7 h1 v7 h2 v-7 h1 v8 h-8 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "n",
            d: "M0,0 h1 v7 h6 v-7 h1 v8 h-8 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "o",
            d: `M0,0 h8 v8 h-8 z \
M1,1 h6 v6 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "p",
            d: `M0,0 v-4 h1 v4 h7 v8 h-8 z \
M1,1 h6 v6 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "q",
            d: `M0,0 h7 v-4 h1 v12 h-8 z \
M1,1 h6 v6 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "r",
            d: "M0,0 h1 v7 h7 v1 h-8 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "s",
            d: "M0,0 h8 v5 h-7 v2 h7 v1 h-8 v-4 h7 v-3 h-7 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "t",
            d: "M4,0 h1 v7 h3 v1 h-3 v6 h-1 v-6 h-3 v-1 h3 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "u",
            d: "M0,0 h8 v8 h-1 v-7 h-6 v7 h-1 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "v",
            // d: 'M0,0 h1 l8,8 h-1 l-7,-7 v7 h-1 z'
            d: "M0,0 h8 v8 h-1 v-7 h-7 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "w",
            d: "M0,8 h1 v-7 h3 v7 h1 v-7 h2 v7 h1 v-8 h-8 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "x",
            d: "M0,0 h8 v1 h-4 v6 h4 v1 h-8 v-1 h3 v-6 h-3 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "y",
            d: "M0,0 h7 v-3 h-7 v-1 h8 v12 h-1 v-7 h-6 v7 h-1 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "z",
            d: "M0,0 h8 v1 h-7 v3 h7 v4 h-8 v-1 h7 v-2 h-7 z",
          },
        ],

        [
          "glyph",
          {
            unicode: "A",
            d: `M0,0 h1 v7 h6 v-7 h1 v14 h-8 z \
M1,8 h6 v5 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "B",
            d: `M0,0 h8 v14 h-8 z \
M1,1 h6 v6 h-6 z \
M1,8 h6 v5 h-6 z`,
          },
        ],
        [
          "glyph",
          {
            unicode: "C",
            d: "M0,0 h8 v1 h-7 v12 h7 v1 h-8 z",
          },
        ],
        [
          "glyph",
          {
            unicode: "D",
            d: `M0,0 a6,6 0,0,1 0,14 z \
M1,1 a0,0 0,0,1 0,12 z`,
          },
        ],
      ],
    ],
    [
      "text&",
      {
        x: 10,
        y: 50,
        style: {
          fill: "black",
          color: "black",
          "font-family": '"Adrians Font", Helvetica, sans-serif',
          "font-weight": 400,
          "font-style": "normal",
          "font-size": "16px",
        },
      },
      ["tspan", conf.text],
      ["br"],
      ["tspan", conf.text],
    ],
    [
      "text",
      {
        x: 10,
        y: 70,
        style: {
          fill: "black",
          color: "black",
          "font-family": "Helvetica, sans-serif",
          "font-weight": 400,
          "font-style": "normal",
          "font-size": "16px",
        },
      },
      conf.text,
    ],
  ]

  return tools.shaven(svgDom).rootElement
}
