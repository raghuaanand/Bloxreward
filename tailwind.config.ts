const defaultTheme = require("tailwindcss/defaultTheme");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ['class'],
    content: [
	  './app/**/*.{js,ts,jsx,tsx}', // Adjust path if needed
	],
	theme: {
    	extend: {
    		colors: {
    			myGreen: '#29b851',
    			bgColor: '#fcf9f9',
    		},
    		keyframes: {
    			scroll: {
    				to: {
    					transform: 'translate(calc(-50% - 0.5rem))'
    				}
    			},
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
				'scroll': 'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite'
    		},
			backgroundImage: {
				'custom-gradient': `
				  linear-gradient(93.98deg, #29B851 0.14%, #25A44C 99.86%),
				  linear-gradient(0deg, rgba(255, 255, 255, 0.62), rgba(255, 255, 255, 0.62)),
				  radial-gradient(100% 100% at 0% 0%, #25AD4B 0%, rgba(37, 173, 75, 0) 100%),
				  radial-gradient(81.71% 114.05% at 100% 100%, #91FFB0 0%, rgba(255, 255, 255, 0) 100%)`
			  },
    	}
    },
	plugins: [addVariablesForColors],
  };

   
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }
  