import useData from "./useData"
import { Genre } from "./useGenres"

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

const useGames = (selectedGenre:Genre|null) => {
    return useData<Games>('/games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id])
}

export default useGames