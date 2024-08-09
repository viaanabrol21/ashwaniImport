import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'

function About() {
  return (
    <div className='container'>
        <div className='row mt-5 mb-5'>
            <div className='col-md-5'>
                <Image src='/assets/images/about/about2.jpg' layout="fill" className={styles.imgWidth} alt='about' />
            </div>
            <div className='col-md-7'>
                <div className={styles.textHeading}>
                    <div className={styles.divider}>
                        <div className={styles.dividerSeprator}>
                        </div>
                        <span>About Us</span>
                    </div>
                    <h2>Building Strength, One Thread at a Time</h2>
                    <p>
                    Ashwani Imports & Exports is one-stop destination for a wide array of industrial solutions. Our extensive product range covers Anchor Bolts, Fasteners, Nuts, Washers, Screws, U Bolts, Threaded Rods, Hanging Clamps, Beam Clamps, Consumables, Oil & Lubricants, Hand Tools, Pipes, Structural Steel, Plates, Machinery, Tools & Dies, and Castings in both Aluminum and Iron.
                    </p>
                    <p>Experience the difference for yourself. Discover Oil and Gas Fasteners – where your needs meet our expertise.</p>
                    <p><strong className={styles.ceotext}> CEO, ASHWANI KUMAR</strong></p>
                    <div className='row mb-5'>
                        <div className='col-md-7'>
                            <Image src='/assets/images/about/about.jpeg' layout="fill" className={styles.imgIndustry} alt='about' />
                        </div>
                        <div className='col-md-5'>
                            <div className="mb-2"><Image src='/assets/images/about/about1.jpg' layout="fill" className={styles.imgStaff} alt='about' /></div>
                            <div className='d-flex gap-4'>
                                <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                                <p>Matching Parts</p>
                            </div>
                            <div className='d-flex gap-4'>
                                <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                                <p>Stamping Parts</p>
                            </div>
                            <div className='d-flex gap-4'>
                                <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                                <p>Fasteners</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.heroButton}>
                        <Link href="/about">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About