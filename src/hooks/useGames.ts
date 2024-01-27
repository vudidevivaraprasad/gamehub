import { GameQuery } from "../components/Home"
import useData from "./useData"

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
    return useData<Games>('/games',{params:{genres:gamequery.genre?.id,platforms:gamequery.platform_id,ordering:gamequery.sort,search:gamequery.search}},[gamequery])
}

export default useGames