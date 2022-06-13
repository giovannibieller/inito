import React, { useState, useEffect } from 'react'; // eslint-disable-line

const useApi = (service = () => {}, params = null, options = { loadingOnRefetch: true }) => {
  const [loading, handleLoading] = useState(true);
  const [data, handleData] = useState(null);
  const [error, handleError] = useState(null);

  const { loadingOnRefetch } = options;

  const fetchApi = async () => {
    if (loadingOnRefetch) handleLoading(true);
    const res = await service(params);

    if (res.status === 'OK') {
      handleData(res.data);
    } else {
      handleError(res.error);
    }
    handleLoading(false);
  };

  const refetch = () => {
    fetchApi();
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return { data, loading, error, refetch };
};

export default useApi;
