import React from 'react'
import "./index.scss"
import { motion } from "framer-motion"


export default function Page404() {
    return (

        <motion.div class="wrapper"
            initial={{ opacity: 0, transition: { duration: 0.6 } }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
        >
            <div class="text_group">
                <p class="text_404">404</p>
                <p class="text_lost">The page you are looking for <br />has been lost in space.</p>
            </div>
            <div class="window_group">
                <div class="window_404">
                    <div class="stars"></div>
                </div>
            </div>
        </motion.div>
    )
}
