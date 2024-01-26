import { useEffect, useState } from "react"
import apiService from "../services/api-client"

interface Data<T> {
    count:number,
    results:T[]
}

const useData = <T>(endpoint:string) => {
    const [data,setData] = useState<T[]>([])
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        apiService.get<Data<T>>(endpoint)
            .then(res=>{setData(res.data.results);setLoading(false);setError('')})
            .catch(err =>{setError(err.message);setLoading(false)})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return {data,error,loading}
}

export default useData