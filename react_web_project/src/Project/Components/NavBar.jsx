import { NavbarBrand } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BiSolidCart, BiSolidUser } from "react-icons/bi";
function NavBar() {
    return (
        <Navbar expand="lg" className="bg-white uppercase">
            <Container className='py-2'>
                <NavbarBrand className='p-0'>
                    <Nav.Link
                        className='logo'
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}>
                        <span style={{
                            fontSize: '20px',
                            fontWeight: 'bold',
                            letterSpacing: '10px'
                        }}>inessa</span>
                        <span
                            style={{
                                fontSize: '13px',
                                letterSpacing: '1px'
                            }}>perfumes</span>
                    </Nav.Link>
                </NavbarBrand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="me-auto font-semibold"
                        style={{
                            flex: '2',
                            fontSize: '16px',
                            alignItems: 'center',
                            justifyContent: 'right'
                        }}>
                        <Nav.Link href="#home">exclusive</Nav.Link>
                        <Nav.Link href="#home">women</Nav.Link>
                        <Nav.Link href="#link">men</Nav.Link>
                    </Nav>

                    <Nav
                        className='about'
                        style={{
                            flex: '2',
                            justifyContent: 'right',
                            alignItems: 'center',
                            fontWeight: '500',
                            fontSize: '16px'
                        }}>
                        <Nav.Link href="#link">about</Nav.Link>
                        <Nav.Link href="#link">contact</Nav.Link>
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

export default NavBar;