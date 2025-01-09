const button: any = {
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
					background: "{surface.0}",
					hoverBackground: "{surface.200}",
					activeBackground: "{surface.300}",
					borderColor: "{surface.300}",
					hoverBorderColor: "{surface.200}",
					activeBorderColor: "{surface.300}",
					color: "{surface.9500}",
					hoverColor: "{surface.700}",
					activeColor: "{surface.800}",
					focusRing: {
						color: "{surface.600}",
						shadow: "none"
					}
				},
				info: {
					background: "{severity.info.400}",
					hoverBackground: "{severity.info.600}",
					activeBackground: "{severity.info.700}",
					borderColor: "{severity.info.500}",
					hoverBorderColor: "{severity.info.600}",
					activeBorderColor: "{severity.info.700}",
					color: "#ffffff",
					hoverColor: "#ffffff",
					activeColor: "#ffffff",
					focusRing: {
						color: "{severity.info.500}",
						shadow: "none"
					}
				},
				success: {
					background: "{severity.success.600}",
					hoverBackground: "{severity.success.700}",
					activeBackground: "{severity.success.800}",
					borderColor: "{severity.success.500}",
					hoverBorderColor: "{severity.success.700}",
					activeBorderColor: "{severity.success.800}",
					color: "#ffffff",
					hoverColor: "#ffffff",
					activeColor: "#ffffff",
					focusRing: {
						color: "{severity.success.500}",
						shadow: "none"
					}
				},
				warn: {
					background: "{severity.warning.500}",
					hoverBackground: "{severity.warning.600}",
					activeBackground: "{severity.warning.700}",
					borderColor: "{severity.warning.500}",
					hoverBorderColor: "{severity.warning.600}",
					activeBorderColor: "{severity.warning.700}",
					color: "#ffffff",
					hoverColor: "#ffffff",
					activeColor: "#ffffff",
					focusRing: {
						color: "{severity.warning.500}",
						shadow: "none"
					}
				},
				help: {
					background: "{severity.help.600}",
					hoverBackground: "{severity.help.700}",
					activeBackground: "{severity.help.800}",
					borderColor: "{severity.help.500}",
					hoverBorderColor: "{severity.help.700}",
					activeBorderColor: "{severity.help.800}",
					color: "#ffffff",
					hoverColor: "#ffffff",
					activeColor: "#ffffff",
					focusRing: {
						color: "{severity.help.500}",
						shadow: "none"
					}
				},
				danger: {
					background: "{severity.danger.600}",
					hoverBackground: "{severity.danger.700}",
					activeBackground: "{severity.danger.800}",
					borderColor: "{severity.danger.500}",
					hoverBorderColor: "{severity.danger.700}",
					activeBorderColor: "{severity.danger.800}",
					color: "#ffffff",
					hoverColor: "#ffffff",
					activeColor: "#ffffff",
					focusRing: {
						color: "{severity.danger.600}",
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
					hoverBackground: "{severity.success.50}",
					activeBackground: "{severity.success.100}",
					borderColor: "{severity.success.200}",
					color: "{severity.success.500}"
				},
				info: {
					hoverBackground: "{severity.info.50}",
					activeBackground: "{severity.info.100}",
					borderColor: "{severity.info.200}",
					color: "{severity.info.500}"
				},
				warn: {
					hoverBackground: "{severity.warning.50}",
					activeBackground: "{severity.warning.100}",
					borderColor: "{severity.warning.200}",
					color: "{severity.warning.500}"
				},
				help: {
					hoverBackground: "{severity.help.50}",
					activeBackground: "{severity.help.100}",
					borderColor: "{severity.help.200}",
					color: "{severity.help.500}"
				},
				danger: {
					hoverBackground: "{severity.danger.50}",
					activeBackground: "{severity.danger.100}",
					borderColor: "{severity.danger.200}",
					color: "{severity.danger.500}"
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
					hoverBackground: "{severity.success.50}",
					activeBackground: "{severity.success.100}",
					color: "{severity.success.500}"
				},
				info: {
					hoverBackground: "{severity.info.50}",
					activeBackground: "{severity.info.100}",
					color: "{severity.info.500}"
				},
				warn: {
					hoverBackground: "{severity.warning.50}",
					activeBackground: "{severity.warning.100}",
					color: "{severity.warning.500}"
				},
				help: {
					hoverBackground: "{severity.help.50}",
					activeBackground: "{severity.help.100}",
					color: "{severity.help.500}"
				},
				danger: {
					hoverBackground: "{severity.danger.50}",
					activeBackground: "{severity.danger.100}",
					color: "{severity.danger.500}"
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
					background: "{severity.info.400}",
					hoverBackground: "{severity.info.300}",
					activeBackground: "{severity.info.200}",
					borderColor: "{severity.info.400}",
					hoverBorderColor: "{severity.info.300}",
					activeBorderColor: "{severity.info.200}",
					color: "{severity.info.950}",
					hoverColor: "{severity.info.950}",
					activeColor: "{severity.info.950}",
					focusRing: {
						color: "{severity.info.400}",
						shadow: "none"
					}
				},
				success: {
					background: "{severity.success.400}",
					hoverBackground: "{severity.success.300}",
					activeBackground: "{severity.success.200}",
					borderColor: "{severity.success.400}",
					hoverBorderColor: "{severity.success.300}",
					activeBorderColor: "{severity.success.200}",
					color: "{severity.success.950}",
					hoverColor: "{severity.success.950}",
					activeColor: "{severity.success.950}",
					focusRing: {
						color: "{severity.success.400}",
						shadow: "none"
					}
				},
				warn: {
					background: "{severity.warning.400}",
					hoverBackground: "{severity.warning.300}",
					activeBackground: "{severity.warning.200}",
					borderColor: "{severity.warning.400}",
					hoverBorderColor: "{severity.warning.300}",
					activeBorderColor: "{severity.warning.200}",
					color: "{severity.warning.950}",
					hoverColor: "{severity.warning.950}",
					activeColor: "{severity.warning.950}",
					focusRing: {
						color: "{severity.warning.400}",
						shadow: "none"
					}
				},
				help: {
					background: "{severity.help.400}",
					hoverBackground: "{severity.help.300}",
					activeBackground: "{severity.help.200}",
					borderColor: "{severity.help.400}",
					hoverBorderColor: "{severity.help.300}",
					activeBorderColor: "{severity.help.200}",
					color: "{severity.help.950}",
					hoverColor: "{severity.help.950}",
					activeColor: "{severity.help.950}",
					focusRing: {
						color: "{severity.help.400}",
						shadow: "none"
					}
				},
				danger: {
					background: "{severity.danger.400}",
					hoverBackground: "{severity.danger.300}",
					activeBackground: "{severity.danger.200}",
					borderColor: "{severity.danger.400}",
					hoverBorderColor: "{severity.danger.300}",
					activeBorderColor: "{severity.danger.200}",
					color: "{severity.danger.950}",
					hoverColor: "{severity.danger.950}",
					activeColor: "{severity.danger.950}",
					focusRing: {
						color: "{severity.danger.400}",
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
					hoverBackground: "color-mix(in srgb, {severity.success.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.success.400}, transparent 84%)",
					borderColor: "{severity.success.700}",
					color: "{severity.success.400}"
				},
				info: {
					hoverBackground: "color-mix(in srgb, {severity.info.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.info.400}, transparent 84%)",
					borderColor: "{severity.info.700}",
					color: "{severity.info.400}"
				},
				warn: {
					hoverBackground: "color-mix(in srgb, {severity.warning.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.warning.400}, transparent 84%)",
					borderColor: "{severity.warning.700}",
					color: "{severity.warning.400}"
				},
				help: {
					hoverBackground: "color-mix(in srgb, {severity.help.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.help.400}, transparent 84%)",
					borderColor: "{severity.help.700}",
					color: "{severity.help.400}"
				},
				danger: {
					hoverBackground: "color-mix(in srgb, {severity.danger.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.danger.400}, transparent 84%)",
					borderColor: "{severity.danger.700}",
					color: "{severity.danger.400}"
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
					hoverBackground: "color-mix(in srgb, {severity.success.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.success.400}, transparent 84%)",
					color: "{severity.success.400}"
				},
				info: {
					hoverBackground: "color-mix(in srgb, {severity.info.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.info.400}, transparent 84%)",
					color: "{severity.info.400}"
				},
				warn: {
					hoverBackground: "color-mix(in srgb, {severity.warning.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.warning.400}, transparent 84%)",
					color: "{severity.warning.400}"
				},
				help: {
					hoverBackground: "color-mix(in srgb, {severity.help.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.help.400}, transparent 84%)",
					color: "{severity.help.400}"
				},
				danger: {
					hoverBackground: "color-mix(in srgb, {severity.danger.400}, transparent 96%)",
					activeBackground: "color-mix(in srgb, {severity.danger.400}, transparent 84%)",
					color: "{severity.danger.400}"
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


export { button }
