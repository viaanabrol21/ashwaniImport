import Link from 'next/link';
import style from './style.module.css'
const Footer = () => {
    return (
        <div className={style.footerContent}>
        <div className="container py-5">
            <div className="pb-4 mb-4">
                {/* <div className="row g-4">
                    <div className="col-lg-6">
                        <Link href="#">
                            <h1 className="text-primary mb-0">Ashwani Xports</h1>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="d-flex justify-content-end pt-3">
                            <Link href="#"><i className="fab fa-twitter"></i></Link>
                            <Link href="#"><i className="fab fa-facebook-f"></i></Link>
                            <Link href="#"><i className="fab fa-youtube"></i></Link>
                        </div>
                    </div>
                </div> */}
            </div>
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="footer-item">
                        <h4 className="text-light mb-3">Why People Like us!</h4>
                        <p className="mb-4">We are a domestic steel construction fastener manufacturer with products in multiple industries including Steel Fabrication, Highway, Marine, Timber Construction, Power  and Energy, Government and Military, Precast Concrete, Light Rail, Mining, Light Pole & Traffic Signal, Pole Line Hardware, and OEM.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 d-flex justify-content-center">    
                        <div className={style.content}>
                        <h4 className="text-light mb-3">Quick Links</h4>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact Us</Link>
                        <Link href="/">Privacy Policy</Link>
                        <Link href="/matching">Matching Parts</Link>
                        <Link href="/stamping">Stamping Parts</Link>
                        </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="footer-item">
                        <h4 className="text-light mb-3">Contact</h4>
                        <p>Address: 302 / 4D, Model Town Extension, D Block, Ludhiana 141002</p>
                        <p>Email: info@oilandgasfasteners.com </p>
                        <p>Phone: 91-81462-74050, +974-3152-2202</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer