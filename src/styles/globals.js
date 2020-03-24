import Colors from './colors';
import Fonts from './fonts';

const Styles = {
	...Fonts.main,
	'@global': {
		'*': {
			'-moz-box-sizing': 'border-box',
			'box-sizing': 'border-box'
		},
		body: {
			background: Colors.accent,
			margin: 0,
			'font-family': Fonts.main['@font-face'].fontFamily
		},
		a: {
			textDecoration: 'none'
		}
	}
};

export default Styles;
