import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import NavItems from './Components/NavItems'
import { useLocation } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)
  const [ activeId ,  setActiveId] = useState(null)
  const location = useLocation();
  useEffect(() => {
    // Set the activeId based on the current location
    switch (location.pathname) {
      case '/login':
        setActiveId(false);
        break;
      
      default:
        setActiveId(true);
        break;
    }
  }, [location.pathname]);

  return (
      <div style={{overflow:'hidden'}}>
      {
        activeId ? <NavItems/> : ""
      }
      
      <Outlet/> 
       
      </div>
  )
}

export default App
