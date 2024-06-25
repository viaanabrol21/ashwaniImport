'use client'
import Link from 'next/link';
import Image from 'next/image';
import styles from './navbar.module.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavbarComponent() {
  return (
    <>
        <div className={styles.nHead}>
            <div className={styles.topbar}>
                <div className={styles.topbarContent}>
                    <div className={styles.top}>
                        <Link href="/contact"><Image src='/assets/social-icons/pin.png' width={30} height={30} alt='stamping' />302 / 4D, Model Town Extension, D Block, Ludhiana 141002</Link>
                        <Link href="/contact"><Image src='/assets/social-icons/email.png' width={30} height={30} alt='stamping' />ashwaniexports007@gmail.com</Link>
                    </div>
                    <div className={styles.bottom}>
                        <Link href="https://www.facebook.com/ashwaniexports/" target='-blank'>
                            <Image src='/assets/social-icons/facebook.png' width={30} height={30} alt='stamping' />
                        </Link>
                        <Link href="https://in.pinterest.com/ashwaniexports/" target='-blank'>
                            <Image src='/assets/social-icons/pinterest.png' width={30} height={30} alt='stamping' />
                        </Link>
                        <Link href="https://www.linkedin.com/in/ashwani-ashwaniexports-3aaa2716b/?originalSubdomain=qa" target='-blank'>
                            <Image src='/assets/social-icons/linkedin.png' width={30} height={30} alt='stamping' /> 
                        </Link>
                        <Link href="https://www.youtube.com/@ashwaniexports" target='-blank'>
                            <Image src='/assets/social-icons/network.png' width={30} height={30} alt='stamping' />
                        </Link>    
                    </div>
                </div>
            </div>
        </div>
        <Navbar expand="lg" className={styles.bg}>
            <Container>
                <Navbar.Brand href="/">
                <Image src='/ashImports-logo.jpeg' width={80} height={80} className={styles.imgWidth} alt='logo' />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className={styles.alignment}>
                <Nav
                    className={styles.navIcons}
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
                        <NavDropdown.Item href="/anchorBolt">Anchor Bolt</NavDropdown.Item>
                        <NavDropdown.Item href="/studBolt">Stud Bolt</NavDropdown.Item>
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
