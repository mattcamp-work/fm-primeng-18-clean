

const hueSat:any = {
      red:"2.5, 94.8%",
      orange:"17, 77.6%",
      yellow:"41.9,77.6%",
      lime:"96.3, 69.8%",
      green:"131.1, 32.4%",
      teal:"191, 62.2%",
      blue:"213.9, 90.2%",
      navy:"203, 88%",
      indigo:"235.1, 95.7%",
      purple:"270.2, 80.9%",
      magenta:"327.1, 64.9%",
      "fm-gray":"30, 10%"
}


const _settings: string[] = ['2.5','5', '10', '15', '20', '30', '40', '50', '60', '70', '80', '85', '90', '95','97.5'];

function makeColorRamp(_color:string | unknown): { [key: string]: string } {
  const _ramp: { [key: string]: string } = {};

  _settings.forEach((_key) => {
    const _lightness: number = 100 - parseFloat(_key);
    const _keyName: string = (parseFloat(_key)*10).toString();
    _ramp[_keyName] = `hsl(${_color}, ${_lightness}%)`;
  });

  return _ramp;
}



const colorRamps: { [key: string]: any } = (function () {
  const _colorList: { [key: string]: any } = {};

  // Assuming `hueSat` is an object with key-value pairs
  for (const [_name, _value] of Object.entries(hueSat)) {
    _colorList[_name] = makeColorRamp(_value);
  }

  return _colorList;
})();

console.log("colorRamps",colorRamps);


export const fmColorTokens:any = {

	'fm-brand': {
			black: 	'hsl(0,0%,7%)',			// hex: '#121212',
			navy: 	'hsl(203, 88%, 16%)',	// hex: '#05314d',
			blue: 	'hsl(203, 88%, 27%)', 	// hex: '#085280',
			gray: 	'hsl(30, 10%, 92%)',	// hex: '#edebe9',
			white: 	'hsl(0, 0%, 100%)', 	// hex: '#fff',
			yellow: 'hsl(42, 100%, 50%)',	// hex: '#ffb400',
			orange: 'hsl(18, 71%, 45%)',	// hex: '#c55422',
			green: 	'hsl(131, 41%, 29%)',	// hex: '#2c6937',
			teal: 	'hsl(191, 62%, 36%)',	// hex: '#238196',
			magenta: 'hsl(327, 70%, 34%)',	// hex: '#911a5b'
		},
		'adk': {
			primary: 		'hsl(203, 88%, 33%)',	// hex: '#0a649d',
			'primary-alt': 	'hsl(191, 62%, 36%)',	// hex: '#238196',
			secondary: 		'{brand.white}',		// hex: '#fff',
			destructive: 	'hsl(0, 63%, 50%)',		// hex'	#d02f2f',
			safe: 			'hsl(131, 87%, 28%)',	// hex: '#098620',
			interactive: 	'hsl(203, 73%, 58%)',	// hex:	'#47a7e2',
			'base-alert': 	'hsl(35, 100%, 60%)',	// hex: '#ffaa33',
			canvas: '{brand.gray}',
			text: '{brand.black}',
		},

   coords: {
      ...hueSat,
    },
    ...colorRamps,
	 // red: {
   //      50: `hsl(${hueSat.red}, 95%)`,
   //      100: `hsl(${hueSat.red}, 90%)`,
   //      200: `hsl(${hueSat.red}, 80%)`,
   //      300: `hsl(${hueSat.red}, 70%)`,
   //      400: `hsl(${hueSat.red}, 60%)`,
   //      500: `hsl(${hueSat.red}, 50%)`,
   //      600: `hsl(${hueSat.red}, 40%)`,
   //      700: `hsl(${hueSat.red}, 30%)`,
   //      800: `hsl(${hueSat.red}, 20%)`,
   //      900: `hsl(${hueSat.red}, 10%)`,
   //      950: `hsl(${hueSat.red}, 5%)`
   //    },
   //    orange: {
   //      50: 'hsl(17, 77.6%, 95%)',
   //      100: 'hsl(17, 77.6%, 90%)',
   //      200: 'hsl(17, 77.6%, 80%)',
   //      300: 'hsl(17, 77.6%, 70%)',
   //      400: 'hsl(17, 77.6%, 60%)',
   //      500: 'hsl(17, 77.6%, 50%)',
   //      600: 'hsl(17, 77.6%, 40%)',
   //      700: 'hsl(17, 77.6%, 30%)',
   //      800: 'hsl(17, 77.6%, 20%)',
   //      900: 'hsl(17, 77.6%, 10%)',
   //      950: 'hsl(17, 77.6%, 5%)'
   //    },
   //    yellow: {
   //      50: 'hsl(41.9,77.6%, 95%)',
   //      100: 'hsl(41.9,77.6%, 90%)',
   //      200: 'hsl(41.9,77.6%, 80%)',
   //      300: 'hsl(41.9,77.6%, 70%)',
   //      400: 'hsl(41.9,77.6%, 60%)',
   //      500: 'hsl(41.9,77.6%, 50%)',
   //      600: 'hsl(41.9,77.6%, 40%)',
   //      700: 'hsl(41.9,77.6%, 30%)',
   //      800: 'hsl(41.9,77.6%, 20%)',
   //      900: 'hsl(41.9,77.6%, 10%)',
   //      950: 'hsl(41.9,77.6%, 5%)'
   //    },
   //    lime: {
   //      50: 'hsl(96.3, 69.8%, 95%)',
   //      100: 'hsl(96.3, 69.8%, 90%)',
   //      200: 'hsl(96.3, 69.8%, 80%)',
   //      300: 'hsl(96.3, 69.8%, 70%)',
   //      400: 'hsl(96.3, 69.8%, 60%)',
   //      500: 'hsl(96.3, 69.8%, 50%)',
   //      600: 'hsl(96.3, 69.8%, 40%)',
   //      700: 'hsl(96.3, 69.8%, 30%)',
   //      800: 'hsl(96.3, 69.8%, 20%)',
   //      900: 'hsl(96.3, 69.8%, 10%)',
   //      950: 'hsl(96.3, 69.8%, 5%)'
   //    },
   //    green: {
   //      50: 'hsl({_hs.green}, 95%)',
   //      100: 'hsl({_hs.green}, 90%)',
   //      200: 'hsl({_hs.green}, 80%)',
   //      300: 'hsl({_hs.green}, 70%)',
   //      400: 'hsl({_hs.green}, 60%)',
   //      500: 'hsl({_hs.green}, 50%)',
   //      600: 'hsl({_hs.green}, 40%)',
   //      700: 'hsl({_hs.green}, 30%)',
   //      800: 'hsl({_hs.green}, 20%)',
   //      900: 'hsl({_hs.green}, 10%)',
   //      950: 'hsl({_hs.green}, 5%)'
   //    },
   //    teal: {
   //      50: `hsl(${hueSat.teal}, 95%)`,
   //      100: `hsl(${hueSat.teal}, 90%)`,
   //      200: `hsl(${hueSat.teal}, 80%)`,
   //      300: `hsl(${hueSat.teal}, 70%)`,
   //      400: `hsl(${hueSat.teal}, 60%)`,
   //      500: `hsl(${hueSat.teal}, 50%)`,
   //      600: `hsl(${hueSat.teal}, 40%)`,
   //      700: `hsl(${hueSat.teal}, 30%)`,
   //      800: `hsl(${hueSat.teal}, 20%)`,
   //      900: `hsl(${hueSat.teal}, 10%)`,
   //      950: `hsl(${hueSat.teal}, 5%)`
   //    },
   //    blue: {
   //      50: 'hsl({_hs.blue}, 95%)',
   //      100: 'hsl({_hs.blue}, 90%)',
   //      200: 'hsl({_hs.blue}, 80%)',
   //      300: 'hsl({_hs.blue}, 70%)',
   //      400: 'hsl({_hs.blue}, 60%)',
   //      500: 'hsl({_hs.blue}, 50%)',
   //      600: 'hsl({_hs.blue}, 40%)',
   //      700: 'hsl({_hs.blue}, 30%)',
   //      800: 'hsl({_hs.blue}, 20%)',
   //      900: 'hsl({_hs.blue}, 10%)',
   //      950: 'hsl({_hs.blue}, 5%)'
   //    },
   //    navy: {
   //      50: 'hsl({_hs.navy}, 95%)',
   //      100: 'hsl({_hs.navy}, 90%)',
   //      200: 'hsl({_hs.navy}, 80%)',
   //      300: 'hsl({_hs.navy}, 70%)',
   //      400: 'hsl({_hs.navy}, 60%)',
   //      500: 'hsl({_hs.navy}, 50%)',
   //      600: 'hsl({_hs.navy}, 40%)',
   //      700: 'hsl({_hs.navy}, 30%)',
   //      800: 'hsl({_hs.navy}, 20%)',
   //      900: 'hsl({_hs.navy}, 10%)',
   //      950: 'hsl({_hs.navy}, 5%)'
   //    },
   //    indigo: {
   //      50: 'hsl({_hs.indigo}, 95%)',
   //      100: 'hsl({_hs.indigo}, 90%)',
   //      200: 'hsl({_hs.indigo}, 80%)',
   //      300: 'hsl({_hs.indigo}, 70%)',
   //      400: 'hsl({_hs.indigo}, 60%)',
   //      500: 'hsl({_hs.indigo}, 50%)',
   //      600: 'hsl({_hs.indigo}, 40%)',
   //      700: 'hsl({_hs.indigo}, 30%)',
   //      800: 'hsl({_hs.indigo}, 20%)',
   //      900: 'hsl({_hs.indigo}, 10%)',
   //      950: 'hsl({_hs.indigo}, 5%)'
   //    },
   //    purple: {
   //      50: 'hsl({_hs.purple}, 95%)',
   //      100: 'hsl({_hs.purple}, 90%)',
   //      200: 'hsl({_hs.purple}, 80%)',
   //      300: 'hsl({_hs.purple}, 70%)',
   //      400: 'hsl({_hs.purple}, 60%)',
   //      500: 'hsl({_hs.purple}, 50%)',
   //      600: 'hsl({_hs.purple}, 40%)',
   //      700: 'hsl({_hs.purple}, 30%)',
   //      800: 'hsl({_hs.purple}, 20%)',
   //      900: 'hsl({_hs.purple}, 10%)',
   //      950: 'hsl({_hs.purple}, 5%)'
   //    },
   //    magenta: {
   //      50: 'hsl({_hs.magenta}, 95%)',
   //      100: 'hsl({_hs.magenta}, 90%)',
   //      200: 'hsl({_hs.magenta}, 80%)',
   //      300: 'hsl({_hs.magenta}, 70%)',
   //      400: 'hsl({_hs.magenta}, 60%)',
   //      500: 'hsl({_hs.magenta}, 50%)',
   //      600: 'hsl({_hs.magenta}, 40%)',
   //      700: 'hsl({_hs.magenta}, 30%)',
   //      800: 'hsl({_hs.magenta}, 20%)',
   //      900: 'hsl({_hs.magenta}, 10%)',
   //      950: 'hsl({_hs.magenta}, 5%)'
   //    },
   //    'fm-gray':{
   //      50: 'hsl({_hs.fmGray}, 95%)',
   //      100: 'hsl({_hs.fmGray}, 90%)',
   //      200: 'hsl({_hs.fmGray}, 80%)',
   //      300: 'hsl({_hs.fmGray}, 70%)',
   //      400: 'hsl({_hs.fmGray}, 60%)',
   //      500: 'hsl({_hs.fmGray}, 50%)',
   //      600: 'hsl({_hs.fmGray}, 40%)',
   //      700: 'hsl({_hs.fmGray}, 30%)',
   //      800: 'hsl({_hs.fmGray}, 20%)',
   //      900: 'hsl({_hs.fmGray}, 10%)',
   //      950: 'hsl({_hs.fmGray}, 5%)'
   //    }
}