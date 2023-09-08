import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSolidCart, BiSolidUser, BiSearch } from "react-icons/bi";
import { useContext, useEffect } from 'react';
import Product from '../../utils/Product.json'
import { ContextTest } from '../../pages/Router/AniRouter';
import '../HeaderCom/HeaderCom.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../pages/Auth/Auth';


function HeaderCom() {
    let SearchData = useContext(ContextTest)
    let auth = AuthContext()


    useEffect(() => {
        let filterData = Product?.filter?.((e) => {
            return e?.title?.toLowerCase?.()?.includes?.(SearchData.textsearch?.toLowerCase?.())
        })
        SearchData.SetData(filterData)
    }, [SearchData.textsearch])

    return (
        <Navbar expand="lg" className="bg-white uppercase header">
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
                            justifyContent: 'right',
                            gap: '15px',
                        }}>
                        <NavLink to='/products' className='no-underline '>
                            Products
                        </NavLink>
                        <NavLink to='/exclusive' className='no-underline '>
                            exclusive
                        </NavLink>
                        <NavLink to='/women' className='no-underline '>
                            women
                        </NavLink>
                        <NavLink to='/men' className='no-underline '>
                            men
                        </NavLink>
                        <NavLink to='/about' className='no-underline '>
                            about
                        </NavLink>
                        <NavLink to='/contact' className=' no-underline'>
                            contact
                        </NavLink>
                    </Nav>

                    <Nav
                        className='about'
                        style={{
                            flex: '1.8',
                            justifyContent: 'right',
                            alignItems: 'center',
                            fontWeight: '500',
                            fontSize: '16px',
                            gap: '10px'
                        }}>
                        <input type="text" className='outline-none border-3 border-black rounded-md ps-2 p-1 drop-shadow-lg' placeholder='Search Here'
                            onChange={(e) => SearchData.SetTextSearch(e.target.value)}
                        />
                        <Link href="#link"
                            style={{
                                fontSize: '25px',
                            }}>
                            <BiSearch />
                        </Link>
                        <NavLink to={'/cart'}
                            style={{ fontSize: '25px' }}><BiSolidCart /></NavLink>
                        {
                            auth.user ?
                                <NavLink to={'/profile'}
                                    style={{ fontSize: '25px' }}><BiSolidUser /></NavLink> :
                                <NavLink to={'/login'} className='font-semibold no-underline text-base'>
                                    Sign In
                                </NavLink>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderCom;