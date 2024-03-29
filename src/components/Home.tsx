import { useState } from "react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import './Home.css'
import GenresList from "./GenresList";
import PlatformList from "./PlatformList";
import SortList from "./SortList";
import Heading from "./GameHeading";

export interface GameQuery {
    genreId:number | null,
    platform_id:number | null,
    sort:string | null,
    search:string | null
}

const Home = () => {
    const [DarkMode,setDarkMode] = useState(false)
    const [gameQuery,setGameQuery] = useState<GameQuery>({} as GameQuery)

    const changeMode = (value:boolean) => {
        setDarkMode(value)
    }
    return(
        <>
            <div className={`container-xxl custom_width ${DarkMode?'black-mode':'light-mode'}`}>
                <div className="row">
                    <div className="col-12">
                        <NavBar ChangeMode={changeMode} onSearch={(text)=>setGameQuery({...gameQuery,search:text})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-none d-lg-block my-2">
                        <GenresList selectedGenreId={gameQuery.genreId} color={DarkMode?"white":"black"} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genreId:genre.id})}/>
                    </div>
                    <div className="col py-md-5 py-2">
                        <Heading gamequery={gameQuery}/>
                        <div className="d-flex">
                            <PlatformList onPlatform={(platform_id)=>{setGameQuery({...gameQuery,platform_id})}}/>
                            <SortList onSort={(name)=>setGameQuery({...gameQuery,sort:name})}/>
                        </div>
                        <GameGrid gamequery={gameQuery}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
