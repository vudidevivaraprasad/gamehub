import useGenres from "../hooks/useGenres"

const GenresList = () => {
    const {data,error,loading} = useGenres()
    return(
        <div>
            {data.map(genre => <p key={genre.id}>{genre.name}</p>)}
        </div>
    )
}

export default GenresList