import Footer from "../Footer/Footer"
import NavBar from "../NavBar/NavBar"
import style from "./Home.module.css";


const Home = () => {
    return(
        <>
        <div className={style.cont}>
            <NavBar/>
            <Footer/>
        </div>
        </>
    )
}

export default Home