import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

export const useAxios = (url: string) => {
  const [response, setResponse] = useState<[] | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();
  const baseUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    setLoading(true);
    axios.get(`${baseUrl}/${url}`).then((resp) => {
      setTimeout(() => setLoading(false), 2000);
      setResponse(resp.data.data);
    });
    // .catch((err) => {
    //   setLoading(false);
    //   setError(err);
    // });

    return () => {};
  }, [url]);

  return [response, loading, error] as const;
};
