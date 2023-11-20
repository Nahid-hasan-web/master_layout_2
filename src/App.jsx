
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import NavOne from './Components/NavOne'
import ApiDatas from './Pages/ApiDatas'
import Blog from './Pages/Blog'
import Contract from './Pages/Contract'
import Frorm from './Pages/Frorm'
import Home from './Pages/Home'
import LayoutOne from './Layout/LayoutOne'
import LayoutTwo from './Layout/LayoutTwo'

const tuntuni = createBrowserRouter([
  {
    path:"/",
    element:<LayoutOne/>,
    children:[
    { 
      path:'/',
      element: <Home/>
    },
    {
      path:'Contract',
      element:<Contract/>
    },
    {
      path:'Blog',
      element:<Blog/>
    }
    ]
  },
  {
    path:"/LayoutTwo",
    element:<LayoutTwo/>,
    children:[
      {
        path:'/LayoutTwo',
        element: <Home/>
      },
      {
        path:'/LayoutTwo/API',
        element:<ApiDatas/>,
      },
      {
        path:'/LayoutTwo/Form',
        element:<Frorm/>
      }
    ]
  },
  {
    path:"*",
    element: <h1 className='text-7xl font-bold text-black text-center'>404
      <span className='block text-5xl font-bld text-[#E93B81] mt-5'>  ছিহ...! তুমি এখনো এখানে</span>
    </h1>
  },
])

function App() {

  return (
    <>  
    <RouterProvider router={tuntuni}/>
    </>
  )
}

export default App
