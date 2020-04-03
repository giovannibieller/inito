import EndPoints from '../endpoints';
import HttpClient from '../httpClient/httpClient';

function post(username, password) {
  const body = {
    username: username,
    password: password
  };

  return HttpClient.options({ noAuth: true })
    .headers({ 'Content-Type': 'application/json' })
    .url(`${EndPoints.login}`)
    .body(JSON.stringify(body))
    .post()
    .json(json => json)
    .then(response => response);
}

export default { post };
