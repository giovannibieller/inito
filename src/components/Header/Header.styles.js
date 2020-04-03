import { createJSS } from '@utils';
import Colors from '@styles/colors';

const Styles = {
  container: {
    display: 'flex',
    'justify-content': 'space-between',
    'align-items': 'center',
    width: '100%',
    padding: '10px',
    background: Colors.grey
  },
  link: {
    color: Colors.accent,
    'text-decoration': 'none',
    'margin-right': '10px',
    display: 'inline-block'
  },
  linkActive: {
    'text-decoration': 'underline'
  }
};

export default createJSS(Styles);
