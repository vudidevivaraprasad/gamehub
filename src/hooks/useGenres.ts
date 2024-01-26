import useData from "./useData"

interface Genere{
    id:number,
    name:string
}

const useGenres = () => {
    return useData<Genere>('/genres')
}

export default useGenres