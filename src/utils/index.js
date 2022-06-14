const saveToken = accessToken => {
  localStorage.setItem('accessToken', accessToken);
};

export { saveToken };
