//====================================
// Brand / Legacy Colors
//====================================

const fmBrandColors:any = {
  "fm": {
    black: "hsl(0,0%,7%)", // hex: "#121212",
    navy: "hsl(203, 88%, 16%)", // hex: "#05314d",
    blue: "hsl(203, 88%, 27%)", // hex: "#085280",
    gray: "hsl(30, 10%, 92%)", // hex: "#edebe9",
    white: "hsl(0, 0%, 100%)", // hex: "#fff",
    yellow: "hsl(42, 100%, 50%)", // hex: "#ffb400",
    orange: "hsl(18, 71%, 45%)", // hex: "#c55422",
    green: "hsl(131, 41%, 29%)", // hex: "#2c6937",
    teal: "hsl(191, 62%, 36%)", // hex: "#238196",
    magenta: "hsl(327, 70%, 34%)", // hex: "#911a5b"
  },
  "adk": {
    primary: "hsl(203, 88%, 33%)", // hex: "#0a649d",
    "primary-alt": "hsl(191, 62%, 36%)", // hex: "#238196",
    secondary: "hsl(0, 0%, 100%)", // hex: "#fff", fm-white
    destructive: "hsl(0, 63%, 50%)", // hex"  #d02f2f",
    safe: "hsl(131, 87%, 28%)", // hex: "#098620",
    interactive: "hsl(203, 73%, 58%)", // hex:  "#47a7e2",
    "base-alert": "hsl(35, 100%, 60%)", // hex: "#ffaa33",
    canvas: "hsl(30, 10%, 92%)", // fm-gray
    text: "hsl(0,0%,7%)", // fm-black
  },
}

//====================================
// Color Coordinates for UI colors
//====================================

// use these to mix new colors in the UI -- helpful for custom lightness or alpha adjustments. 

const hueSat: any = {
  red: "2.5, 94.8%",
  orange: "17, 77.6%",
  yellow: "41.9,77.6%",
  lime: "96.3, 69.8%",
  green: "131.1, 32.4%",
  teal: "191, 62.2%",
  blue: "213.9, 90.2%",
  navy: "203, 88%",
  indigo: "235.1, 95.7%",
  purple: "270.2, 80.9%",
  magenta: "327.1, 64.9%",
  fmGray: "30, 10%",
  // gray:"218,11%",
  slate: "213,27%",
  zinc: "240,5%", // ========= DEFAULT SURFACE COLOR
  neutral: "0,0%",
  stone: "24,5%",
}

// lightness levels
const levels: string[] = ["2.5","5","7.5","10","15","20","30","40","50","60","70","80","85","90","92.5","95","97.5"];

// take color and loop through lightness levels, kick out color ramp object
function makeLightnessRamp(_hueSatValue: string | unknown): {
  [key: string]: string } {
  const _ramp: {
    [key: string]: string } = {};

  levels.forEach((_level) => {
    const _lightness: number = 100 - parseFloat(_level);
    const _levelName: string = (parseFloat(_level) * 10).toString();
    _ramp[_levelName] = `hsl(${_hueSatValue}, ${_lightness}%)`;
  });

  return _ramp;
}


function buildColorRamps() {
  const _colorRamps:any = {};
  for (const [_name, _value] of Object.entries(hueSat)) {
    _colorRamps[_name] = makeLightnessRamp(_value);
  }
  return _colorRamps;
}


const fmUiColors:any = buildColorRamps();

//console.log("colorRamps",colorRamps);
console.log('\n\n ======= fm-color-tokens.ts loaded ======== \n\n')

export const fmColorTokens: any = {
  ...fmBrandColors,
  hueSat: {
    ...hueSat,
  },
  ...fmUiColors,
  gray: fmUiColors["fmGray"],
}

export { fmBrandColors };

export { fmUiColors }
