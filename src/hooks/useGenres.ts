import { useQuery } from "@tanstack/react-query"
// import useData from "./useData"
import apiClient from "../services/api-client"
import { FetchResponse } from "../services/api-client"


export interface Genre{
    id:number,
    name:string,
    image_background:string
}

const useGenres = () => {
    // return useData<Genre>('/genres')
    return useQuery({
        queryKey:["genres"],
        queryFn:()=> apiClient.get<FetchResponse<Genre>>('/genres').then(res=>res.data.results),
        staleTime: 24*60*60*10000 //refetch after 24 hours
    })
}

export default useGenres