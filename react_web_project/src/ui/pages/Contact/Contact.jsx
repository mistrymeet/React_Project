import React from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom'
import { Container, FormGroup } from 'react-bootstrap'
import '../Contact/Contact.css'
import { Col, Layout, Row, message } from 'antd'
import { BiLogoFacebookCircle, BiLogoInstagram, BiLogoPinterest, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import { useForm } from "react-hook-form";
import { Label } from 'reactstrap'
import Iframe from 'react-iframe'

function Contact() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (register) => {
        if (register) {
            alert('registration successfully done!!!')
        }
    }
    const { Content } = Layout;
    return (
        <>
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
                        <Col style={{ flex: 1 }} className='col1'>
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
                                        <BiLogoFacebookCircle
                                            className='text-3xl p-1'
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Label className=' popince text-base font-semibold block pt-3 mb-0'>
                                    Name
                                </Label>
                                <Row className='justify-between contact-name-flex'>
                                    <Col >
                                        <input {...register("firstName", { required: true })}
                                            className='p-3 w-48 outline-none border-2 border-black'
                                            placeholder='First Name' />
                                        {errors.firstName && <span className='block'>This field is required</span>}
                                        <Label className=' popince text-sm font-medium block pt-1 mb-0 '>
                                            First
                                        </Label>
                                    </Col>
                                    <Col>
                                        <input {...register("lastName", { required: true })}
                                            className='p-3 w-48 border-2 border-black'
                                            placeholder='Last Name' />
                                        {errors.lastName && <span className='block'>This field is required</span>}
                                        <Label className='popince text-sm font-medium block pt-1 mb-0'>
                                            Last
                                        </Label>
                                    </Col>
                                </Row>

                                <FormGroup>
                                    <Label className='popince text-base font-semibold block pt-3 mb-0'>
                                        Email
                                    </Label>
                                    <input {...register("email", { required: true })}
                                        className='p-3 block w-100 border-2 border-black'
                                        placeholder='Enter Email' type='email' />
                                    {errors.lastName && <span>This field is required</span>}
                                </FormGroup>

                                <FormGroup>
                                    <Label className='popince text-base font-semibold block pt-3 mb-0'>
                                        Message
                                    </Label>
                                    <textarea {...register("message", { required: true })}
                                        className='p-3 block w-100 h-32 border-2 border-black '
                                        type='text'
                                        rows={6}
                                        cols={5} />
                                    {errors.message && <span>This field is required</span>}
                                </FormGroup>

                                <button type='submit' className='mt-3 button bg-sky-500 hover:bg-sky-700 tracking-wider font-semibold'>SEND</button>
                            </form>
                        </Col>
                    </Row>

                    <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.1357297772843!2d72.75709027505152!3d21.14699608370747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04d80f5d96493%3A0x5f79790a213bd724!2sLuxuria%20Business%20Hub!5e0!3m2!1sen!2sus!4v1692473728300!5m2!1sen!2sus" height="450" width='100%' style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                        className='px-64 iframe'></Iframe>
                </Container>
            </Content>
            <FooterCom />
        </>
    )
}

export default Contact