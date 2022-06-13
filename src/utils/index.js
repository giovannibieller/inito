import { createUseStyles } from 'react-jss';

const createJSS = styles => createUseStyles(styles);

const saveToken = accessToken => {
  localStorage.setItem('accessToken', accessToken);
};

export { createJSS, saveToken };
