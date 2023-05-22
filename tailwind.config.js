/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend : { 
      maxHeight: {
        '550px': '550px',
      },
      backgroundImage:{
        'fondo': "url('https://images.unsplash.com/photo-1585342565162-3704ff9b221d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80')",
      }
    },
  },
  plugins: [],
}

