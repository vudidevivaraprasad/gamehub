import { useQuery } from "@tanstack/react-query"
import { FetchResponse } from "./useData"
import apiClient from "../services/api-client"

export interface Platforms{
    id:number,
    name:string,
    slug:string
}

const usePlatforms = (platform_id:number|null) => {
    // return useData<Platforms>('/platforms/lists/parents',{params:{platforms:platform_id}},[platform_id])
    return useQuery({
        queryKey:["platforms"],
        queryFn: () => apiClient.get<FetchResponse<Platforms>>('/platforms/lists/parents',{params:{platforms:platform_id}})
                                .then(res => res.data.results),
        staleTime: 24*60*60*10000
    })
}

export default usePlatforms