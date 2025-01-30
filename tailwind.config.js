module.exports = {
    content: [
      "./src/**/*.{html,js,jsx,ts,tsx}", // Adjust based on where your React components are
      "./public/index.html",             // If you have an HTML file in public, include it
    ],
    theme: {
      extend: {
        colors: {
          skyblue: '#C8EFFF', // You can name it anything, here it's 'skyblue'
        },
      },
    },
    plugins: [],
  }
  