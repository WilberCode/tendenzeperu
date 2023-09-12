module.exports = {
  mode:'jit',
  purge: [ './videos/index.php','./promociones/index.php'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: { 
      spacing: {
       /*  px: '1px',
        '0': '0',
        '1': '0.25rem',
        '2': '0.5rem',
        '2-1': '0.6rem',
        '3': '0.75rem',
        '4': '1rem',
        '5': '1.25rem',
        '6': '1.5rem',
        '8': '2rem',
        '10': '2.5rem', 
        '12': '3rem',*/
        '13': '3.1rem', 
       /*  '14': '3.6rem',
        '15': '3.8rem',
        '16': '4rem',
        '17': '4.4rem',
        '20': '5rem',
        '22': '5.5rem',
        '24': '6rem',
        '26': '7rem',
        '27': '7.8rem',
        '32': '8rem',
        '33': '9.4rem',
        '34': '9.6rem',
        '35': '9.8rem',
        '40': '10rem',
        '41': '11rem',
        '42': '11.2rem', 
        '44': '11.4rem',
        '45': '11.5rem',
        '46': '11.563rem',
        '48': '12rem',
        '50': '13rem',
        '52': '13.2rem',
        '53': '13.4rem',
        '54': '13.6rem',
        '55': '13.8rem',
        '56': '14rem',
        '57': '15rem',
        '58': '16rem',
        '59': '17rem',
        '60': '18rem',
        '61': '19rem',
        '62': '20rem',
        '63': '21rem', 
        '63-1': '346.623px', 
        '64': '22rem',
        '64': '23rem', */
      },
      colors: {
     /*    link: {
            'default': '#152268',
            'hover': '#152268',
        }, */
        transparent: 'transparent',
        black: '#000',
    /*     dark: '#211915',
        title:'#595A5C', */
        white: '#fff',
       /*  url:'#152268',
        line: "#b3b2b2", 
        success:"#0f834d",
        info:"#3d9cd2",
        error:"#e2401c", */
        primary: {  
            500: '#ffe900',  
        }, 
        
      },
      fontFamily: { 
        prelo: 'Prelo',
        times: 'times'
      }
    }, 
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
