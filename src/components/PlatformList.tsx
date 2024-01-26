import usePlatforms from "../hooks/usePlatforms"

interface Props {
    onPlatform:(platform_id:number) => void
}

const PlatformList = ({onPlatform}:Props) => {
    const {data} = usePlatforms(null)

    return(
            <select className="form-select w-25 bg-secondary-subtle mx-4" onChange={(event)=>onPlatform(parseInt(event.target.value))}>
                <option value="" disabled selected>Platforms</option>
                {data.map(pl => <option className="dropdown-item" key={pl.id} value={pl.id}>{pl.name}</option>)}
            </select>
    )

}

export default PlatformList