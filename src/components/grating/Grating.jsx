import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'

function Grating() {
  return (
    <div className='container mt-5 mb-5'>
        <div className='row'>
            <div className='col-md-6'>
                {/* <div className={styles.grating}>
                    <Image src='/assets/images/about/grating.jpeg' layout="fill" className={styles.imgWidth} alt='grating' />
                </div> */}
                <Image src='/assets/images/about/grating.jpeg' layout="fill" className={styles.imgWidth} alt='grating' />
            </div>
            <div className='col-md-6'>
                <div className={styles.divider}>
                    <div className={styles.dividerSeprator}></div>
                    <span>grating panel / tread stairs</span>
                </div>
                <h2 className={styles.textHeading}>Welded Galvanized Steel Floor Grating Panels for Operating Floor</h2>
                <h4>Grating for operating floor</h4>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Material: ASTM A36.</p>
                </div>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Mesh pitch: 33 × 33 mm.</p>
                </div>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Load bearing bar size: 40 × 5 mm.</p>
                </div>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Transverse bar size: dia. 5 mm (support bar).</p>
                </div>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Binding bar size: 40 × 5 mm.</p>
                </div>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Protection: All surfaces to be made free from rust and scale by chemical cleaning.</p>
                </div>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Painting: Apply coat of suitable bituminous paint by dipping dry film 60 micron.</p>
                </div>
                <div className='d-flex gap-4'>
                    <Image src='/assets/images/about/tic.png' width={30} height={30} alt='stamping' />
                    <p>Grating size: 800 × 1000 × 40 mm, 1000 × 1000 × 40 mm, 1200 × 1000 × 40 mm, 1300 × 1000 × 40 mm</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Grating