import { useEffect, useState } from 'react';
import Axios from 'axios';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();
    const signal = abortCont.signal;

    let isMounted = true; // Flag to track component mount status

    async function fetchData() {
      try {
        const response = await Axios.get(url, { signal });
        if (isMounted) {
          // Check if the component is still mounted before setting the state
          setData(response.data);
          setError(null);
          setIsLoading(false);
        }
      } catch (error) {
        if (isMounted) {
          // Check if the component is still mounted before setting the state
          setIsLoading(false);
          setError(error);
        }
      }
    }

    fetchData();

    return () => {
      // Cleanup: Cancel the fetch when the component unmounts
      isMounted = false;
      abortCont.abort();
    };
  }, [url]);

  return { data, isLoading, error };
};

export default useFetch;
