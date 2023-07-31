import { useEffect, useState } from "react";
import axios, { AxiosError, AxiosRequestConfig } from "axios";

export const useAxios = (url: string) => {
  const [response, setResponse] = useState<[] | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:4000/api/${url}`)
      .then((resp) => {
        setTimeout(() => setLoading(false), 2000);
        setResponse(resp.data.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });

    return () => {};
  }, [url]);

  return [response, loading, error] as const;
};
