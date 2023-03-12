import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Persons from './components/Persons/Persons';
import Tricks from './components/Tricks/Tricks';
import './index.css'
import { ApolloClient,HttpLink, InMemoryCache, gql, ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/persons",
    element: <Persons/>
  },
  {
    path:"/tricks",
    element: <Tricks/>
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
