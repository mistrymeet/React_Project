import React from 'react'
import { AuthContext } from '../Auth/Auth'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import { Button } from 'react-bootstrap'
import './Profile.css'
import FooterCom from '../../components/FooterCom/FooterCom'
import { Input } from 'reactstrap'
import { Content } from 'antd/es/layout/layout'
import { motion } from "framer-motion"

function Profile() {
    let { user, logOut } = AuthContext()

    return (
        <>
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                <HeaderCom />
                <Content>
                    <div className="bg-profile">
                        <div className='container py-5 flex '>
                            <div className="profile bg-cyan-700 flex justify-center items-center py-16 px-3 flex-col gap-2 flex-1">
                                <div className="profile-img">
                                    <img className='pi' />
                                </div>
                                <div className="profile-name">
                                    <h1 className='text-6xl text-white'>{user?.username}</h1>
                                </div>
                                <div className="profile-logout">
                                    <Button variant="danger"
                                        onClick={() => logOut()}>
                                        Logout
                                    </Button>{' '}
                                </div>
                            </div>

                            <div className="profile-info border-black border-1 flex-1 grid place-content-center">
                                <div>
                                    <h1 className='text-center pb-4'>Contact Details</h1>
                                </div>
                                <div className="name flex justify-center items-center py-1">
                                    <span
                                        className='font-semibold'
                                        style={{ flex: '0.5' }}
                                    >Name :</span>
                                    <Input readOnly value={user?.username} style={{ flex: '1' }} className='input' />
                                </div>
                                <div className="name flex justify-center items-center py-1">
                                    <span
                                        className='font-semibold'
                                        style={{ flex: '0.5' }}
                                    >Email :</span>
                                    <Input readOnly value={'meetmistry88@gmail.com'} style={{ flex: '1' }} className='input' />
                                </div>
                                <div className="name flex justify-center items-center py-1">
                                    <span
                                        className='font-semibold'
                                        style={{ flex: '0.5' }}
                                    >Phone No :</span>
                                    <Input readOnly value={'8849522105'} style={{ flex: '1' }} className='input' />
                                </div>
                                <div className="name flex justify-center items-center py-1">
                                    <span
                                        className='font-semibold'
                                        style={{ flex: '0.5' }}
                                    >Address :</span>
                                    <Input readOnly value={'joggers park'} style={{ flex: '1' }} className='input' />
                                </div>
                            </div>


                        </div>
                    </div>
                </Content>
                <FooterCom />
            </motion.div>
        </>
    )
}

export default Profile