import React, { useState } from 'react'
import { Button, Container, Input } from 'reactstrap'
import { contextUser } from '../Auth/Auth'
import HeaderCom from '../../Elements/HeaderCom/HeaderCom'
import { Content } from 'antd/es/layout/layout'

function Login() {
    let [userdata, SetUserData] = useState({
        name: '',
        password: ''
    })
    let auth = contextUser()

    function loginData() {
        auth.login(userdata)
    }
    return (
        <>
            <HeaderCom />
            <Content>
                <Container>
                    <h1>Sign In</h1>
                    <div className='w-56 '>
                        <Input
                            bsSize="sm"
                            required
                            onChange={(e) => SetUserData({ ...userdata, name: e?.target?.value })}
                        />
                    </div>

                    <h1>Password</h1>
                    <div className='w-56 '>
                        <Input
                            bsSize="sm"
                            required
                            onChange={(e) => SetUserData({ ...userdata, password: e?.target?.value })}
                        />
                    </div>

                    <Button
                        color="success"
                        outline
                        className='mt-6'
                        onClick={() => loginData()}
                    >
                        LogIn
                    </Button>
                </Container>
            </Content>
        </>
    )
}

export default Login