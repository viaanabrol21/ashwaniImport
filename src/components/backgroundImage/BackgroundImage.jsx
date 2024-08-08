import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function BackgroundImage() {
  return (
    <div className={styles.imgWidth}>
        <Image
            alt="backgroundImage"
            src={'/assets/images/background/c2.jpg'}
            quality={100}
            fill
            sizes="100vw"
            className={styles.backgroundImage}
            style={{
                objectFit: 'cover',
                objectPosition: 'center',

            }}
        />
        {/* <div className={styles.centered}>
            <h2 className='text-white'>Lorem ipsum</h2>
        </div> */}
    </div>
  )
}

export default BackgroundImage