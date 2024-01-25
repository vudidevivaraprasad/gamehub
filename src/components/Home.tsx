import { useState } from "react";
import NavBar from "./NavBar";
import GameGrid from "./GameGrid";
import './Home.css'

const Exercise = () => {
    const [DarkMode,setDarkMode] = useState(false)
    const changeMode = (value:boolean) => {
        setDarkMode(value)
    }
    return(
        <>
            <div className={`container-xxl custom_width ${DarkMode?'dark-mode':'white-mode'}`}>
                <div className="row">
                    <div className="col-12">
                        <NavBar ChangeMode={changeMode}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-auto d-none d-lg-block">side</div>
                    <div className="col">
                        <GameGrid />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Exercise;