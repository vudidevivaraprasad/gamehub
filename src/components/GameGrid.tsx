import useGames from '../hooks/useGames'
import './GameGrid.css'
import IconsList from './IconsList'
import MetaCritic from './MetaCritic'
import GetCropImage from '../services/GetCropImage'
import Skeleton from './Skeleton'
import { Genre } from '../hooks/useGenres'

const GameGrid = ({selectedGenre}:{selectedGenre:Genre|null}) => {
    const {data,error,loading} = useGames(selectedGenre)
    const values = [1,2,3,4,5,6,7,8,9]
   
    return(
        <>  
            {loading && <Skeleton values={values}/>}
            {error && <p>{error}</p>}
            <div className="container">
                <div className="row row-cols-md-3 row-cols-2 gx-md-4 gy-5 g-3 my-0">
                    {data.map(data => 
                        <div className="col" key={data.id}>
                            <div className='card border border-0 c_shadow overflow-hidden'>
                                <img src={GetCropImage(data.background_image)} alt="" className='card-img-top'/>
                                <div className="card-body rounded transparent_background">
                                    <p className="card-title">{data.name}</p>
                                    <div className="m-0 p-0 d-flex justify-content-between">
                                        <IconsList platforms={data.parent_platforms}/>
                                        <MetaCritic critic={data.metacritic}/>
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