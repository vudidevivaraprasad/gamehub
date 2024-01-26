import { useState } from "react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import './Home.css'
import GenresList from "./GenresList";
import { Genre } from "../hooks/useGenres";
import PlatformList from "./PlatformList";

export interface GameQuery {
    genre:Genre | null,
    platform_id:number | null
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
                        <NavBar ChangeMode={changeMode}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2 d-none d-lg-block my-2">
                        <GenresList selectedGenre={gameQuery.genre} color={DarkMode?"white":"black"} onSelectedGenre={(genre)=>setGameQuery({...gameQuery,genre})}/>
                    </div>
                    <div className="col py-md-4 py-2">
                        <PlatformList onPlatform={(platform_id)=>{setGameQuery({...gameQuery,platform_id})}}/>
                        <GameGrid gamequery={gameQuery}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;