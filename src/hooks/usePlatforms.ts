import useData from "./useData"

export interface Platforms{
    id:number,
    name:string
}

const usePlatforms = (platform_id:number|null) => {
    return useData<Platforms>('/platforms/lists/parents',{params:{platforms:platform_id}},[platform_id])
}

export default usePlatforms