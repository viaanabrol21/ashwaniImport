import Link from 'next/link';
import Image from 'next/image';
import style from './style.module.css'
import WhatsAppButton from '../watsapp/WhatsAppButton';
const Footer = () => {
    return (
        <>
            <div className={style.footerContent}>
                <div className="container py-5">
                    <div className="pb-4 mb-4">
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <div className={style.footerItem}>
                                <h4 className="text-light mb-3">Why People Like us!</h4>
                                <div className={style.divider}>
                                    <div className={style.dividerSeprator}></div>
                                </div>
                                <p className="mb-4">We are a domestic steel construction fastener manufacturer with products in multiple industries including Steel Fabrication, Highway, Marine, Timber Construction, Power  and Energy, Government and Military, Precast Concrete, Light Rail, Mining, Light Pole & Traffic Signal, Pole Line Hardware, and OEM.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 d-flex justify-content-center">    
                                <div className={style.content}>
                                <h4 className="text-light mb-3">Quick Links</h4>
                                <div className={style.divider}>
                                    <div className={style.dividerSeprator}></div>
                                </div>
                                <Link href="/about">About Us</Link>
                                <Link href="/contact">Contact Us</Link>
                                <Link href="/privacyPolicy">Privacy Policy</Link>
                                <Link href="/matching">Matching Parts</Link>
                                <Link href="/stamping">Stamping Parts</Link>
                                </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-item">
                                <h4 className="text-light mb-3">Contact</h4>
                                <div className={style.divider}>
                                    <div className={style.dividerSeprator}></div>
                                </div>
                                <p>Address: 302 / 4D, Model Town Extension, D Block, Ludhiana 141002</p>
                                <p>Email: info@oilandgasfasteners.com 
                                ashwaniexports007@gmail.com
                                </p>
                                <p>Phone: 91-81462-74050, +974-3152-2202</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.footerBottom}>
                <div className={style.top}>
                    <div className=''>
                        <p>© 2024 Ashwani Imports & Exports. All rights reserved.</p>
                    </div>
                    <div className={style.bottom}>
                        <WhatsAppButton />
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
                        <Link href="https://www.instagram.com/explore/tags/ashwaniexports/" target='-blank'>
                            <Image src='/assets/social-icons/instagram.png' width={30} height={30} alt='stamping' />
                        </Link>  
                        <Link href="https://x.com/ashwaniexports" target='-blank'>
                            <Image src='/assets/social-icons/twiter.png' width={30} height={30} alt='stamping' />
                        </Link>     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer