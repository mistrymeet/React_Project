import React from 'react'
import '../Fragnance2/Fragnance2.css'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

function FragranceCom2() {
    return (
        <>
            <div className="fragrance2 
            sm:mb-0"
            >
                <Container className='p-0'>
                    <Row className='frag justify-center items-center  
                    sm:flex-col  '
                    >
                        <Col className='flex-1 text-left font 
                        sm:text-center'
                        >
                            <h5 className='font-semibold tracking-wider lowercase'>EAU DE PARFUM</h5>
                            <h1 className='text-6xl'>instinctive</h1>
                            <h1 className='text-6xl'>and</h1>
                            <h1 className='text-6xl'>electric</h1>
                            <div className='rightpara pe-20 text-lg font-extrabold pb-3 text-justify sm:pe-0'
                            >
                                <p > true chance is that which you create for yourself. A state of mind, a way of being. CHANCE perfume sweeps you up into a whirlwind of fantasy with its floral notes, which are heightened by pink pepper. Unpredictable and in constant motion.</p>
                            </div>
                            <div className='flex justify-start
                            sm:justify-center'
                            >
                                <Link to='/Products'>
                                    <button class="button uppercase font-bold text-base ">
                                        Discover
                                    </button>
                                </Link>
                            </div>
                        </Col>
                        <Col className='flex-1 flex justify-start rel 
                        sm:flex-col pb-32'
                        >
                            <div className='img1'>
                                <img />
                            </div>
                            <div className="img2">
                                <img />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FragranceCom2