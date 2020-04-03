import jss from 'jss';
import preset from 'jss-preset-default';

const initJSS = () => jss.setup(preset());
const createJSS = styles => jss.createStyleSheet(styles).attach();

const saveToken = accessToken => {
  console.log('accessToken', accessToken);
  localStorage.setItem('accessToken', accessToken);
};

export { initJSS, createJSS, saveToken };
