import useGames from '../hooks/useGames'
import './GameGrid.css'
import IconsList from './IconsList'
import MetaCritic from './MetaCritic'
import GetCropImage from '../services/GetCropImage'
import Skeleton from './Skeleton'
import { GameQuery } from './Home'
import React from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'


const GameGrid = ({gamequery}:{gamequery:GameQuery}) => {
    const {data,error,isLoading,fetchNextPage,hasNextPage} = useGames(gamequery)
    const values = [1,2,3,4,5,6,7,8,9]
    const dataLength = data?.pages.reduce((total,page)=> total+=page.results.length,0)  || 0
   
    return(
        <>  
            <InfiniteScroll dataLength={dataLength} next={fetchNextPage} hasMore={hasNextPage} loader={<Skeleton values={values}/>}>
                {isLoading && <Skeleton values={values}/>}
                {error && <p>{error.message}</p>}
                <div className="container">
                    <div className="row row-cols-md-3 row-cols-2 gx-md-4 gy-5 g-3 my-0">
                        {data?.pages.map((page,index) => 
                            <React.Fragment key={index}>   
                                {page?.results.map(data => 
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
                            </React.Fragment>)}
                    </div>
                </div>
                {/* {isFetching && <Skeleton values={values}/>}
                {hasNextPage && <button className='btn btn-primary m-3' onClick={()=>fetchNextPage()}>Load more</button>} */}
            </InfiniteScroll>
        </>
    )
}

export default GameGrid