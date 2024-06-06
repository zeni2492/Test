module.exports = {
  purge:{
      content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
    },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '7/7': '100%',
        '95%' : '95%',
        '90%' : '90%',
        '80%' : '80%',
        '70%' : '70%',
        '60%' : '60%',
        '50%' : '50%',
        '40%' : '40%',
        '30%' : '30%',
        '20%' : '20%',
        '10%' : '10%',
      },
      colors:{
        'Custom-Green':'#219653',
        'Custom-Blue' : '#449dd1',
        'Custom-Dark-Blue' : '#171858',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}