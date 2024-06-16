import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function machinery() {
  return (
    <div className={styles.content}>
        <div className='container'>
        <div className='row justify-content-center'>
            <div className='col-md-4'>
                <div className={styles.wrapper}>
                <Image src='/assets/images/machines/bandsaw.png' width={400} height={400} alt='bandsaw' />
                <p>bandsaw DOUBLE COLOUMN BANSAW MACHINE SIZE 10MM TO 600MM DIA</p>
                </div>
            </div>
            <div className='col-md-4'>
                <Image src='/assets/images/machines/linco.jpg' width={400} height={400} alt='bandsaw' />
                <p>bandsaw DOUBLE COLOUMN BANSAW MACHINE SIZE 10MM TO 600MM DIA</p>
            </div>
            <div className='col-md-4'>
                <Image src='/assets/images/machines/millingmach.jpg' width={400} height={400} alt='bandsaw' />
                <p>bandsaw DOUBLE COLOUMN BANSAW MACHINE SIZE 10MM TO 600MM DIA</p>
            </div>
            <div className='col-md-4'>
                <Image src='/assets/images/machines/power-press.jpg' width={400} height={400} alt='bandsaw' />
                <p>bandsaw DOUBLE COLOUMN BANSAW MACHINE SIZE 10MM TO 600MM DIA</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default machinery