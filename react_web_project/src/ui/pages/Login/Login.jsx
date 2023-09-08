import React, { useState } from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom'
import { Content } from 'antd/es/layout/layout'
import './Login.css'
import { AuthContext } from '../Auth/Auth'
import { Input } from 'reactstrap'
import { motion } from "framer-motion"

function Login() {
    let [authuser, SetAuthUser] = useState({
        username: '',
        password: ''
    })
    let auth = AuthContext()

    function addData() {
        auth.logIn(authuser)
    }

    return (
        <>
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                <HeaderCom />
                <Content className='login-main py-20'>
                    <div style={{
                        border: '1px solid black',
                        margin: '0px 400px',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <div className='login-img' style={{ flex: '1' }}></div>
                        <div style={{ flex: '1' }} className='grid place-content-center'>
                            <p className='uppercase text-center  text-base font-semibold'>User Login</p>
                            <div className='flex justify-center'>
                                <Input
                                    type="text"
                                    className='border-black border-2 text py-1 px-2' placeholder='enter name here '
                                    onChange={(e) => SetAuthUser({ ...authuser, username: e?.target?.value })} />
                            </div>

                            <p className='uppercase text-center  text-base font-semibold'>Password</p>
                            <div className='flex justify-center'>
                                <Input
                                    type="password"
                                    className='border-black border-2 text py-1 px-2' placeholder='enter password '
                                    onChange={(e) => SetAuthUser({ ...authuser, password: e?.target?.value })} />
                            </div>

                            <div className='mt-2 text-center'>
                                <button className='button'
                                    onClick={() => addData()}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </Content>
                <FooterCom />
            </motion.div>
        </>
    )
}

export default Login