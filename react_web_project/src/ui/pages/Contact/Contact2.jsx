import React, { useState } from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom'
import { Container, FormGroup } from 'react-bootstrap'
import '../Contact/Contact2.css'
import { Col, Layout, Row } from 'antd'
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoPinterest, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { Label } from 'reactstrap'
import Iframe from 'react-iframe'
import Form from 'react-bootstrap/Form';
import { motion } from "framer-motion"

let emailData = [{
    email: 'meetmistry88@gmail.com'
}]

function Contact2() {
    const { Content } = Layout;
    return (
        <>
            <motion.div
                initial={{ opacity: 0, transition: { duration: 0.6 } }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
            >
                <HeaderCom />
                <Content className='contact '>
                    <Container className='py-5'>
                        <div className="contact-head text-center py-5">
                            <p className='text-lg drop-shadow-xl font-semibold mb-0'>
                                get in touch
                            </p>
                            <h1 className='text-8xl font-light'>
                                Contact
                            </h1>
                        </div>
                        <hr className='pb-10 text-black m-auto' style={{ width: '60%' }} />
                        <Row className='px-64 pb-10 contact-flex'>
                            <Col style={{ flex: 1 }}>
                                <p className='uppercase text-xl font-medium contact-flex1'>
                                    Contact Details
                                </p>
                                <p className='text-base font-medium mb-0'>
                                    P: +91 8849522105
                                </p>
                                <p className='text-base font-medium mb-0'>
                                    E: ennesaInfo@example.com
                                </p>
                                <p className='text-base font-medium mb-0 pb-10'>
                                    A: 110, laxuria buisness hub, vesu, surat.
                                </p>
                                <p className='uppercase text-xl font-medium contact-flex1'>
                                    Follow Us
                                </p>
                                <div className="symbol">
                                    <ol className='flex justify-start gap-3 p-0'>
                                        <li><a className='no-underline text-black' href="">
                                            <BiLogoFacebookCircle className='text-3xl p-1'
                                                style={{
                                                    border: '1px solid gray',
                                                    borderRadius: '50%'
                                                }} />
                                        </a></li>
                                        <li><a className='no-underline text-black' href="">
                                            <BiLogoInstagram className='text-3xl p-1'
                                                style={{
                                                    border: '1px solid gray',
                                                    borderRadius: '50%'
                                                }} />
                                        </a></li>
                                        <li><a className='no-underline text-black' href="">
                                            <BiLogoYoutube className='text-3xl p-1'
                                                style={{
                                                    border: '1px solid gray',
                                                    borderRadius: '50%'
                                                }} />
                                        </a></li>
                                        <li><a className='no-underline text-black' href="">
                                            <BiLogoPinterest className='text-3xl p-1'
                                                style={{
                                                    border: '1px solid gray',
                                                    borderRadius: '50%'
                                                }} />
                                        </a></li>
                                        <li><a className='no-underline text-black' href="">
                                            <BiLogoTwitter className='text-3xl p-1'
                                                style={{
                                                    border: '1px solid gray',
                                                    borderRadius: '50%'
                                                }} />
                                        </a></li>
                                    </ol>
                                </div>
                            </Col>
                            <Col style={{ flex: 1.1 }}>
                                <Form action="https://formspree.io/f/xwkdbele"
                                    method="POST">
                                    <Row className='justify-between gap-3 name'>
                                        <Col className='flex-1'>
                                            <Form.Label
                                                className='mb-0 font-bold'>
                                                First Name
                                            </Form.Label>
                                            <Form.Control
                                                type='text'
                                                placeholder="First name"
                                                className='name'
                                                name='firstName'
                                                onChange={(e) => setData(e)}
                                                required
                                                autoComplete='off'
                                            />
                                        </Col>
                                        <Col className='flex-1'>
                                            <Form.Label
                                                className='mb-0 font-bold'>
                                                Last Name
                                            </Form.Label>
                                            <Form.Control
                                                type='text'
                                                placeholder="Last name"
                                                className='name'
                                                name='lastName'
                                                onChange={(e) => setData(e)}
                                                required
                                                autoComplete='off'
                                            />
                                        </Col>
                                    </Row>

                                    <FormGroup>
                                        <Form.Label
                                            className='mb-0 mt-3 font-bold'>
                                            Email
                                        </Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Enter email"
                                            name='email'
                                            onChange={(e) => setData(e)}
                                            required
                                            autoComplete='off'
                                        />
                                    </FormGroup>

                                    <FormGroup>
                                        <Form.Label
                                            className='mb-0 mt-3 font-bold'>
                                            Message
                                        </Form.Label>

                                        <textarea
                                            className="form-control"
                                            rows={4}
                                            placeholder='enter message'
                                            required
                                            autoComplete='off'
                                            name='message' />

                                    </FormGroup>

                                    <button
                                        type='submit'
                                        className='tracking-widest font-semibold mt-4 uppercase button bg-sky-500 hover:bg-sky-700'
                                        onClick={() => submitData()}>
                                        Send
                                    </button>
                                </Form>
                            </Col>
                        </Row>

                        <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1357297772843!2d72.75709027505152!3d21.14699608370747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d80f5d96493%3A0x5f79790a213bd724!2sLuxuria%20Business%20Hub!5e0!3m2!1sen!2sus!4v1692473728300!5m2!1sen!2sus" height="450" width='100%' style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                            className='iframe px-64'></Iframe>
                    </Container>
                </Content>
                <FooterCom />
            </motion.div >
        </>
    )
}

export default Contact2