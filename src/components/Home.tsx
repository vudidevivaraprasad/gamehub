import { useState } from "react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import './Home.css'
import GenresList from "./GenresList";
import { Genre } from "../hooks/useGenres";

const Home = () => {
    const [DarkMode,setDarkMode] = useState(false)
    const [selectedGenre,setSelectedGenre] = useState<Genre | null>(null)
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
                        <GenresList selectedGenre={selectedGenre} color={DarkMode?"white":"black"} onSelectedGenre={(genre)=>setSelectedGenre(genre)}/>
                    </div>
                    <div className="col">
                        <GameGrid selectedGenre={selectedGenre}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;