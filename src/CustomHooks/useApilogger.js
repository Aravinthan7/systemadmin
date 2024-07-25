import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = ({url,method,body=null,headers=null}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response,setResponse]= useState(null)

  const fetchData=()=>{

    axios[method](url,JSON.parse(headers),JSON.parse(body))
    .then((res)=>{
      setResponse(res)
    })
    .catch((err)=>{
      setError(err)
    })
    .finally(()=>{
      setLoading(false)
    })
  }

  useEffect(()=>{
    fetchData()
  },[url,method,bodyheaders])
  
};

export default useAxios;
