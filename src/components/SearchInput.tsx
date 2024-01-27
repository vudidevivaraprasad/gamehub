import { BsSearch } from "react-icons/bs";
import './Custom.css'
import { useRef } from "react";

interface Props{
    onSearch:(text:string) => void
}

const SearchInput = ({onSearch}:Props) => {
    const search_input = useRef<HTMLInputElement>(null)
    return(
        <form className="w-75" onSubmit={(event)=>{
                    event.preventDefault();
                    if(search_input.current)  onSearch(search_input.current?.value)

                }}>
            <div className="input-group bg-transparent px-md-0 px-1">
                <div className="input-group-text border-end-0 "><BsSearch /></div>
                <input ref={search_input} type="text" placeholder="Search games..." className="form-control border-start-0 custom-input"/>
            </div>
        </form>
    )
}

export default SearchInput