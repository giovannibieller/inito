import wretch from 'wretch';
import EndPoints from '@api/endpoints';

const HttpClient = wretch()
  .url(EndPoints.BASE_URL)

  // Cache ie11 fix
  .headers({
    pragma: 'no-cache',
    'cache-control': 'no-cache'
  })

  // Cors fetch options
  .options({
    credentials: 'same-origin',
    mode: 'cors',
    cache: 'no-store'
  })

  // Handle bad request request errors
  .catcher(400, err => {
    console.log('Response => Bed request:', err.status, err.url);
    return Promise.reject(err.res);
  })

  // Handle unauthorized request errors
  .catcher(401, err => {
    console.log('Response => Unauthorized:', err.status, err.url);
    return Promise.reject(err.res);
  })

  // Handle forbidden request errors
  .catcher(403, err => {
    console.log('Response => Forbidden:', err.status, err.url);
    return Promise.reject(err.res);
  })

  // Handle notFound request errors
  .catcher(404, err => {
    console.log('Response => NotFound:', err.status, err.url);
    return Promise.reject(err.res);
  })

  // Handle timeout request errors
  .catcher(418, err => {
    console.log('Response => Timeout:', err.status, err.url);
    return Promise.reject(err.res);
  })

  // Handle internalError request errors
  .catcher(500, err => {
    console.log('Response => Internal Server Error:', err.status, err.url);
    return Promise.reject(err.res);
  });

export default HttpClient;
