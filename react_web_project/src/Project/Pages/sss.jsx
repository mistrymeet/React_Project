import React, { createContext, useState } from 'react'
// import NavBar from './Project/Components/NavBar'
// import HomePage from './Project/Components/HomePage'
import HomeCom from './ui/pages/Home/HomeCom'
import Women from './ui/pages/Women/Women'
import Men from './ui/pages/Men/Men'
import Exclusive from './ui/pages/Exclusive/Exclusive'
import RegPage from './ui/pages/RegistraionPage/RegPage'
import Product from './ui/utils/Product.json'
import ProductCom from './ui/pages/Product/ProductCom'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
// import Contact from './ui/pages/Contact/Contact'
import Contact2 from './ui/pages/Contact/Contact2'
import Page404 from './ui/pages/404/Page404'
import About from './ui/pages/About/About'
import Cart from './ui/pages/Cart/Cart'
import Auth from './ui/pages/Auth/Auth'
import Login from './ui/pages/Login/Login'
import Profile from './ui/pages/Profile/Profile'
import ProRoutes from './ui/pages/ProtectedRoutes/ProRoutes'

export let ContextTest = createContext()

function App() {
  let [data, SetData] = useState(Product)
  let [textsearch, SetTextSearch] = useState("")

  return (
    <>
      <BrowserRouter>
        <ContextTest.Provider value={{ data, textsearch, SetTextSearch, SetData }}>
          <Auth>
            <Routes>
              <Route exact path='/' element={<HomeCom />} />
              <Route exact path='/women' element={<Women textsearch={textsearch} />} />
              <Route exact path='/men' element={<Men textsearch={textsearch} />} />
              <Route exact path='/exclusive' element={<Exclusive textsearch={textsearch} />} />
              <Route exact path='/signUp' element={<RegPage />} />
              <Route exact path='/products' element={<ProductCom />} />
              <Route exact path='*' element={<Page404 />} />
              <Route exact path='/contact' element={<Contact2 />} />
              <Route exact path='/about' element={<About />} />
              <Route exact path='/cart' element={<ProRoutes components={<Cart />} />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </Auth>
        </ContextTest.Provider>
      </BrowserRouter>
    </>
  )
}

export default App