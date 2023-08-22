import React from 'react'
import '../CategoryCom/Category.css'
import { Container } from 'react-bootstrap'
import { Col, Row } from 'antd'
import { Link } from 'react-router-dom'

function CategoryCom() {
    return (
        <>
            <div className="category mb-5">
                <Container>
                    <div className="category-head text-center pb-5">
                        <h6 className='text-xl font-bold drop-shadow-sm'>New perfumes</h6>
                        <h1 className='text-6xl drop-shadow-sm'>Shop by category</h1>
                    </div>
                    <hr style={{ width: "5%", margin: 'auto' }} className='pb-5' />
                    <div>
                        <Row className='gap-5 flexible'>
                            <Col className='flex-1'>
                                <div className='category-img1'></div>
                                <Link to='/Women' className='text-black'>
                                    <div className='category-absolute'>
                                        <h5 className='text-base text-center mb-0'>Women</h5>
                                        <h6 className='text-center text-xs'>32 products</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col className='flex-1'>
                                <div className='category-img2'></div>
                                <Link to='/Exclusive' className='text-black'>
                                    <div className='category-absolute'>
                                        <h5 className='text-base text-center mb-0'>Exclusive</h5>
                                        <h6 className='text-center  text-xs'>15 Products</h6>
                                    </div>
                                </Link>
                            </Col>
                            <Col className='flex-1'>
                                <div className='category-img3'></div>
                                <Link to='/Men' className='text-black'>
                                    <div className='category-absolute'>
                                        <h5 className='text-base text-center mb-0'>Men</h5>
                                        <h6 className='text-center  text-xs'>16 products</h6>
                                    </div>
                                </Link>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        </>
    )
}

export default CategoryCom