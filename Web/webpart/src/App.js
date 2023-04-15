import React from 'react'
import Mainpage from './Component/Mainpage.jsx'
import Header from './Component/Header.jsx'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Loginform from './Component/Loginform.jsx'
import Aboutus from './Component/Aboutus.jsx'
function App() {
  console.log(process.env)
  return (
    <div className='App'>
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route path='/' element={<Mainpage/>}/>
    <Route path='/login' element={<Loginform/>}/>
    <Route path='/About' element={<Aboutus/>}/>
    
    </Routes>
   
    </BrowserRouter>
 
    
     </div>
  );
}

export default App;
