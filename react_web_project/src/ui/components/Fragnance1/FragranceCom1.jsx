import React from 'react'
import '../Fragnance1/Fragnance1.css'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

function FragranceCom1() {
    return (
        <>
            <div className="fragrance">
                <Container className='p-0'>
                    <Row className='justify-center items-center frag 
                    sm:flex-col'
                    >
                        <Col className='flex-1 flex justify-end rel 
                        sm:flex-col'
                        >
                            <div className='img1'>
                                <img />
                            </div>
                            <div className="img2">
                                <img />
                            </div>
                        </Col>
                        <Col className='fontt flex-1
                        sm:text-center'
                        >
                            <h5 className='font-semibold tracking-wider'>Introduce new perfumes</h5>
                            <h1 className='text-6xl'>The</h1>
                            <h1 className='text-6xl'>new</h1>
                            <h1 className='text-6xl'>fragnance</h1>
                            <div className='rightpara ps-20 text-lg font-extrabold pb-3 text-justify sm:ps-0'
                            >
                                <p >A woody floral-sparkling fragrance. A surge of energy. An elegant composition with enduring effervescence grounded by a deep, rich base.</p>
                            </div>
                            <div className='flex justify-end 
                            sm:justify-center'
                            >
                                <Link to='/Products'>
                                    <button class="button uppercase font-bold text-base">
                                        Shop now
                                    </button>
                                </Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default FragranceCom1