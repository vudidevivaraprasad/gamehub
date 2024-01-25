import { useEffect, useState } from 'react'
import apiService from '../services/api-client'
import './GameGrid.css'
import IconsList from './IconsList'
import MetaCritic from './MetaCritic'
import GetCropImage from '../services/GetCropImage'

export interface plateforms {
    platform:{
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

interface GamesGroup {
    count:number,
    results:Games[]
}

const GameGrid = () => {
    const [games,setGames] = useState<Games[]>([])
    const [error,setError] = useState('')

    useEffect(()=>{
        apiService.get<GamesGroup>('/games',)
            .then(res=>setGames(res.data.results))
            .catch(err => setError(err.message))
    },[games])
    return(
        <>
            {error && <p>{error}</p>}
            <div className="container">
                <div className="row row-cols-lg-4 row-cols-md-3 row-cols-2 g-5 my-0">
                    {games.map(game => 
                        <div className="col">
                            <div className='card border border-0 c_shadow'>
                                <img src={GetCropImage(game.background_image)} alt="" className='card-img-top'/>
                                <div className="card-body rounded transparent_background">
                                    <p className="card-title">{game.name}</p>
                                    <div className="m-0 p-0 d-flex justify-content-between">
                                        <IconsList platforms={game.parent_platforms}/>
                                        <MetaCritic critic={game.metacritic}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default GameGrid