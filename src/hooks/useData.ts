import { AxiosRequestConfig } from "axios";
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string, requestConfig?: AxiosRequestConfig, deps?: unknown[]) => {
  return useQuery({
    queryKey:["games",endpoint,deps],
    queryFn:()=> apiClient.get<FetchResponse<T>>(endpoint,{...requestConfig}).then(res => res.data.results)
  })
  // const [data, setData] = useState<T[]>([]);
  // const [error, setError] = useState("");
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const controller = new AbortController();

  //   setLoading(true);
  //   apiClient
  //     .get<FetchResponse<T>>(endpoint, { signal: controller.signal, ...requestConfig })
  //     .then((res) => {
  //       setData(res.data.results);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       if (err instanceof CanceledError) return;
  //       setError(err.message)
  //       setLoading(false);
  //     });

  //   return () => controller.abort();
  // }, deps ? [...deps] : []);

  // return { data, error, loading };
};

export default useData;