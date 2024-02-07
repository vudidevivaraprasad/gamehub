import useGenres from "../hooks/useGenres"
import usePlatforms from "../hooks/usePlatforms"
import { GameQuery } from "./Home"

const Heading = ({gamequery}:{gamequery:GameQuery}) => {
    const genre = useGenres().data?.find(g => g.id===gamequery.genreId)
    const platform = usePlatforms(null).data?.find(p => p.id===gamequery.platform_id)
    return(
        <h1 className="mx-5 py-2 text-nowrap display-6 fw-semibold">{platform?platform.name+" ":""}{genre?genre.name+" ":""}Games</h1>
    )
}

export default Heading 