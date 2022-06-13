import EndPoints from '../endpoints';
import client from '../client/client';

async function get() {
  try {
    const res = await client.get(EndPoints.USERS);
    return res;
  } catch (error) {
    return {
      status: 'KO',
      error: error
    };
  }
}

export default { get };
