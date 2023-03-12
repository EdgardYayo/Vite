import style from "./NavBar.module.css"
import { useNavigate } from "react-router-dom"


const NavBar = () => {

    const navigate = useNavigate()

    const handleBiotechs = () => {
        navigate("/")
    }


    const handlePersons = () => {
        navigate("/persons")
    }
    
    const handleTricks = () => {
        navigate("/tricks")
    }

    return (
        <nav className={style.container} >
            <button onClick={() => handleBiotechs()}>
                Biotechs
            </button>
            <button onClick={() => handlePersons()}>
                Persons
            </button>
            <button onClick={() => handleTricks()}>
                Tricks
            </button>
        </nav>
    )
}


export default NavBar