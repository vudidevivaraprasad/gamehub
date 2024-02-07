import { useInfiniteQuery } from "@tanstack/react-query"
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
    return useInfiniteQuery({
        queryKey:["games",gamequery],
        queryFn:({pageParam=1}) => apiClient.get<FetchResponse<Games>>('/games',
                                            {params:{
                                                genres:gamequery.genreId,
                                                parent_platforms:gamequery.platform_id,
                                                ordering:gamequery.sort,
                                                search:gamequery.search,
                                                page:pageParam
                                            }})
                                .then(res=> res.data),

        initialPageParam: 1,
        getNextPageParam: (lastpage,allpages) => {
            return lastpage.next?allpages.length+1:undefined;
        },
    })
    // return useData<Games>('/games',{params:{genres:gamequery.genre?.id,parent_platforms:gamequery.platform_id,ordering:gamequery.sort,search:gamequery.search}},[gamequery])
}

export default useGames