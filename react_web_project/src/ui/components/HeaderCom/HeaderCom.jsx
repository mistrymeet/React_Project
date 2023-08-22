import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSolidCart, BiSolidUser, BiSearch } from "react-icons/bi";
import { useContext, useEffect } from 'react';
import Product from '../../utils/Product.json'
import { ContextTest } from '../../../App';
import '../HeaderCom/HeaderCom.css'
import { Link } from 'react-router-dom';

function HeaderCom() {
    let SearchData = useContext(ContextTest)
    useEffect(() => {
        let filterData = Product?.filter?.((e) => {
            return e?.title?.toLowerCase?.()?.includes?.(SearchData.textsearch?.toLowerCase?.())
        })
        SearchData.SetData(filterData)
    }, [SearchData.textsearch])

    return (
        <Navbar expand="lg" className="bg-white uppercase">
            <Container className='py-2 px-0 cont'>
                <NavbarBrand className='p-0'>
                    <Nav.Link
                        className='logo'
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <Link to='/' className='no-underline text-black'>
                            <span
                                style={{
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    letterSpacing: '10px'
                                }}>inessa
                            </span>
                        </Link>
                        <Link to='/' className='no-underline text-black'>
                            <span
                                style={{
                                    fontSize: '13px',
                                    letterSpacing: '1px'
                                }}>perfumes
                            </span>
                        </Link>
                    </Nav.Link>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto font-semibold"
                        style={{
                            flex: '2.2',
                            fontSize: '16px',
                            alignItems: 'center',
                            justifyContent: 'right'
                        }}>
                        <Link to='/Products' className='no-underline text-black'>
                            <Nav.Link href="#link">Products</Nav.Link>
                        </Link>
                        <Link to='/Exclusive' className='no-underline text-black'>
                            <Nav.Link href="#link">exclusive</Nav.Link>
                        </Link>
                        <Link to='/Women' className='no-underline text-black'>
                            <Nav.Link href="#home">women</Nav.Link>
                        </Link>
                        <Link to='/Men' className='no-underline text-black'>
                            <Nav.Link href="#home">men</Nav.Link>
                        </Link>
                        <Link to='/Exclusive' className='no-underline text-black'>
                            <Nav.Link href="#link">about</Nav.Link>
                        </Link>
                        <Link to='/Contact' className='text-black no-underline'>
                            <Nav.Link href="#link">contact</Nav.Link>
                        </Link>
                    </Nav>

                    <Nav
                        className='about'
                        style={{
                            flex: '1.8',
                            justifyContent: 'right',
                            alignItems: 'center',
                            fontWeight: '500',
                            fontSize: '16px'
                        }}>
                        <input type="text" className='outline-none border-3 border-black rounded-md ps-2 p-1 drop-shadow-lg' placeholder='Search Here'
                            onChange={(e) => SearchData.SetTextSearch(e.target.value)}
                        />
                        <Nav.Link href="#link"
                            style={{
                                fontSize: '25px',
                            }}>
                            <BiSearch />
                        </Nav.Link>
                        <Nav.Link href="#link"
                            style={{ fontSize: '25px' }}><BiSolidCart /></Nav.Link>
                        <Nav.Link href="#link"
                            style={{ fontSize: '25px' }}><BiSolidUser /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderCom;