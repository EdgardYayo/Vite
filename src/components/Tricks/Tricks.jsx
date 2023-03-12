import NavBar from "../NavBar/NavBar";
import style from "./Tricks.module.css";
import { gql, useQuery } from "@apollo/client";


const ALL_TRICKS = gql`
 query {      
    allTricks {
      language
      trick
      }
    }
`


const Tricks = () => {

        const { data } = useQuery(ALL_TRICKS);
        console.log(data)
        //const { allTricks } = data;

return (
    <article className={style.container}>
        <NavBar/>
        <section>
        { data && data.allTricks?.map((trick) => (
            <aside className={style.trickWrapper}>
                <h2>{trick.language}</h2>
                <p>{trick.trick}</p>
            </aside>
        ))}
        </section>

    </article>
)

}


export default Tricks;