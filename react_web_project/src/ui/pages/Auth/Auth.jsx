import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export let UserAuth = createContext(null)

function Auth({ children }) {
    let [user, SetUser] = useState({})
    let navigate = useNavigate()

    function logIn(userInfo) {
        localStorage.setItem('userLogin', JSON.stringify(userInfo))
        SetUser(userInfo)
        navigate('/')
    }

    function logOut() {
        localStorage.removeItem('userLogin')
        SetUser({})
        navigate('/login')
    }

    useEffect(() => {
        let data = localStorage.getItem('userLogin')
        SetUser(JSON.parse(data))
    }, [])
    return (
        <>
            <UserAuth.Provider value={{ logIn, logOut, user }}>
                {children}
            </UserAuth.Provider>
        </>
    )
}

export const AuthContext = () => {
    return useContext(UserAuth)
}

export default Auth