import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from '../src/Components/Body Section/pages/home';
import Room from '../src/Components/Body Section/pages/Room';
import Driver from './Components/Body Section/pages/Driver';
import Layout from './Components/Layout/layout';
import Login from './Components/Login/Login';
import { AppProvider } from './style/context/AppContext';
import Register from './Components/Register/Register';



const appRoutes =[
  {
    path:"/Login",
    element:(<Login/>)
  },
  {
    path:"/Register",
    element:(<Register/>)
  },
  {
    path:"/",
    element:(<Layout/>),
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"Room",
        element:<Room/>
      },
      {
        path:"Driver",
        element:<Driver/>
      },
    ]
  }
 
]

const router = createBrowserRouter([
  {
    element:(
      <Outlet/>
    ),
    children:appRoutes
  }
])

function App() {
  return (
    <AppProvider>
     <RouterProvider router={router}/>
    </AppProvider>
 )
}

export default App;
