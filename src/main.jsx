import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient,HttpLink, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http//localhost:4000/"
  })
})

const query = gql`
  query {
    allPersons {
      name
      age
      nationality
    }
  }
`

client.query({ query: query })
  .then( res => {
    console.log(res.data);
  })//.catch(e => console.log(e))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
