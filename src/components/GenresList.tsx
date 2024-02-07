import useGenres, { Genre } from "../hooks/useGenres"
import Loading from "./Loading";

interface Props {
    selectedGenreId:number|null
    color:string,
    onSelectedGenre:(genre:Genre) => void
}

const GenresList = ({selectedGenreId,color,onSelectedGenre}:Props) => {
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

    const {data,error,isLoading} = useGenres()
    if (error) return null;
    return(
        <>  
            <h1 className="text-nowrap display-6 fw-semibold mt-3 mx-2">Genres</h1>
            {isLoading && <Loading />}
            <div className="py-1 px-2">
                {data?.map(genre =>
                    <div className="d-flex py-2" key={genre.id}>
                        <img src={genre.image_background} alt="" style={{width:"45px",height:"30px",borderRadius:"7px"}}/>
                        <button className={`px-2 fw-medium ${selectedGenreId===genre.id?"fw-bolder":""}`} style={buttonStyle} onClick={()=>onSelectedGenre(genre)}>{genre.name}</button>
                    </div>
                    )}
            </div>
        </>
    )
}

export default GenresList