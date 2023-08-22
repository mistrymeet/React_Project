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
import Login from './ui/pages/ReactHookRegPage/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './ui/pages/Contact/Contact'
import Contact2 from './ui/pages/Contact/Contact2'
import Page404 from './ui/pages/404/Page404'
import About from './ui/pages/About/About'
import Home from './Route/Home'
import Service from './Route/Service'
import AAbout from './Route/About'

export let ContextTest = createContext()

function App() {
  let [data, SetData] = useState(Product)
  let [textsearch, SetTextSearch] = useState("")

  return (
    <>
      <BrowserRouter>
        <ContextTest.Provider value={{ data, textsearch, SetTextSearch, SetData }}>
          <Routes>
            {/* <Route exact path='/' element={<HomeCom />} />
            <Route exact path='/Women' element={<Women textsearch={textsearch} />} />
            <Route exact path='/Men' element={<Men textsearch={textsearch} />} />
            <Route exact path='/Exclusive' element={<Exclusive textsearch={textsearch} />} />
            <Route exact path='/SignUp' element={<RegPage />} />
            <Route exact path='/Products' element={<ProductCom />} />
            <Route exact path='*' element={<Page404 />} />
            <Route path='/Contact' element={<Contact />} /> */}
            <Route path='/' element={<Home />} />
            <Route path='/Service' element={<Service />} />
            <Route path='/AAbout' element={<AAbout />} />
          </Routes>
        </ContextTest.Provider>
      </BrowserRouter>
    </>
  )
}

export default App