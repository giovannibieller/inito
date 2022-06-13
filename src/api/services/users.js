import EndPoints from '../endpoints';
import client from '../client/client';

async function get() {
  try {
    const res = await client.get(EndPoints.USERS);

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

export default { get };
