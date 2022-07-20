/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        "primary": "#003865",
        "secondary": "#3CCF4E",
      },
      spacing: {
        '25': '25px',
      },
      width: {
        '100': '100px',
      },
      height: {
        '100': '100px',
      },
      fontSize: {
        sizeLg: ['20px', "30px"],
        size_md: ['17px', {
          lineHeight: '25px',
        }],
        "size-sm": "15px",
      }
    },
  },
  plugins: [],
}