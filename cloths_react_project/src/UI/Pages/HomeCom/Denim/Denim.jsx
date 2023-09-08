import React from 'react'
import './Denim.css'
import { BsArrowRight } from 'react-icons/bs'
import { easeIn, motion } from "framer-motion"

function Denim() {
    return (
        <>
            <motion.div className='denim shadow-xl'
                initial={{ y: -75, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ease: easeIn, duration: 1 }}>
                <div className='denim_collection flex justify-center'>
                    <div className='flex-1 demo'></div>
                    <div className='denim_info flex-1 grid h-screen place-content-center p-14 m-0'>
                        <p className='text-lg font-normal text-zinc-400 para1'>
                            DENIM COLLECTION
                        </p>
                        <h1 className='text-8xl font-extrabold drop-shadow-md main'>
                            The Casual Selection.
                        </h1>
                        <p className='text-justify text-lg text-zinc-400 para2'>
                            A denim jacket, also called a jean jacket or trucker jacket, is a jacket made from denim. It has been a popular type of casual apparel with both men and women and has been described as an iconic element of American fashion.
                        </p>
                        <div className='text-lg flex gap-2 items-center denim-btn font-semibold drop-shadow-md'>
                            <button className=''>
                                Shop Collection
                            </button>
                            <div className='d-btn'>
                                <BsArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default Denim