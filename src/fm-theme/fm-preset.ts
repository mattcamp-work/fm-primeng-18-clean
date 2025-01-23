import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

import { button } from './components/button-styles'

// Create a deep copy of the Aura object
const FmBase = JSON.parse(JSON.stringify(Aura));

// Remove non FM colors
if (FmBase.primitive) {
  delete FmBase.primitive.cyan;
  delete FmBase.primitive.amber;
  delete FmBase.primitive.emerald;
  delete FmBase.primitive.fuchsia;
  delete FmBase.primitive.pink;
  delete FmBase.primitive.rose;
  delete FmBase.primitive.sky;
  delete FmBase.primitive.violet;
}

/* cyan, emerald, fuschia, pink, rose, sky, violet */


// apply FM values to FmBase


const FmPreset__plain = definePreset(FmBase,{});

const FmPreset = definePreset(FmBase, {


	primitive: {
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
		
			red: {
				50: 'hsl(2.5, 94.8%, 95%)',
				100: 'hsl(2.5, 94.8%, 90%)',
				200: 'hsl(2.5, 94.8%, 80%)',
				300: 'hsl(2.5, 94.8%, 70%)',
				400: 'hsl(2.5, 94.8%, 60%)',
				500: 'hsl(2.5, 94.8%, 50%)',
				600: 'hsl(2.5, 94.8%, 40%)',
				700: 'hsl(2.5, 94.8%, 30%)',
				800: 'hsl(2.5, 94.8%, 20%)',
				900: 'hsl(2.5, 94.8%, 10%)',
				950: 'hsl(2.5, 94.8%, 5%)'
			},
			orange: {
				50: 'hsl(17, 77.6%, 95%)',
				100: 'hsl(17, 77.6%, 90%)',
				200: 'hsl(17, 77.6%, 80%)',
				300: 'hsl(17, 77.6%, 70%)',
				400: 'hsl(17, 77.6%, 60%)',
				500: 'hsl(17, 77.6%, 50%)',
				600: 'hsl(17, 77.6%, 40%)',
				700: 'hsl(17, 77.6%, 30%)',
				800: 'hsl(17, 77.6%, 20%)',
				900: 'hsl(17, 77.6%, 10%)',
				950: 'hsl(17, 77.6%, 5%)'
			},
			yellow: {
				50: 'hsl(41.9, 100%, 95%)',
				100: 'hsl(41.9, 100%, 90%)',
				200: 'hsl(41.9, 100%, 80%)',
				300: 'hsl(41.9, 100%, 70%)',
				400: 'hsl(41.9, 100%, 60%)',
				500: 'hsl(41.9, 100%, 50%)',
				600: 'hsl(41.9, 100%, 40%)',
				700: 'hsl(41.9, 100%, 30%)',
				800: 'hsl(41.9, 100%, 20%)',
				900: 'hsl(41.9, 100%, 10%)',
				950: 'hsl(41.9, 100%, 5%)'
			},
			lime: {
				50: 'hsl(96.3, 69.8%, 95%)',
				100: 'hsl(96.3, 69.8%, 90%)',
				200: 'hsl(96.3, 69.8%, 80%)',
				300: 'hsl(96.3, 69.8%, 70%)',
				400: 'hsl(96.3, 69.8%, 60%)',
				500: 'hsl(96.3, 69.8%, 50%)',
				600: 'hsl(96.3, 69.8%, 40%)',
				700: 'hsl(96.3, 69.8%, 30%)',
				800: 'hsl(96.3, 69.8%, 20%)',
				900: 'hsl(96.3, 69.8%, 10%)',
				950: 'hsl(96.3, 69.8%, 5%)'
			},
			green: {
				50: 'hsl(131.1, 32.4%, 95%)',
				100: 'hsl(131.1, 32.4%, 90%)',
				200: 'hsl(131.1, 32.4%, 80%)',
				300: 'hsl(131.1, 32.4%, 70%)',
				400: 'hsl(131.1, 32.4%, 60%)',
				500: 'hsl(131.1, 32.4%, 50%)',
				600: 'hsl(131.1, 32.4%, 40%)',
				700: 'hsl(131.1, 32.4%, 30%)',
				800: 'hsl(131.1, 32.4%, 20%)',
				900: 'hsl(131.1, 32.4%, 10%)',
				950: 'hsl(131.1, 32.4%, 5%)'
			},
			teal: {
				50: 'hsl(191, 62.2%, 95%)',
				100: 'hsl(191, 62.2%, 90%)',
				200: 'hsl(191, 62.2%, 80%)',
				300: 'hsl(191, 62.2%, 70%)',
				400: 'hsl(191, 62.2%, 60%)',
				500: 'hsl(191, 62.2%, 50%)',
				600: 'hsl(191, 62.2%, 40%)',
				700: 'hsl(191, 62.2%, 30%)',
				800: 'hsl(191, 62.2%, 20%)',
				900: 'hsl(191, 62.2%, 10%)',
				950: 'hsl(191, 62.2%, 5%)'
			},
			blue: {
				50: 'hsl(213.9, 90.2%, 95%)',
				100: 'hsl(213.9, 90.2%, 90%)',
				200: 'hsl(213.9, 90.2%, 80%)',
				300: 'hsl(213.9, 90.2%, 70%)',
				400: 'hsl(213.9, 90.2%, 60%)',
				500: 'hsl(213.9, 90.2%, 50%)',
				600: 'hsl(213.9, 90.2%, 40%)',
				700: 'hsl(213.9, 90.2%, 30%)',
				800: 'hsl(213.9, 90.2%, 20%)',
				900: 'hsl(213.9, 90.2%, 10%)',
				950: 'hsl(213.9, 90.2%, 5%)'
			},
			navy: {
				50: 'hsl(203, 88%, 95%)',
				100: 'hsl(203, 88%, 90%)',
				200: 'hsl(203, 88%, 80%)',
				300: 'hsl(203, 88%, 70%)',
				400: 'hsl(203, 88%, 60%)',
				500: 'hsl(203, 88%, 50%)',
				600: 'hsl(203, 88%, 40%)',
				700: 'hsl(203, 88%, 30%)',
				800: 'hsl(203, 88%, 20%)',
				900: 'hsl(203, 88%, 10%)',
				950: 'hsl(203, 88%, 5%)'
			},
			indigo: {
				50: 'hsl(235.1, 95.7%, 95%)',
				100: 'hsl(235.1, 95.7%, 90%)',
				200: 'hsl(235.1, 95.7%, 80%)',
				300: 'hsl(235.1, 95.7%, 70%)',
				400: 'hsl(235.1, 95.7%, 60%)',
				500: 'hsl(235.1, 95.7%, 50%)',
				600: 'hsl(235.1, 95.7%, 40%)',
				700: 'hsl(235.1, 95.7%, 30%)',
				800: 'hsl(235.1, 95.7%, 20%)',
				900: 'hsl(235.1, 95.7%, 10%)',
				950: 'hsl(235.1, 95.7%, 5%)'
			},
			purple: {
				50: 'hsl(270.2, 80.9%, 95%)',
				100: 'hsl(270.2, 80.9%, 90%)',
				200: 'hsl(270.2, 80.9%, 80%)',
				300: 'hsl(270.2, 80.9%, 70%)',
				400: 'hsl(270.2, 80.9%, 60%)',
				500: 'hsl(270.2, 80.9%, 50%)',
				600: 'hsl(270.2, 80.9%, 40%)',
				700: 'hsl(270.2, 80.9%, 30%)',
				800: 'hsl(270.2, 80.9%, 20%)',
				900: 'hsl(270.2, 80.9%, 10%)',
				950: 'hsl(270.2, 80.9%, 5%)'
			},
			magenta: {
				50: 'hsl(327.1, 64.9%, 95%)',
				100: 'hsl(327.1, 64.9%, 90%)',
				200: 'hsl(327.1, 64.9%, 80%)',
				300: 'hsl(327.1, 64.9%, 70%)',
				400: 'hsl(327.1, 64.9%, 60%)',
				500: 'hsl(327.1, 64.9%, 50%)',
				600: 'hsl(327.1, 64.9%, 40%)',
				700: 'hsl(327.1, 64.9%, 30%)',
				800: 'hsl(327.1, 64.9%, 20%)',
				900: 'hsl(327.1, 64.9%, 10%)',
				950: 'hsl(327.1, 64.9%, 5%)'
			},
			'fm-gray':{
				50: 'hsl(30, 10%, 95%)',
				100: 'hsl(30, 10%, 90%)',
				200: 'hsl(30, 10%, 80%)',
				300: 'hsl(30, 10%, 70%)',
				400: 'hsl(30, 10%, 60%)',
				500: 'hsl(30, 10%, 50%)',
				600: 'hsl(30, 10%, 40%)',
				700: 'hsl(30, 10%, 30%)',
				800: 'hsl(30, 10%, 20%)',
				900: 'hsl(30, 10%, 10%)',
				950: 'hsl(30, 10%, 5%)'
			}
		
	},

	semantic: {
		primary: {
			50: '{navy.50}',
			100: '{navy.100}',
			200: '{navy.200}',
			300: '{navy.300}',
			400: '{navy.400}',
			500: '{navy.500}',
			600: '{navy.600}',
			700: '{adk.primary}',
			800: '{navy.800}',
			900: '{navy.900}',
			950: '{navy.950}',
		},

		severity:{
			secondary: {
				50: '{fm-gray.50}',
				100: '{fm-gray.100}',
				200: '{fm-gray.200}',
				300: '{fm-gray.300}',
				400: '{fm-gray.400}',
				500: '{fm-gray.500}',
				600: '{fm-gray.600}',
				700: '{fm-gray.700}',
				800: '{fm-gray.800}',
				900: '{fm-gray.900}',
				950: '{fm-gray.950}',
			},
			info: {
				50: '{blue.50}',
				100: '{blue.100}',
				200: '{blue.200}',
				300: '{blue.300}',
				400: '{blue.400}',
				500: '{blue.500}',
				600: '{blue.600}',
				700: '{blue.700}',
				800: '{blue.800}',
				900: '{blue.900}',
				950: '{blue.950}',
			},
			success: {
				50: '{lime.50}',
				100: '{lime.100}',
				200: '{lime.200}',
				300: '{lime.300}',
				400: '{lime.400}',
				500: '{lime.500}',
				600: '{lime.600}',
				700: '{lime.700}',
				800: '{lime.800}',
				900: '{lime.900}',
				950: '{lime.950}',
			},
			warning: {
				50: '{orange.50}',
				100: '{orange.100}',
				200: '{orange.200}',
				300: '{orange.300}',
				400: '{orange.400}',
				500: '{orange.500}',
				600: '{orange.600}',
				700: '{orange.700}',
				800: '{orange.800}',
				900: '{orange.900}',
				950: '{orange.950}',
			},
			help: {
				50: '{teal.50}',
				100: '{teal.100}',
				200: '{teal.200}',
				300: '{teal.300}',
				400: '{teal.400}',
				500: '{teal.500}',
				600: '{teal.600}',
				700: '{teal.700}',
				800: '{teal.800}',
				900: '{teal.900}',
				950: '{teal.950}',
			},
			danger: {
				50: '{red.50}',
				100: '{red.100}',
				200: '{red.200}',
				300: '{red.300}',
				400: '{red.400}',
				500: '{red.500}',
				600: '{red.600}',
				700: '{red.700}',
				800: '{red.800}',
				900: '{red.900}',
				950: '{red.950}',
			},
		},

		colorScheme: {			
			light: {				
				primary: {
					color: '{adk.primary}',
				},
				level: {
					'floor': '#fff',
					0: '{surface.50}',
					1: '{surface.100}',
					2: '{surface.200}',
					3: '{surface.300}',
					4: '{surface.400}',
				}
			},
			dark: {

				primary: {
					color: '{adk.primary}',
				},

				level: {
					'floor': '#000',
					0: '{surface.950}',
					1: '{surface.900}',
					2: '{surface.800}',
					3: '{surface.700}',
					4: '{surface.600}',
				}

			},

		},
	},
	components: {
		button
	}

});

export { FmPreset };
