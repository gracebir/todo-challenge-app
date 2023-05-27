/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans':['Josefin Sans', 'sans-serif']
      },
      backgroundImage: {
        // light bg
        "desk-bg-light":"url('https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-desktop-light_j9xyeb.jpg')",
        "mob-bg-light": "url('https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-mobile-light_ky85gd.jpg')",
        // dark bg
        "desk-bg-dark":"url('https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-desktop-dark_crnpoj.jpg')",
        "mob-bg-dark": "url('https://res.cloudinary.com/dnzidlufh/image/upload/v1684996733/bg-mobile-dark_pi6pt4.jpg')",
      },
      colors:{
        "bg-dark": "var(--very-dark-blue)",
        "bg-light":"var(--color-very-light-gray)",
        "text-todos-dark": "var(--color-very-light-gray)",
        "text-todos-light": "var(--very-dark-blue)",
        "text-footer-dark": "var(--very-dark-grayish-blue)",
        "text-footer-dark-hover":"var(--light-grayish-blue)",
        "bg-input-dark": "var(--dark-desaturated-blue)",
        "bg-input-light":"var(--color-very-light-grayish-blue)",
        "gray-text-dark": "var(--very-dark-grayish-blue)",
        "gray-text-light": "var(--dark-grayish-blue)"
      }
    },
  },
  plugins: [],
}

