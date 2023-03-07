import { useState } from "react"
import style from "./Home.module.css"

const Content = () => {
    
    const [state, setState] = useState(false)
    
    return (
        <div className={style.content}>
            <h1>Hello world</h1>
            <h6>Goodbye</h6>  
        </div>
    )
}

export default Content;