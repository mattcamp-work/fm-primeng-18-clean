import { definePreset } from "@primeng/themes";
import Aura from "@primeng/themes/aura";

// import brand colors, legacy ADK colors, and UI colors
import { fmColorTokens } from "./fm-color-tokens";

// import custom (FM) button preset settings
import { button } from "./components/button-styles";

// Create a deep copy of the Aura BASE token schema to safely remove the extra, non-brand colors without altering the AURA base object
const FmBase = JSON.parse(JSON.stringify(Aura));

// Remove non FM colors from the object
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

const FmPreset = definePreset(FmBase, {
	primitive: {
		...fmColorTokens, // add in our color tokens
	},

	semantic: {
		primary: fmColorTokens.blue,

		severity: {
			secondary: {
				50: "{fm-gray.50}",
				100: "{fm-gray.100}",
				200: "{fm-gray.200}",
				300: "{fm-gray.300}",
				400: "{fm-gray.400}",
				500: "{fm-gray.500}",
				600: "{fm-gray.600}",
				700: "{fm-gray.700}",
				800: "{fm-gray.800}",
				900: "{fm-gray.900}",
				950: "{fm-gray.950}",
			},
			info: {
				50: "{blue.50}",
				100: "{blue.100}",
				200: "{blue.200}",
				300: "{blue.300}",
				400: "{blue.400}",
				500: "{blue.500}",
				600: "{blue.600}",
				700: "{blue.700}",
				800: "{blue.800}",
				900: "{blue.900}",
				950: "{blue.950}",
			},
			success: {
				50: "{lime.50}",
				100: "{lime.100}",
				200: "{lime.200}",
				300: "{lime.300}",
				400: "{lime.400}",
				500: "{lime.500}",
				600: "{lime.600}",
				700: "{lime.700}",
				800: "{lime.800}",
				900: "{lime.900}",
				950: "{lime.950}",
			},
			warning: {
				50: "{orange.50}",
				100: "{orange.100}",
				200: "{orange.200}",
				300: "{orange.300}",
				400: "{orange.400}",
				500: "{orange.500}",
				600: "{orange.600}",
				700: "{orange.700}",
				800: "{orange.800}",
				900: "{orange.900}",
				950: "{orange.950}",
			},
			help: {
				50: "{teal.50}",
				100: "{teal.100}",
				200: "{teal.200}",
				300: "{teal.300}",
				400: "{teal.400}",
				500: "{teal.500}",
				600: "{teal.600}",
				700: "{teal.700}",
				800: "{teal.800}",
				900: "{teal.900}",
				950: "{teal.950}",
			},
			danger: {
				50: "{red.50}",
				100: "{red.100}",
				200: "{red.200}",
				300: "{red.300}",
				400: "{red.400}",
				500: "{red.500}",
				600: "{red.600}",
				700: "{red.700}",
				800: "{red.800}",
				900: "{red.900}",
				950: "{red.950}",
			},
		},

		colorScheme: {
			light: {
				primary: {
					color: "{blue.400}",
				},
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
