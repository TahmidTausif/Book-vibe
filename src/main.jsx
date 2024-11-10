import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import List from './Pages/List'
import Page from './Pages/Page'
import Home from './Pages/Home'
import Book from './Components/Book'
import { Toaster } from 'react-hot-toast'
import Reads from './Pages/Reads'
import WishLists from './Pages/WishLists'
import Error from './Pages/Error'

const router = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout/>,
      errorElement: <Error/>,
      children:[
        {
          path:'/',
          element: <Home/>,
          loader: () => fetch('/FakeData.json'),
        },
        {
          path:'/home/:bookId',
          element:<Book/>,
          loader: () => fetch('/FakeData.json')
        },
        {
          path:'/list',
          element:<List/>,
          children:[
            {
              path:'',
              element:<Reads/>
            },
            {
              path:'wishlist',
              element:<WishLists/>
            },
          ]
        },
        {
          path:'/page',
          element:<Page/>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster/>
  </React.StrictMode>,
)
