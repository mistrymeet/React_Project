import React from 'react'
import HeaderCom from '../../Elements/HeaderCom/HeaderCom'
import { Content } from 'antd/es/layout/layout'
import { Button, Container } from 'reactstrap'
import { contextUser } from '../Auth/Auth'


function Profile() {
    let { user, logout } = contextUser()
    return (
        <>
            <HeaderCom />
            <Content>
                <Container>
                    <h1>{user.name}</h1>
                    <div>
                        <Button
                            color="danger"
                            outline
                            className='mt-6'
                            onClick={() => logout()}
                        >
                            LogOut
                        </Button>
                    </div>
                </Container>
            </Content>
        </>
    )
}

export default Profile