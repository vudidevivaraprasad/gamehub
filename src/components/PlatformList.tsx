import usePlatforms from "../hooks/usePlatforms"
import './CustomSelect.css'

interface Props {
    onPlatform:(platform_id:number) => void
}

const PlatformList = ({onPlatform}:Props) => {
    const {data,error} = usePlatforms(null)
    if (error) return null;

    return(
            <div className="w-25 custom_select position-relative mx-4" >
                <select className="form-select bg-secondary-subtle mx-4" onChange={(event)=>onPlatform(parseInt(event.target.value))}>
                    <option value="" disabled>Platforms</option>
                    {data.map(pl => <option className="dropdown-item" key={pl.id} value={pl.id}>{pl.name}</option>)}
                </select>
            </div>
    )

}

export default PlatformList