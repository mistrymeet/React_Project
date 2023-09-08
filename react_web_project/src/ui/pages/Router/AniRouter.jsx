import { AnimatePresence } from 'framer-motion'
import React, { createContext, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import HomeCom from '../Home/HomeCom'
import Women from '../Women/Women'
import Men from '../Men/Men'
import Exclusive from '../Exclusive/Exclusive'
import RegPage from '../RegistraionPage/RegPage'
import ProductCom from '../Product/ProductCom'
import Page404 from '../404/Page404'
import Contact2 from '../Contact/Contact2'
import About from '../About/About'
import ProRoutes from '../ProtectedRoutes/ProRoutes'
import Cart from '../Cart/Cart'
import Login from '../Login/Login'
import Profile from '../Profile/Profile'
import Product from '../../utils/Product.json'

export let ContextTest = createContext()

function AniRouter() {
    let [data, SetData] = useState(Product)
    let [textsearch, SetTextSearch] = useState("")
    let location = useLocation()
    return (
        <>
            <ContextTest.Provider value={{ data, textsearch, SetTextSearch, SetData }}>
                <AnimatePresence>
                    <Routes location={location} key={location.pathname}>
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
                </AnimatePresence>
            </ContextTest.Provider>
        </>
    )
}

export default AniRouter