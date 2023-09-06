export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true
    },
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.24px'
      },
      colors: {
        'accent-color': '#3470FF',
        'hover-color': '#0B44CD',
        'input-color': '#F7F7FB',
        'input-text': '#121417',
        'label-text': '#8A8A89',
        'vector-color': 'rgba(18, 20, 23, 0.1)',
        'btn-text': '#FFFFFF',
        'main-text': '#121417',
        'secondary-text': 'rgba(18, 20, 23, 0.50)',
        'bg-img': '#F3F3F2',
        'hearts-color': 'rgba(255, 255, 255, 0.8);',
        'backdrops-bg': 'rgba(18, 20, 23, 0.50)',
        'modal-bg': '#FFFFFF',
        'cond-text': '#363535',
        'cond-bg': '#F9F9F9'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      screens: {
        wide: '1440px'
      },
      scrollbar: ['rounded']
    }
  },
  plugins: []
}