import React, { createContext, useContext, useState } from 'react'
import HomeCom from './UI/Pages/HomeCom/HomeCom'
import Product from './UI/Pages/Product/Product'
import ProductData from './UI/utils/ProductData.json'
import Men from './UI/Pages/Men/Men'
import Women from './UI/Pages/Women/Women'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './UI/Pages/Auth/Auth'
import Login from './UI/Pages/Login/Login'
import Profile from './UI/Pages/Profile/Profile'

export const CommenContext = createContext()

function App() {
  let [prodata, SetProData] = useState(ProductData)
  let [textsearch, SetTextSearch] = useState('')
  return (
    <>
      <BrowserRouter>
        <Auth>
          <CommenContext.Provider value={{ prodata, SetProData, textsearch, SetTextSearch }}>
            <Routes>
              <Route path='/' element={<HomeCom />} />
              <Route path='/product' element={<Product />} />
              <Route path='/men' element={<Men />} />
              <Route path='/women' element={<Women />} />
              <Route path='/login' element={<Login />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </CommenContext.Provider>
        </Auth>
      </BrowserRouter>
    </>
  )
}

export const ProductContext = () => {
  return useContext(CommenContext)
}

export default App