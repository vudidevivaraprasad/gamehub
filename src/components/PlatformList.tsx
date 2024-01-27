import usePlatforms from "../hooks/usePlatforms"
import './Custom.css'

interface Props {
    onPlatform:(platform_id:number) => void
}

const PlatformList = ({onPlatform}:Props) => {
    const {data,error} = usePlatforms(null)
    if (error) return null;

    return(
            <div className="w-25 custom_select position-relative mx-4" >
                <select className="form-select bg-secondary-subtle mx-4" onChange={(event)=>onPlatform(parseInt(event.target.value))}>
                    <option value="" disabled selected>Platforms</option>
                    {data.map(pl => <option className="dropdown-item" key={pl.id} value={pl.slug!="playstation"?pl.id:18}>{pl.name}</option>)}
                </select>
            </div>
    )

}

export default PlatformList