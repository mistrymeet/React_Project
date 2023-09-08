import React, { createContext, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const userContext = createContext(null)

function Auth({ children }) {
    let [user, SetUser] = useState({})
    let navigate = useNavigate()

    function login(userObj) {
        localStorage.setItem('userLogin', JSON.stringify(userObj))
        SetUser(userObj)
        navigate('/')
    }

    function logout() {
        localStorage.removeItem('userLogin')
        SetUser()
        navigate('/login')
    }

    useEffect(() => {
        let data = localStorage.getItem('userLogin')
        SetUser(JSON.parse(data))
    }, [])

    return (
        <>
            <userContext.Provider value={{ login, logout, user }}>
                {children}
            </userContext.Provider>
        </>
    )
}

export const contextUser = () => {
    return useContext(userContext)
}

export default Auth