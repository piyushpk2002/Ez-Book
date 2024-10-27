import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Contact from './pages/Contact-us'
import store from './store/store'
import Home from "./pages/Home"
import About from './pages/About-us.jsx'
import ServicesHome from "./components/services/Services_Home"
import FoodServices from './components/services/FoodServices.jsx'
import Login from './components/Login.jsx'
import Auth from './pages/Auth.jsx'
import Signup from './components/Signup.jsx'


const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },

    {
      path: "/services",
      element: <ServicesHome />
    },

    {
      path: "/contact-us",
      element: <Contact />
    },

    {
      path: "/about-us",
      element: <About />
    },
    
    {
      path: "/food-services",
      element: <FoodServices />
    },
    {
      path:"/auth",
      element: <Auth />,
      children: [
        {
          path: "/auth/sign-up",
          element: <Signup/>
        },
        {
          path: "/auth/login",
          element: <Login/>
        }
      ]
    },
  ]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router = {router}/>      
    </Provider>
  </StrictMode>,
)
