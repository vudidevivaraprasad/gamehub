const MetaCritic = ({critic}:{critic:number}) => {
    return(
        <span className={`border px-3 py-1 rounded bg-opacity-10 ${critic>80?'bg-success':'bg-warning'}`}>{critic}</span>
    )
}

export default MetaCritic