import React from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import { Content } from 'antd/es/layout/layout'
import FooterCom from '../../components/FooterCom/FooterCom'
import '../About/About.css'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'antd'
import { motion } from "framer-motion"

function About() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                <HeaderCom />
                <Content>
                    <div className="about-hero">
                        <div className="about-page">
                            <Container>
                                <div className='about-words'>
                                    <p className='mb-0 text-xl font-semibold'>A few words</p>
                                    <h1 className='text-8xl font-light'>About us</h1>
                                </div>
                            </Container>
                        </div>
                    </div>

                    <Container>
                        <div className="about-intro py-24">
                            <p
                                className='text-lg font-semibold'>
                                who we are
                            </p>
                            <p
                                className='text-6xl font text-justify aboutcont'>we are the Gujarat's largest specialist fragrance retailer with 20 stores across the Gujarat.
                            </p>
                            <p
                                className='text-lg font-semibold text-justify'>
                                we are the Gujarat's largest specialist fragrance retailer and we are trying to grow our buisness across the india's other state as well as worldwide. Out vision is sprade our stroe across the worldwide that's why we regurely improve our product as well as our marketing stretergy.
                            </p>
                        </div>

                        <div className="about-img "></div>

                        <div className="about-intro py-24">
                            <p
                                className='text-lg font-semibold'>
                                Old friends
                            </p>
                            <p
                                className='text-5xl font text-justify aboutcont'>here with you for over 15 years
                            </p>
                            <p
                                className='text-lg font-semibold text-justify'>
                                We also have a fragrance over 15 to 20 years old so you don't need to worry for give up your favourite fragrance because we care for you. Not only care but we also love to serve your favourite fragrance at discouted price. We give a special sale to our old customers so dont't forget to join our community.
                            </p>
                        </div>

                    </Container>

                    <div className="about-attachment mb-24"></div>

                    <Container>
                        <Row className='mb-24 justify-center items-center gap-5 p-10 mission'>
                            <Col className='flex-1  '>
                                <p
                                    className='text-lg font-semibold text-center'>
                                    we are visionaries
                                </p>
                                <p
                                    className='text-7xl font aboutcont text-center'>Mission
                                </p>
                                <p className='text-justify'>
                                    Our Mission is very clear. We are now Gujarat's best sellers but we want a india's best sellers not only india but also in worldwide that's why we continue improve our marketikg stretergy as well as Product. it's very challanging to give you latest perfumes that's why out technical team always in touch with chanel brand and we always ready to serve you as quickly as possible.
                                </p>
                            </Col>
                            <Col className='flex-1'>
                                <div className='about-mission'></div>
                            </Col>
                        </Row>
                    </Container>




                </Content>
                <FooterCom />
            </motion.div>
        </>
    )
}

export default About