import { Col, Row } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import { Content } from 'antd/es/layout/layout'
import FooterCom from '../../components/FooterCom/FooterCom'
import { ArrowLeft, ShoppingCart } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from "framer-motion"

function Cart() {
    let navigate = useNavigate()
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                <HeaderCom />
                <Content>
                    <div className="cart my-4">
                        <Container>
                            <Row className='flex justify-between items-end'>
                                <Col className='flex items-center gap-2'>
                                    <ArrowLeft onClick={() => navigate(-1)} />
                                    <span>Continue Shopping</span>
                                </Col>
                                <Col>
                                    <ShoppingCart />
                                </Col>
                            </Row>

                            <hr className='mb-10' />

                            <div className="cart-head">
                                <h1 className='text-2xl font-normal text-left uppercase drop-shadow-lg'>
                                    Shopping Cart
                                </h1>
                                <p>
                                    you have a <span>0</span> items in shopping cart
                                </p>
                            </div>

                        </Container>
                    </div>
                </Content>
                <FooterCom />
            </motion.div>
        </>
    )
}

export default Cart