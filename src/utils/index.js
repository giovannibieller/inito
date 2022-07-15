const saveToken = accessToken => {
  localStorage.setItem('accessToken', accessToken);
};

const getCssValue = property => {
  return getComputedStyle(document.documentElement).getPropertyValue(property);
};

export { saveToken, getCssValue };
