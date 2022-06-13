import React from 'react';

import { useGetUsers } from '@api/hooks';

const TestApiCall = () => {
  const { data, loading, error, refetch } = useGetUsers();

  return (
    <div style={{ marginTop: '32px' }}>
      <h2 style={{ margin: '0 0 16px' }}>API CALL</h2>
      {loading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <div>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
              refetch();
            }}
          >
            REFETCH
          </a>
          <br />
          <p style={{ fontSize: '11px' }}>{JSON.stringify(data)}</p>
        </div>
      )}
    </div>
  );
};

export default TestApiCall;
