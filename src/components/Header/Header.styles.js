import { createJSS } from '@utils';
import Colors from '@styles/colors';

const Styles = {
	container: {
		padding: '10px',
		background: Colors.grey
	},
	link: {
		color: Colors.accent,
		'text-decoration': 'none',
		'margin-right': '10px',
		display: 'inline-block'
	}
};

export default createJSS(Styles);
