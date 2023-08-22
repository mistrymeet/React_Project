import React, { useState } from 'react'
import HeaderCom from '../../components/HeaderCom/HeaderCom'
import FooterCom from '../../components/FooterCom/FooterCom.jsx'
import { Col, Form, Row } from 'reactstrap'
import '../../pages/RegistraionPage/RegPage.css'
import { FormGroup, Table } from 'react-bootstrap'

function RegPage() {
    let [text, SetText] = useState({
        first: '',
        last: '',
        mobile: '',
        email: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        password: '',
        cnfPassword: ''
    })
    let [textarr, SetTextArr] = useState([])

    function setData(e) {
        SetText({ ...text, [e.target.name]: e.target.value })
    }

    function getData() {
        SetTextArr([...textarr, text])
        SetText({
            first: '',
            last: '',
            mobile: '',
            email: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            password: '',
            cnfPassword: ''
        })
    }
    return (
        <>
            <HeaderCom />
            <div className='main'>
                <div className="padd pb-5">

                    <div className="head text-center py-3 text-white">
                        <h1>Create Account</h1>
                    </div>
                    <Form>
                        <div className="inp m-auto w-1/2 border-4 border-black">
                            <Row className='m-3 gap-4'>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='first'
                                            value={text.first}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>First Name</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='last'
                                            value={text.last}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>Last Name</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='m-3 gap-4'>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='mobile'
                                            value={text.mobile}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>Mobile No</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='email'
                                            value={text.email}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>Email (optional)</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='m-3 gap-4'>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='address'
                                            value={text.address}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>Address</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='m-3 gap-4'>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='city'
                                            value={text.city}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>City</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='state'
                                            value={text.state}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>State</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="text"
                                            required="required"
                                            name='zip'
                                            value={text.zip}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>Zip</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='m-3 gap-4'>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="password"
                                            required="required"
                                            name='password'
                                            value={text.password}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>Password</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                                <Col className="inputbox">
                                    <FormGroup>
                                        <input
                                            className='input'
                                            type="password"
                                            required="required"
                                            name='cnfPassword'
                                            value={text.cnfPassword}
                                            onChange={(e) => setData(e)}
                                        />
                                        <span>Confirm Password</span>
                                        <i></i>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='text-center m-3 items-center'>
                                <Col>
                                    <FormGroup>
                                        <button
                                            className='btnnn'
                                            onClick={() => getData()}
                                        >Continue</button>
                                    </FormGroup>
                                </Col>
                            </Row>

                            <Row className='m-3 gap-4'>
                                <Col className="inputbox px-2 text-black text-center font-medium">
                                    To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.

                                </Col>
                            </Row>
                        </div>
                    </Form>
                    {
                        textarr.length > 0 ? <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Mobile No</th>
                                    <th>Email</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>State</th>
                                    <th>Zip Code</th>
                                    <th>Password</th>
                                    <th>Confirm Password</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    textarr.map((e, i) => {
                                        return (
                                            <tr key={i}>
                                                <td>{i + 1}</td>
                                                <td>{e.first}</td>
                                                <td>{e.last}</td>
                                                <td>{e.mobile}</td>
                                                <td>{e.address}</td>
                                                <td>{e.email}</td>
                                                <td>{e.city}</td>
                                                <td>{e.state}</td>
                                                <td>{e.zip}</td>
                                                <td>{e.password}</td>
                                                <td>{e.cnfPassword}</td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </Table> : null
                    }
                </div>
            </div>
            <FooterCom />
        </>
    )
}

export default RegPage