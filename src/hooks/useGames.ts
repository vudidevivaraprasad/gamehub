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

const useGames = () => {
    return useData<Games>('/games')
}

export default useGames