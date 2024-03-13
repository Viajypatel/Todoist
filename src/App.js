import React from 'react'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Header from './Component/Header'
import Notfound from './Component/Notfound'
import Edituser from './Component/Pages/Edituser'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Adduser from './Component/Pages/Adduser'
import Viewuser from './Component/Pages/Viewuser'
const App = () => {
  return (
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/Home/Adduser' element={<Adduser />} />
      <Route path="/user/edit/:id" element={<Edituser/>} />
      <Route path="/user/view/:id" element={<Viewuser/>} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
