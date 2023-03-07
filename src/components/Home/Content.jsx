import style from "./Home.module.css"
import { gql, useQuery } from "@apollo/client";

const ALL_BIOTECHS = gql`
    query {
        allBiotechs{
            name
            description
            industries
        }
    }
`

const Content = () => {
    
    const { data } = useQuery(ALL_BIOTECHS) 
    console.log(data)
    
    return (
        <div className={style.content}>
         { data && data.allBiotechs?.map((bio) => (
            <section>
                <h1>{bio.name}</h1>
                <p>{bio.description}</p>
                <h3>{bio.industries}</h3>
            </section>
         ))}
        </div>
    )
}

export default Content;