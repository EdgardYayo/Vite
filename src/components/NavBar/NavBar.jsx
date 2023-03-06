import style from "./NavBar.module.css"

const NavBar = () => {
    return (
        <>
        <nav className={style.container}>
            <button>Home</button>
            <button>Extras</button>
            <button>Other thing</button>
        </nav>
        </>
    )
}


export default NavBar