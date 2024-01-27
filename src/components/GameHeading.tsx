import { GameQuery } from "./Home"

const Heading = ({gamequery}:{gamequery:GameQuery}) => {
    return(
        <h1 className="mx-5 bold py-2 text-nowrap display-6 fw-semibold">{`${gamequery.genre?gamequery.genre.name+" ":""}Games`}</h1>
    )
}

export default Heading