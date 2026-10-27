import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter,RouterProvider } from 'react-router'
import AuthLayout from './layout/AuthLayout.jsx';
import MainLayout from './layout/MainLayout.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import { AuthProvider } from './context/Authcontext.jsx';
import ProtectedRoutes from './routes/ProtectedRoutes.jsx';
import Home from './pages/Home.jsx';
import Products  from './pages/Products.jsx';
import Users from './pages/Users.jsx';
import ProductLayout from './layout/ProductLayout.jsx';
import { ProductProvider } from './context/ProductContext.jsx';
import Search from './pages/Search.jsx';

const router = createBrowserRouter([
    {
        path:"",
        element:<AuthLayout/>,
        children:[
            {
                path:"",
                element:<Login/>
            },
            {
                path:"register",
                element:<Register/>
            }
        ]
    },
    {
        path:"main",
        element:<ProtectedRoutes/>,
        children:[
           {
              path:"",
              element:<MainLayout/>,
              children:[
                {
                   path:"",
                   element:<Home/>
                },
                {
                   path:"products",
                   element:<ProductLayout/>,
                   children:[
                      {
                        path:"all",
                        element:<Products/>
                      },
                      {
                        path:"search",
                        element:<Search/>
                      }
                   ]
                   
                },
                {
                   path:"users",
                   element:<Users/>
                }
              ]
           }
        ]
    }
])

createRoot(document.getElementById('root')).render(
 <ProductProvider>
   <AuthProvider>
     <RouterProvider router={router} />
   </AuthProvider>
  </ProductProvider> 
)