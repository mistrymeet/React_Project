import React, { useEffect } from 'react'
import { AuthContext } from '../Auth/Auth'
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"

function ProRoutes({ components }) {
    let auth = AuthContext();
    let navigate = useNavigate()

    useEffect(() => {
        if (!auth.user) {
            navigate('/login')
        }
    })
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                {components}
            </motion.div>
        </>
    )
}

export default ProRoutes