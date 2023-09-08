import React, { useState } from 'react';
import './Header.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    Input,
    InputGroup,
    InputGroupText,
} from 'reactstrap';
import { FiSearch } from 'react-icons/fi'
import { ImCart } from "react-icons/im";
import { RiShieldUserFill } from 'react-icons/ri'
import { ProductContext } from '../../../App';
import { NavLink } from 'react-router-dom';
import { contextUser } from '../../Pages/Auth/Auth';

function HeaderCom(args) {
    let context = ProductContext()
    const [isOpen, setIsOpen] = useState(false);
    let auth = contextUser()
    console.log("🚀 ~ file: HeaderCom.jsx:26 ~ HeaderCom ~ auth:", auth)

    const toggle = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="header">
                <Container className='p-0'>
                    <Navbar {...args} expand={'lg'} className='header-flex'>
                        <NavbarBrand
                            className='font-semibold uppercase flex items-center'
                            style={{ flex: '0.5' }}
                        >
                            <NavLink to={'/'} className={'no-underline font-semibold uppercase flex items-center'}>
                                <span className='text-3xl font-bold text-red-500'>C</span>
                                <span className='text-black'>ausals</span>
                            </NavLink>
                        </NavbarBrand>
                        <NavbarToggler onClick={toggle} />
                        <Collapse isOpen={isOpen} navbar>
                            <Nav
                                className="me-auto justify-start text-sm uppercase font-medium items-center flex no-underline gap-3"
                                navbar
                                style={{ flex: '2' }}>
                                <NavItem>
                                    <NavLink to={'/product'}>Collection</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={'/men'}>Men</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={'/women'}>Women</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={'/about'}>About</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to={'/contact'}>Contact</NavLink>
                                </NavItem>
                            </Nav>
                            <Nav
                                className="me-auto flex justify-center gap-3 items-center uppercase font-semibold"
                                navbar
                                style={{ flex: '1.5' }}>
                                <div className='w-60'>
                                    <InputGroup style={{ flex: '0.8' }}
                                        className=''>
                                        <Input
                                            placeholder="Search Here"
                                            onChange={(e) => context.SetTextSearch(e?.target?.value)} />
                                        <InputGroupText className='bg-black text-white'>
                                            <FiSearch />
                                        </InputGroupText>
                                    </InputGroup>
                                </div>
                                <NavItem>
                                    <NavLink to={'/cart'}>
                                        <ImCart className='text-xl' />
                                    </NavLink>
                                </NavItem>
                                {
                                    (auth.user) ? <NavItem>
                                        <NavLink to={'/profile'}>
                                            <RiShieldUserFill className='text-3xl' />
                                        </NavLink>
                                    </NavItem> :
                                        <NavItem >
                                            <NavLink to={'/login'} >
                                                Sign In
                                            </NavLink>
                                        </NavItem>
                                }
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </div>
        </>
    );
}

export default HeaderCom;