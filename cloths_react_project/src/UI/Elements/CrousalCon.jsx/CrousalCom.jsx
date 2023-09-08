import React from 'react'
import './Crousal.css'
import { Button, Container } from 'reactstrap'
import { AnimatePresence, motion } from "framer-motion"


function CrousalCom() {
    return (
        <>
            <div className="crousal">
                <Container>
                    <AnimatePresence mode='wait'>
                        <motion.p className='pt-52 m-0 pb-2 uppercase text-xs font-medium text-white drop-shadow-xl'
                            initial={{ y: '-400px', opacity: 0 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            transition={{ duration: 1, type: 'tweens', ease: 'easeIn' }}
                            exit={{ y: 400, opacity: 0 }}>
                            women
                        </motion.p>
                        <motion.p className='text-6xl font-semibold  drop-shadow-xl m-0'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, originX: 0 }}
                            transition={{ duration: 1, ease: 'easeIn', type: 'tween' }}>
                            Slick. Modern.
                        </motion.p>
                        <motion.p className='text-6xl font-semibold text-white drop-shadow-xl'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, originX: 0 }}
                            transition={{ duration: 1, ease: 'easeIn', type: 'tween', delay: 0.4 }}>
                            Awesome.
                        </motion.p>
                        <div className="">
                            <motion.button
                                color="dark"
                                className='mt-3 drop-shadow-xl bg-black text-white p-2'
                                onClick={() => loginData()}
                                initial={{ y: '300px', opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                whileHover={{ scale: [1, 1.2, 1.2, 1], textShadow: '0px 0p 8px rgb(255,255,255)', boxShadow: '0px 0p 8px rgb(255,255,255)', }}
                                transition={{ duration: 1, type: 'tween' }}
                            >
                                Shop Collection
                            </motion.button>
                        </div>
                    </AnimatePresence>
                </Container>
            </div>
        </>
    )
}

export default CrousalCom