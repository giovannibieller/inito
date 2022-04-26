import Fonts from './fonts';

const Styles = {
  ...Fonts.main,
  '@global': {
    '*': {
      '-moz-box-sizing': 'border-box',
      'box-sizing': 'border-box'
    },
    body: {
      margin: 0,
      padding: 0,
      fontFamily: Fonts.main['@font-face'].fontFamily
    },
    a: {
      textDecoration: 'none'
    }
  }
};

export default Styles;
