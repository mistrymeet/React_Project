import { Col, Row } from 'antd'
import React from 'react'
import { Container } from 'react-bootstrap'
import '../DiscoverCom/Discover.css'
import { Link } from 'react-router-dom'

function DiscoverCom() {
    return (
        <>
            <div className='discover mb-5'>
                <Container>
                    <Row className='gap-3 sm:flex-col'>
                        <Col className='grid'
                            style={{ flex: '2' }}
                        >
                            <div className='d-flex justify-center items-center gap-3'>
                                <img className='dimg1' />
                                <img className='dimg2' />
                            </div>
                            <div className='grid-flow-col text-center text'>
                                <hr className='w-80 m-auto p-0 my-4' />
                                <h1 className='w-50 m-auto'>the new fragrance that will surprise you every day</h1>
                                <Link to='/Products'>
                                    <button class="button uppercase font-semibold my-5">
                                        Discover
                                    </button>
                                </Link>
                            </div>

                        </Col>
                        <Col className='flex-1'>
                            <div>
                                <img className='dimg3' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DiscoverCom