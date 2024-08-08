import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.css'

function About() {
  return (
    <div className='container'>
        <div className='row mt-5 mb-5'>
            <div className='col-md-6'>
                <Image src='/assets/images/about.jpeg' layout="fill" className={styles.imgWidth} alt='about' />
            </div>
            <div className='col-md-6'>
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