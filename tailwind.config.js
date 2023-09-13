export default {
  darkMode: 'class',
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
      '3xl': ['32px', '42px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        playfair: ['Playfair Display', 'serif']
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
        'cond-bg': '#F9F9F9',
        'mob-menu': '#BFDBFE',
        'active-link': '#88bff9',
        'nav-link': '#8093c0',
        'select-text': 'rgba(18, 20, 23, 0.20)'
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backdropBlur: {
        mds: '18px'
      },
      screens: {
        wide: '1440px',
        mob: '320px'
      },
      backgroundImage: {
        hero: 'url("src/assets/images/hero.jpg")',
        banner: 'url("src/assets/images/baner-main.png")',
        small: 'url("src/assets/images/bmw.png")'
      },
      scrollbar: ['rounded']
    }
  },
  plugins: []
};
