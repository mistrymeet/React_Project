import React from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import { Content } from 'antd/es/layout/layout'
import FooterCom from '../../components/FooterCom/FooterCom'
import '../About/About.css'
import { Container } from 'react-bootstrap'

function About() {
    return (
        <>
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

            </Content>
            <FooterCom />
        </>
    )
}

export default About