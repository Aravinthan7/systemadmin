import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = ({ url, method, body = null, headers = null, bodyheaders }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null)

  const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
  })

  const fetchData = async () => {

    try {
      const res = await api.request({
        url,
        method,
        headers,
        data: body
      });
      setResponse(res.data);
    }
    catch (err) {
      setError(err)
    }
    finally {
      setLoading(false)
    }

    
  }

  useEffect(() => {
    fetchData()
  }, [url, method, bodyheaders])
  return { response, error, loading }
};

export default useAxios;
