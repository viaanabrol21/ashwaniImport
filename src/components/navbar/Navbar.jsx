'use client'
import Image from 'next/image';
import styles from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <>
        {/* <div className={styles.topbar}>
            <div className="d-flex justify-content-between">
                <div className={styles.top}>
                    <small className="me-3"><i className="fas fa-map-marker-alt me-2 text-secondary"></i> <links href="#" className="text-white">123 Street, New York</links></small>
                    <small className="me-3"><i className="fas fa-envelope me-2 text-secondary"></i><links href="#" className="text-white">Email@Example.com</links></small>
                </div>
                <div className={styles.bottom}>
                    <links href="#" className="text-white"><small className="text-white mx-2">Privacy Policy</small>/</links>
                    <links href="#" className="text-white"><small className="text-white mx-2">Terms of Use</small>/</links>
                    <links href="#" className="text-white"><small className="text-white ms-2">Sales and Refunds</small></links>
                </div>
            </div>
        </div> */}
        <Navbar expand="lg" className={styles.bg}>
            <Container>
                <Navbar.Brand href="/">
                <Image src='/ashImports-logo.jpeg' layout="fill" className={styles.imgWidth} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className={styles.navIcons}
                    style={{ maxHeight: '200px', marginLeft: '30rem' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/about">About Us</Nav.Link>
                    <Nav.Link href="/matching">Matching Parts</Nav.Link>
                    <Nav.Link href="/stamping">Stamping Parts</Nav.Link>
                    <NavDropdown title="Fasteners" id="navbarScrollingDropdown" className={styles.dropBg}>
                        <NavDropdown.Item href="/bolt">Bolt</NavDropdown.Item>
                        <NavDropdown.Item href="/nut">Nut</NavDropdown.Item>
                        <NavDropdown.Item href="/screw">Screw</NavDropdown.Item>
                        <NavDropdown.Item href="/washer">Washer</NavDropdown.Item>
                        <NavDropdown.Item href="/anchor">Anchor</NavDropdown.Item>
                        <NavDropdown.Item href="/rivet">Rivet</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="/contact">Contact Us</Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                    <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>

  );
}

export default NavbarComponent;
