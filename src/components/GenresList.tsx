import useGenres from "../hooks/useGenres"

const GenresList = () => {
    const {data,error} = useGenres()
    return(
        <>
            <div className="py-3 px-2">
                {error && <p>{error}</p>}
                {data.map(genre =>
                    <div className="d-flex py-2">
                        <img src={genre.image_background} alt="" style={{width:"45px",height:"30px",borderRadius:"7px"}}/>
                        <p className="px-1 fw-semibold">{genre.name}</p>
                    </div>
                    )}
            </div>
        </>
    )
}

export default GenresList