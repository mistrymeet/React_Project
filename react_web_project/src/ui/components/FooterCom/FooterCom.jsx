import React from 'react'
const { Footer } = Layout;
import { Layout } from 'antd';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FooterCom() {
    return (
        <>
            <Footer
                style={{
                    textAlign: 'center',
                    background: 'black',
                    padding: '30px',
                    color: 'white'
                }}
            >
                <Container>
                    <Row className='gap-10 pb-10 text-white'>
                        <Col className='flex-1 text-left'>
                            <Link to='/' className='text-white no-underline'>
                                <span className='text-3xl uppercase tracking-wider font-semibold'>Inessa</span>
                                <p className='text-xs font-medium tracking-widest uppercase pb-3'>Perfumes</p>
                            </Link>
                            <p className='text-justify font-normal tracking-wide'>Inessa is a fresh and new in perfume industries which is provide best old as well as new launched frech perfumes in disconted rate and also provides a best service as you expect. </p>
                        </Col>
                        <Col className='flex-1 text-left tracking-wide'>
                            <p className='uppercase text-base font-medium pb-3 '>Customer care</p>
                            <p className=' pb-3 font-normal'>Need help? We're always here for you and ready to help.</p>
                            <p className='font-normal m-0 '>
                                Email : <a href="" className='no-underline text-white' >EnnesaInfo@example.com</a>
                            </p>
                            <p className='ffont-normal m-0'>
                                Mobile : <a href="" className='no-underline text-white' >8849522105</a>
                            </p>
                            <p className='font-normal m-0'>
                                Address : <a href="" className='no-underline text-white' >110, laxuria buisness hub, vesu, surat.</a>
                            </p>
                        </Col>
                        <Col className='text-left tracking-wide'
                            style={{ flex: '0.5' }}>
                            <p className='uppercase text-base font-medium pb-3 '>Follow Us</p>
                            <ol className='font-normal p-0 '>
                                <li>
                                    <a href="#" className='no-underline text-white'>Facebook</a>
                                </li>
                                <li>
                                    <a href="#" className='no-underline text-white'>Instagram</a>
                                </li>
                                <li>
                                    <a href="#" className='no-underline text-white'>YouTube</a>
                                </li>
                                <li>
                                    <a href="#" className='no-underline text-white'>Pinterest</a>
                                </li>
                                <li>
                                    <a href="#" className='no-underline text-white'>Twitter</a>
                                </li>
                            </ol>
                        </Col>
                        <Col className='text-left tracking-wide'
                            style={{ flex: '0.5' }}>
                            <p className='uppercase text-base font-medium pb-3 '>useful links</p>
                            <ol className='p-0 font-normal'>
                                <li>
                                    <Link to='/Products'
                                        className='no-underline text-white'>
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Exclusive'
                                        className='no-underline text-white' >
                                        Exclusive
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Women'
                                        className='text-white no-underline'>
                                        Women
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Men'
                                        className='text-white no-underline'>
                                        Men
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/About'
                                        className='text-white no-underline'>
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/Contact'
                                        className='text-white no-underline'>
                                        Contact
                                    </Link>
                                </li>
                            </ol>
                        </Col>
                        <hr />
                        <p className='text-center text-white m-0'>Copyright © 2023 Innesa Perfumes | Powered by Innesa Perfumes</p>
                    </Row>
                </Container>
            </Footer>
        </>
    )
}

export default FooterCom