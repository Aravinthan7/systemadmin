import { useEffect, useState } from "react";
import axios from "axios";

const useAxios = ({ url, method, body = null, headers = null }) => {
  axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
  const [res, setRes] = useState("");
  const [err, setErr] = useState(null);
  const [loading, setLoading] = useState(false);


  const fetchData =async ()=>{
     axios[method](url,JSON.parse(headers),JSON.parse(body)).then((res)=>{
      setRes(res.data);
     })
     .catch((err)=>{
      setErr(err)
     })
     .finally(()=>{
      setLoading(false);
     })
  }
  useEffect(()=>{
    fetchData()
  },[method,url,body,headers])

  return {res,err,loading}
};

export default useAxios;
