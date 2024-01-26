import logo from '../assets/logo.webp'
import Mode_switcher from './ModeSwitcher'

interface Props{
    ChangeMode:(value:boolean)=>void
}
const NavBar = ({ChangeMode}:Props) => {
    return(
        <div className="d-flex justify-content-between align-items-center">
            <img src={logo} alt="logo" style={{height:"4rem"}} />
            <Mode_switcher click={ChangeMode}/>
        </div>
    )
}

export default NavBar