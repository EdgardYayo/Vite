import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ApolloClient,HttpLink, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Persons from './components/Persons/Persons';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/persons",
    element: <Persons/>
  }
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "http://localhost:4000/"
  })
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <RouterProvider router={router}/>
  </ApolloProvider>,
)
