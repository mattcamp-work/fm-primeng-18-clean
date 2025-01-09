import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';


const FmPreset = definePreset(Aura, {


	primitive: {
		'brand': {
			black: '#121212',
			navy: '#05314d',
			blue: '#085280',
			gray: '#edebe9',
			white: '#fff',
			yellow: '#ffb400',
			orange: '#c55422',
			green: '#2c6937',
			teal: '#238196',
			magenta: '#911a5b'
		},
		'adk': {
			primary: "#0a649d",
			"primary-alt": "#238196",
			secondary: "{fm-brand.white}",
			destructive: "#d02f2f",
			safe: "#098620",
			interactive: "#47a7e2",
			"base-alert": "#ffaa33",
			canvas: "{fm-brand.gray}",
			text: "{fm-brand.black}",
		},
		'ui': {
			red: {
				50: "hsl(2.5, 94.8%, 95%)",
				100: "hsl(2.5, 94.8%, 90%)",
				200: "hsl(2.5, 94.8%, 80%)",
				300: "hsl(2.5, 94.8%, 70%)",
				400: "hsl(2.5, 94.8%, 60%)",
				500: "hsl(2.5, 94.8%, 50%)",
				600: "hsl(2.5, 94.8%, 40%)",
				700: "hsl(2.5, 94.8%, 30%)",
				800: "hsl(2.5, 94.8%, 20%)",
				900: "hsl(2.5, 94.8%, 10%)",
				950: "hsl(2.5, 94.8%, 5%)"
			},
			orange: {
				50: "hsl(17, 77.6%, 95%)",
				100: "hsl(17, 77.6%, 90%)",
				200: "hsl(17, 77.6%, 80%)",
				300: "hsl(17, 77.6%, 70%)",
				400: "hsl(17, 77.6%, 60%)",
				500: "hsl(17, 77.6%, 50%)",
				600: "hsl(17, 77.6%, 40%)",
				700: "hsl(17, 77.6%, 30%)",
				800: "hsl(17, 77.6%, 20%)",
				900: "hsl(17, 77.6%, 10%)",
				950: "hsl(17, 77.6%, 5%)"
			},
			yellow: {
				50: "hsl(41.9, 100%, 95%)",
				100: "hsl(41.9, 100%, 90%)",
				200: "hsl(41.9, 100%, 80%)",
				300: "hsl(41.9, 100%, 70%)",
				400: "hsl(41.9, 100%, 60%)",
				500: "hsl(41.9, 100%, 50%)",
				600: "hsl(41.9, 100%, 40%)",
				700: "hsl(41.9, 100%, 30%)",
				800: "hsl(41.9, 100%, 20%)",
				900: "hsl(41.9, 100%, 10%)",
				950: "hsl(41.9, 100%, 5%)"
			},
			lime: {
				50: "hsl(96.3, 69.8%, 95%)",
				100: "hsl(96.3, 69.8%, 90%)",
				200: "hsl(96.3, 69.8%, 80%)",
				300: "hsl(96.3, 69.8%, 70%)",
				400: "hsl(96.3, 69.8%, 60%)",
				500: "hsl(96.3, 69.8%, 50%)",
				600: "hsl(96.3, 69.8%, 40%)",
				700: "hsl(96.3, 69.8%, 30%)",
				800: "hsl(96.3, 69.8%, 20%)",
				900: "hsl(96.3, 69.8%, 10%)",
				950: "hsl(96.3, 69.8%, 5%)"
			},
			green: {
				50: "hsl(131.1, 32.4%, 95%)",
				100: "hsl(131.1, 32.4%, 90%)",
				200: "hsl(131.1, 32.4%, 80%)",
				300: "hsl(131.1, 32.4%, 70%)",
				400: "hsl(131.1, 32.4%, 60%)",
				500: "hsl(131.1, 32.4%, 50%)",
				600: "hsl(131.1, 32.4%, 40%)",
				700: "hsl(131.1, 32.4%, 30%)",
				800: "hsl(131.1, 32.4%, 20%)",
				900: "hsl(131.1, 32.4%, 10%)",
				950: "hsl(131.1, 32.4%, 5%)"
			},
			teal: {
				50: "hsl(191, 62.2%, 95%)",
				100: "hsl(191, 62.2%, 90%)",
				200: "hsl(191, 62.2%, 80%)",
				300: "hsl(191, 62.2%, 70%)",
				400: "hsl(191, 62.2%, 60%)",
				500: "hsl(191, 62.2%, 50%)",
				600: "hsl(191, 62.2%, 40%)",
				700: "hsl(191, 62.2%, 30%)",
				800: "hsl(191, 62.2%, 20%)",
				900: "hsl(191, 62.2%, 10%)",
				950: "hsl(191, 62.2%, 5%)"
			},
			blue: {
				50: "hsl(213.9, 90.2%, 95%)",
				100: "hsl(213.9, 90.2%, 90%)",
				200: "hsl(213.9, 90.2%, 80%)",
				300: "hsl(213.9, 90.2%, 70%)",
				400: "hsl(213.9, 90.2%, 60%)",
				500: "hsl(213.9, 90.2%, 50%)",
				600: "hsl(213.9, 90.2%, 40%)",
				700: "hsl(213.9, 90.2%, 30%)",
				800: "hsl(213.9, 90.2%, 20%)",
				900: "hsl(213.9, 90.2%, 10%)",
				950: "hsl(213.9, 90.2%, 5%)"
			},
			navy: {
				50: "hsl(204.9, 61.5%, 95%)",
				100: "hsl(204.9, 61.5%, 90%)",
				200: "hsl(204.9, 61.5%, 80%)",
				300: "hsl(204.9, 61.5%, 70%)",
				400: "hsl(204.9, 61.5%, 60%)",
				500: "hsl(204.9, 61.5%, 50%)",
				600: "hsl(204.9, 61.5%, 40%)",
				700: "hsl(204.9, 61.5%, 30%)",
				800: "hsl(204.9, 61.5%, 20%)",
				900: "hsl(204.9, 61.5%, 10%)",
				950: "hsl(204.9, 61.5%, 5%)"
			},
			indigo: {
				50: "hsl(235.1, 95.7%, 95%)",
				100: "hsl(235.1, 95.7%, 90%)",
				200: "hsl(235.1, 95.7%, 80%)",
				300: "hsl(235.1, 95.7%, 70%)",
				400: "hsl(235.1, 95.7%, 60%)",
				500: "hsl(235.1, 95.7%, 50%)",
				600: "hsl(235.1, 95.7%, 40%)",
				700: "hsl(235.1, 95.7%, 30%)",
				800: "hsl(235.1, 95.7%, 20%)",
				900: "hsl(235.1, 95.7%, 10%)",
				950: "hsl(235.1, 95.7%, 5%)"
			},
			purple: {
				50: "hsl(270.2, 80.9%, 95%)",
				100: "hsl(270.2, 80.9%, 90%)",
				200: "hsl(270.2, 80.9%, 80%)",
				300: "hsl(270.2, 80.9%, 70%)",
				400: "hsl(270.2, 80.9%, 60%)",
				500: "hsl(270.2, 80.9%, 50%)",
				600: "hsl(270.2, 80.9%, 40%)",
				700: "hsl(270.2, 80.9%, 30%)",
				800: "hsl(270.2, 80.9%, 20%)",
				900: "hsl(270.2, 80.9%, 10%)",
				950: "hsl(270.2, 80.9%, 5%)"
			},
			magenta: {
				50: "hsl(327.1, 64.9%, 95%)",
				100: "hsl(327.1, 64.9%, 90%)",
				200: "hsl(327.1, 64.9%, 80%)",
				300: "hsl(327.1, 64.9%, 70%)",
				400: "hsl(327.1, 64.9%, 60%)",
				500: "hsl(327.1, 64.9%, 50%)",
				600: "hsl(327.1, 64.9%, 40%)",
				700: "hsl(327.1, 64.9%, 30%)",
				800: "hsl(327.1, 64.9%, 20%)",
				900: "hsl(327.1, 64.9%, 10%)",
				950: "hsl(327.1, 64.9%, 5%)"
			},
		}
	},



	semantic: {
		primary: {
			50: '{ui.navy.50}',
			100: '{ui.navy.100}',
			200: '{ui.navy.200}',
			300: '{ui.navy.300}',
			400: '{ui.navy.400}',
			500: '{ui.navy.500}',
			600: '{ui.navy.600}',
			700: '{ui.navy.700}',
			800: '{ui.navy.800}',
			900: '{ui.navy.900}',
			950: '{ui.navy.950}',
		},
		severity: {
			warning: {
				background: "{ui.orange.600}",
				color: "#fff",
				hover: "{ui.orange.700}",
				active: "{ui.orange.800}",
			},
			error: {
				background: "{ui.red.600}",
				color: "#fff",
			},
			matt: {
				background: "{ui.teal.600}",
				color: "#fff",
			},

		},
		colorScheme: {
			light: {
				primary: {
					color: "{adk.primary}",
				},
				info: {
					color: "#ff0000",
				},
			},
			dark: {
				primary: {
					color: "green",
				},
			},

		},
	},
	components: {
		button: {
			colorScheme: {
				light: {
					root: {
						primary: {
							background: "{primary.color}",
							hoverBackground: "{primary.hover.color}",
							activeBackground: "{primary.active.color}",
							borderColor: "{primary.color}",
							hoverBorderColor: "{primary.hover.color}",
							activeBorderColor: "{primary.active.color}",
							color: "{primary.contrast.color}",
							hoverColor: "{primary.contrast.color}",
							activeColor: "{primary.contrast.color}",
							focusRing: {
								color: "{primary.color}",
								shadow: "none"
							}
						},
						secondary: {
							background: "{surface.100}",
							hoverBackground: "{surface.200}",
							activeBackground: "{surface.300}",
							borderColor: "{surface.100}",
							hoverBorderColor: "{surface.200}",
							activeBorderColor: "{surface.300}",
							color: "{surface.600}",
							hoverColor: "{surface.700}",
							activeColor: "{surface.800}",
							focusRing: {
								color: "{surface.600}",
								shadow: "none"
							}
						},
						info: {
							background: "{ui.blue.500}",
							hoverBackground: "{ui.blue.600}",
							activeBackground: "{ui.blue.700}",
							borderColor: "{ui.blue.500}",
							hoverBorderColor: "{ui.blue.600}",
							activeBorderColor: "{ui.blue.700}",
							color: "#ffffff",
							hoverColor: "#ffffff",
							activeColor: "#ffffff",
							focusRing: {
								color: "{ui.blue.500}",
								shadow: "none"
							}
						},
						success: {
							background: "{ui.lime.600}",
							hoverBackground: "{ui.lime.700}",
							activeBackground: "{ui.lime.800}",
							borderColor: "{ui.lime.500}",
							hoverBorderColor: "{ui.lime.700}",
							activeBorderColor: "{ui.lime.800}",
							color: "#ffffff",
							hoverColor: "#ffffff",
							activeColor: "#ffffff",
							focusRing: {
								color: "{ui.lime.600}",
								shadow: "none"
							}
						},
						warn: {
							background: "{ui.orange.500}",
							hoverBackground: "{ui.orange.600}",
							activeBackground: "{ui.orange.700}",
							borderColor: "{ui.orange.500}",
							hoverBorderColor: "{ui.orange.600}",
							activeBorderColor: "{ui.orange.700}",
							color: "#ffffff",
							hoverColor: "#ffffff",
							activeColor: "#ffffff",
							focusRing: {
								color: "{ui.orange.500}",
								shadow: "none"
							}
						},
						help: {
							background: "{ui.teal.500}",
							hoverBackground: "{ui.teal.600}",
							activeBackground: "{ui.teal.700}",
							borderColor: "{ui.teal.500}",
							hoverBorderColor: "{ui.teal.600}",
							activeBorderColor: "{ui.teal.700}",
							color: "#ffffff",
							hoverColor: "#ffffff",
							activeColor: "#ffffff",
							focusRing: {
								color: "{ui.teal.500}",
								shadow: "none"
							}
						},
						danger: {
							background: "{ui.red.600}",
							hoverBackground: "{ui.red.700}",
							activeBackground: "{ui.red.00}",
							borderColor: "{ui.red.500}",
							hoverBorderColor: "{ui.red.700}",
							activeBorderColor: "{ui.red.800}",
							color: "#ffffff",
							hoverColor: "#ffffff",
							activeColor: "#ffffff",
							focusRing: {
								color: "{ui.red.600}",
								shadow: "none"
							}
						},
						contrast: {
							background: "{surface.950}",
							hoverBackground: "{surface.900}",
							activeBackground: "{surface.800}",
							borderColor: "{surface.950}",
							hoverBorderColor: "{surface.900}",
							activeBorderColor: "{surface.800}",
							color: "{surface.0}",
							hoverColor: "{surface.0}",
							activeColor: "{surface.0}",
							focusRing: {
								color: "{surface.950}",
								shadow: "none"
							}
						}
					},
					outlined: {
						primary: {
							hoverBackground: "{primary.50}",
							activeBackground: "{primary.100}",
							borderColor: "{primary.200}",
							color: "{primary.color}"
						},
						secondary: {
							hoverBackground: "{surface.50}",
							activeBackground: "{surface.100}",
							borderColor: "{surface.200}",
							color: "{surface.500}"
						},
						success: {
							hoverBackground: "{green.50}",
							activeBackground: "{green.100}",
							borderColor: "{green.200}",
							color: "{green.500}"
						},
						info: {
							hoverBackground: "{sky.50}",
							activeBackground: "{sky.100}",
							borderColor: "{sky.200}",
							color: "{sky.500}"
						},
						warn: {
							hoverBackground: "{orange.50}",
							activeBackground: "{orange.100}",
							borderColor: "{orange.200}",
							color: "{orange.500}"
						},
						help: {
							hoverBackground: "{purple.50}",
							activeBackground: "{purple.100}",
							borderColor: "{purple.200}",
							color: "{purple.500}"
						},
						danger: {
							hoverBackground: "{red.50}",
							activeBackground: "{red.100}",
							borderColor: "{red.200}",
							color: "{red.500}"
						},
						contrast: {
							hoverBackground: "{surface.50}",
							activeBackground: "{surface.100}",
							borderColor: "{surface.700}",
							color: "{surface.950}"
						},
						plain: {
							hoverBackground: "{surface.50}",
							activeBackground: "{surface.100}",
							borderColor: "{surface.200}",
							color: "{surface.700}"
						}
					},
					text: {
						primary: {
							hoverBackground: "{primary.50}",
							activeBackground: "{primary.100}",
							color: "{primary.color}"
						},
						secondary: {
							hoverBackground: "{surface.50}",
							activeBackground: "{surface.100}",
							color: "{surface.500}"
						},
						success: {
							hoverBackground: "{green.50}",
							activeBackground: "{green.100}",
							color: "{green.500}"
						},
						info: {
							hoverBackground: "{sky.50}",
							activeBackground: "{sky.100}",
							color: "{sky.500}"
						},
						warn: {
							hoverBackground: "{orange.50}",
							activeBackground: "{orange.100}",
							color: "{orange.500}"
						},
						help: {
							hoverBackground: "{purple.50}",
							activeBackground: "{purple.100}",
							color: "{purple.500}"
						},
						danger: {
							hoverBackground: "{red.50}",
							activeBackground: "{red.100}",
							color: "{red.500}"
						},
						contrast: {
							hoverBackground: "{surface.50}",
							activeBackground: "{surface.100}",
							color: "{surface.950}"
						},
						plain: {
							hoverBackground: "{surface.50}",
							activeBackground: "{surface.100}",
							color: "{surface.700}"
						}
					},
					link: {
						color: "{primary.color}",
						hoverColor: "{primary.color}",
						activeColor: "{primary.color}"
					}
				},
				dark: {
					root: {
						primary: {
							background: "{primary.color}",
							hoverBackground: "{primary.hover.color}",
							activeBackground: "{primary.active.color}",
							borderColor: "{primary.color}",
							hoverBorderColor: "{primary.hover.color}",
							activeBorderColor: "{primary.active.color}",
							color: "{primary.contrast.color}",
							hoverColor: "{primary.contrast.color}",
							activeColor: "{primary.contrast.color}",
							focusRing: {
								color: "{primary.color}",
								shadow: "none"
							}
						},
						secondary: {
							background: "{surface.800}",
							hoverBackground: "{surface.700}",
							activeBackground: "{surface.600}",
							borderColor: "{surface.800}",
							hoverBorderColor: "{surface.700}",
							activeBorderColor: "{surface.600}",
							color: "{surface.300}",
							hoverColor: "{surface.200}",
							activeColor: "{surface.100}",
							focusRing: {
								color: "{surface.300}",
								shadow: "none"
							}
						},
						info: {
							background: "{blue.400}",
							hoverBackground: "{blue.300}",
							activeBackground: "{blue.200}",
							borderColor: "{blue.400}",
							hoverBorderColor: "{blue.300}",
							activeBorderColor: "{blue.200}",
							color: "{blue.950}",
							hoverColor: "{blue.950}",
							activeColor: "{blue.950}",
							focusRing: {
								color: "{blue.400}",
								shadow: "none"
							}
						},
						success: {
							background: "{green.400}",
							hoverBackground: "{green.300}",
							activeBackground: "{green.200}",
							borderColor: "{green.400}",
							hoverBorderColor: "{green.300}",
							activeBorderColor: "{green.200}",
							color: "{green.950}",
							hoverColor: "{green.950}",
							activeColor: "{green.950}",
							focusRing: {
								color: "{green.400}",
								shadow: "none"
							}
						},
						warn: {
							background: "{orange.400}",
							hoverBackground: "{orange.300}",
							activeBackground: "{orange.200}",
							borderColor: "{orange.400}",
							hoverBorderColor: "{orange.300}",
							activeBorderColor: "{orange.200}",
							color: "{orange.950}",
							hoverColor: "{orange.950}",
							activeColor: "{orange.950}",
							focusRing: {
								color: "{orange.400}",
								shadow: "none"
							}
						},
						help: {
							background: "{purple.400}",
							hoverBackground: "{purple.300}",
							activeBackground: "{purple.200}",
							borderColor: "{purple.400}",
							hoverBorderColor: "{purple.300}",
							activeBorderColor: "{purple.200}",
							color: "{purple.950}",
							hoverColor: "{purple.950}",
							activeColor: "{purple.950}",
							focusRing: {
								color: "{purple.400}",
								shadow: "none"
							}
						},
						danger: {
							background: "{red.400}",
							hoverBackground: "{red.300}",
							activeBackground: "{red.200}",
							borderColor: "{red.400}",
							hoverBorderColor: "{red.300}",
							activeBorderColor: "{red.200}",
							color: "{red.950}",
							hoverColor: "{red.950}",
							activeColor: "{red.950}",
							focusRing: {
								color: "{red.400}",
								shadow: "none"
							}
						},
						contrast: {
							background: "{surface.0}",
							hoverBackground: "{surface.100}",
							activeBackground: "{surface.200}",
							borderColor: "{surface.0}",
							hoverBorderColor: "{surface.100}",
							activeBorderColor: "{surface.200}",
							color: "{surface.950}",
							hoverColor: "{surface.950}",
							activeColor: "{surface.950}",
							focusRing: {
								color: "{surface.0}",
								shadow: "none"
							}
						}
					},
					outlined: {
						primary: {
							hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
							borderColor: "{primary.700}",
							color: "{primary.color}"
						},
						secondary: {
							hoverBackground: "rgba(255,255,255,0.04)",
							activeBackground: "rgba(255,255,255,0.16)",
							borderColor: "{surface.700}",
							color: "{surface.400}"
						},
						success: {
							hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
							borderColor: "{green.700}",
							color: "{green.400}"
						},
						info: {
							hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
							borderColor: "{sky.700}",
							color: "{sky.400}"
						},
						warn: {
							hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
							borderColor: "{orange.700}",
							color: "{orange.400}"
						},
						help: {
							hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
							borderColor: "{purple.700}",
							color: "{purple.400}"
						},
						danger: {
							hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
							borderColor: "{red.700}",
							color: "{red.400}"
						},
						contrast: {
							hoverBackground: "{surface.800}",
							activeBackground: "{surface.700}",
							borderColor: "{surface.500}",
							color: "{surface.0}"
						},
						plain: {
							hoverBackground: "{surface.800}",
							activeBackground: "{surface.700}",
							borderColor: "{surface.600}",
							color: "{surface.0}"
						}
					},
					text: {
						primary: {
							hoverBackground: "color-mix(in srgb, {primary.color}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {primary.color}, transparent 84%)",
							color: "{primary.color}"
						},
						secondary: {
							hoverBackground: "{surface.800}",
							activeBackground: "{surface.700}",
							color: "{surface.400}"
						},
						success: {
							hoverBackground: "color-mix(in srgb, {green.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {green.400}, transparent 84%)",
							color: "{green.400}"
						},
						info: {
							hoverBackground: "color-mix(in srgb, {sky.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {sky.400}, transparent 84%)",
							color: "{sky.400}"
						},
						warn: {
							hoverBackground: "color-mix(in srgb, {orange.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {orange.400}, transparent 84%)",
							color: "{orange.400}"
						},
						help: {
							hoverBackground: "color-mix(in srgb, {purple.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {purple.400}, transparent 84%)",
							color: "{purple.400}"
						},
						danger: {
							hoverBackground: "color-mix(in srgb, {red.400}, transparent 96%)",
							activeBackground: "color-mix(in srgb, {red.400}, transparent 84%)",
							color: "{red.400}"
						},
						contrast: {
							hoverBackground: "{surface.800}",
							activeBackground: "{surface.700}",
							color: "{surface.0}"
						},
						plain: {
							hoverBackground: "{surface.800}",
							activeBackground: "{surface.700}",
							color: "{surface.0}"
						}
					},
					link: {
						color: "{primary.color}",
						hoverColor: "{primary.color}",
						activeColor: "{primary.color}"
					}
				}

			}

		}
	}

});

export { FmPreset };
