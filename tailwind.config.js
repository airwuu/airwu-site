import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(24) forwards 2s",
        caret: 'typewriter 2s steps(24) forwards 2s, blink 2s steps(24) infinite 2s',
        typewriteronce: "typewriter 0.5s steps(8) forwards",
        caretonce: 'typewriter 0.5s steps(8) forwards, hide 1s infinite 1s',
        neofetch: 'show 0.5 forwards'
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        },
        blink: {
          '0%': {
            opacity: '0',
          },
          '0.1%': {
            opacity: '1',
          },
          '50%': {
            opacity: '1',
          },
          '50.1%': {
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        hide:{
          '0%':{
            opacity: '0',
          },
          '100%': {
            opacity: '0',
          },
        },
        show:{
          '0%':{
            opacity: '1',
          },
          '100%': {
            opacity: '1',
          },
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
