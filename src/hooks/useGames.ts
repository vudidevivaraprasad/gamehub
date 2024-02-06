import { useQuery } from "@tanstack/react-query"
import { GameQuery } from "../components/Home"
import { FetchResponse } from "../services/api-client"
import apiClient from "../services/api-client"

export interface plateforms {
    platform:{
        id:number
        name:string,
        slug:string
    }
}

interface Games {
    id:number,
    name:string,
    background_image:string,
    metacritic:number
    parent_platforms:plateforms[]
}

const useGames = (gamequery:GameQuery) => {
    return useQuery({
        queryKey:["games",gamequery],
        queryFn:() => apiClient.get<FetchResponse<Games>>('/games',{params:{genres:gamequery.genre?.id,parent_platforms:gamequery.platform_id,ordering:gamequery.sort,search:gamequery.search}})
                                .then(res=> res.data.results)
    })
    // return useData<Games>('/games',{params:{genres:gamequery.genre?.id,parent_platforms:gamequery.platform_id,ordering:gamequery.sort,search:gamequery.search}},[gamequery])
}

export default useGames