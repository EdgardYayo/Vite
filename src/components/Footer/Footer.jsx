import { useRef } from "react";
import style from "./Footer.module.css";


const Footer = () => {

    const hello = useRef()

    const handleGreet = () => {
        let greet = hello.current
        greet.innerText = "Hello World!"
        setTimeout(() => {
            greet.innerText = "Edgard A.P.I."
        }, 2000)
    }

    return(
         <footer className={style.container}>
            <p>This Random</p>
            <p>App with random</p>
            <p>Content was created by</p>
            <p 
            onClick={handleGreet}
            ref={hello}>Edgard A.P.I.</p>
         </footer>
    )
}


export default Footer