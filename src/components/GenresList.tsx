import { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres"
import Loading from "./Loading";

interface Props {
    selectedGenre:Genre|null
    color:string,
    onSelectedGenre:(genre:Genre) => void
}

const GenresList = ({selectedGenre,color,onSelectedGenre}:Props) => {
    const buttonStyle = {
        background: 'none',
        border: 'none',
        color:color,
        textDecoration: 'none',
        cursor: 'pointer',
        padding: 0,
        fontSize: 'inherit',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      };

    const {data,error,loading} = useGenres()
    if (error) return null;
    return(
        <>  
            {loading && <Loading />}
            <div className="py-3 px-2">
                {data.map(genre =>
                    <div className="d-flex py-2" key={genre.id}>
                        <img src={genre.image_background} alt="" style={{width:"45px",height:"30px",borderRadius:"7px"}}/>
                        <button className={`px-2 fw-medium ${selectedGenre?.id===genre.id?"fw-bolder":""}`} style={buttonStyle} onClick={()=>onSelectedGenre(genre)}>{genre.name}</button>
                    </div>
                    )}
            </div>
        </>
    )
}

export default GenresList