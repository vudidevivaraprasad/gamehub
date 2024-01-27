import logo from '../assets/logo.webp'
import Mode_switcher from './ModeSwitcher'
import SearchInput from './SearchInput'

interface Props{
    ChangeMode:(value:boolean)=>void,
    onSearch:(text:string) => void
}
const NavBar = ({ChangeMode,onSearch}:Props) => {
    return(
        <div className="d-flex justify-content-between align-items-center">
            <img src={logo} alt="logo" style={{height:"4rem"}} />
            <SearchInput onSearch={onSearch}/>
            <Mode_switcher click={ChangeMode}/>
        </div>
    )
}

export default NavBar