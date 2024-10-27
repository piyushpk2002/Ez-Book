import Header from './components/header/Header'
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import { Outlet } from 'react-router-dom'

//import Header from './components/header/Header'

function App() {

console.log(import.meta.env.VITE_APPWRITE_URL);
  return (
    <div className='min-h-screen flex flex-wrap content-between bg-white'>
      <ToastContainer/>
      <div className='w-screen'>
        <Header />
        <main>
          <Outlet />
        </main>
        
      </div>
    </div>


  )
}

export default App
