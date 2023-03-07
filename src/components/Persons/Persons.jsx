import { gql, useQuery } from "@apollo/client"
import NavBar from "../NavBar/NavBar"
import style from "./Persons.module.css"

const ALL_PERSONS = gql`
  query {
    allPersons {
      name
      age
      nationality
    }
  }
`


const Persons = () => {

  const { data, error, loading } = useQuery(ALL_PERSONS)


    return (
        <div className={style.content}>
            <NavBar/>
            { data && data.allPersons?.map((p) => (
                <section>
                    <h2>{p.name}</h2>
                    <h3>{p.age}</h3>
                    <h3>{p.nationality}</h3>
                </section>
            ))}

        </div>
    )
}

export default Persons