import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
<Router>
    <div className='grid-container center'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
       

       <div>
<Routes>
{/* <Route path="/" element={<Home />} />
<Route path="/logout" element={<Login/>} /> */}
</Routes>

       </div>
    </div>
    </Router>
  )

  
}

export default App
