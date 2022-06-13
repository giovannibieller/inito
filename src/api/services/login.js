import EndPoints from '../endpoints';
import client from '../client/client';

async function post(username, password) {
  const body = {
    username: username,
    password: password
  };

  try {
    const res = await client.post(EndPoints.LOGIN, body);

    if (res && res.status === 200) {
      return {
        status: 'OK',
        data: res.data
      };
    }
  } catch (error) {
    return {
      status: 'KO',
      error: error
    };
  }
}

export default { post };
