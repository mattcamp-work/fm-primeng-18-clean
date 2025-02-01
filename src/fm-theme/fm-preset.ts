import { definePreset } from "@primeng/themes";


/*
		How the PrimeNg Token Systme works

        ┌──────────────────┐
        │       Base       │  (Core Styles, Layout, Spacing)
        └──────────────────┘
                 │
                 ▼
        ┌──────────────────┐
        │      Preset      │  (Colors, Shadows, Theming)
        └──────────────────┘
                 │
                 ▼
         ┌────────────────┐
         │    Browser     │  (Rendered Components)
         └────────────────┘


*/

//=====================================
// Import BASE token defaults from PrimeNG
import Aura from "@primeng/themes/aura";
//=====================================

//=====================================
// import brand colors, legacy ADK colors, and UI colors
import { fmColorTokens } from "./fm-color-tokens";
//=====================================

console.log("fmColorTokens",fmColorTokens);

//=====================================
// import custom (FM) button preset settings
import { button } from "./components/button-styles";
//=====================================


//=====================================
// Create a deep copy of the Aura BASE token schema to safely make changes to it
const FmBase = JSON.parse(JSON.stringify(Aura));
//=====================================


//=====================================
// Remove non FM colors from the object
//=====================================
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
//=====================================

const FmPreset = definePreset(FmBase, {
	primitive: {
		...fmColorTokens
	},

	semantic: {
		primary: fmColorTokens.blue,

		severity: {
			primary: fmColorTokens.navy,
			secondary: fmColorTokens.fmGray,
			info: fmColorTokens.blue,
			success: fmColorTokens.lime,
			warning: fmColorTokens.orange,
			help: fmColorTokens.teal,
			danger: fmColorTokens.red,
		},
		

		colorScheme: {
			light: {
				primary: {
					color: "{blue.400}",
				},
				surface:fmColorTokens['fmGray'],				
				level: {
					floor: "#fff",
					0: "{surface.50}",
					1: "{surface.100}",
					2: "{surface.200}",
					3: "{surface.300}",
					4: "{surface.400}",
				},
			},
			dark: {
				primary: {
					color: "{blue.400}",
				},
				surface:fmColorTokens.zinc,
				level: {
					floor: "#000",
					0: "{surface.950}",
					1: "{surface.900}",
					2: "{surface.800}",
					3: "{surface.700}",
					4: "{surface.600}",
				},
			},
		},
	},
	components: {
		button,
	},
});

export { FmPreset };
