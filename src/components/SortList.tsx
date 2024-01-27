import './Custom.css'

interface Props{
    onSort:(name:string) => void
}

const SortList = ({onSort}:Props) => {
    return(
        <div className='w-25 custom_select position-relative'>
            <select className="form-select bg-secondary-subtle mx-4" onChange={(event)=>{onSort(event.target.value);}}>
                <option value="">Ordered by:Relevent</option>
                <option value="name">Name</option>
                <option value="released">Released</option>
                <option value="added">Added</option>
                <option value="created">Created</option>
                <option value="updated">Updated</option>
                <option value="rating">Rating</option>
                <option value="metacritic">Metacritic</option>
            </select>
        </div>
    )
}

export default SortList