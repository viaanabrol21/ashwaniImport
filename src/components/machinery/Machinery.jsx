import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function machinery() {
  return (
    <div className={styles.content}>
        <div className='container'>
        <div className='row justify-content-center mb-5 mt-5'>
            <div className='col-md-4'>
                <div className={styles.wrapper}>
                <Image src='/assets/images/machines/bandsaw.png' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
                <strong>Bandsaw</strong>
                {/* <p>DOUBLE COLOUMN BANSAW MACHINE SIZE 10MM TO 600MM DIA</p> */}
                </div>
            </div>
            <div className='col-md-4'>
            <div className={styles.wrapper}>
                <Image src='/assets/images/machines/linco.jpg' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
                <strong>Threading Machine</strong>
                {/* <p>LINCO Threading Machine - For any type of threading MM / UNC / UNF 6mm to 100mm Capcity</p> */}
            </div>
            </div>
            <div className='col-md-4'>
            <div className={styles.wrapper}>
                <Image src='/assets/images/machines/millingmach.jpg' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
                <strong>Milling Machine</strong>
                <p></p>
            </div>
            </div>
            <div className='col-md-4'>
            <div className={styles.wrapper}>
                <Image src='/assets/images/machines/power-press.jpg' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
                <strong>Power Press</strong>
                {/* <p> A Power Press Machine is used for cutting metal in a particular shape. It is a machine with a controlled system that is used for processing various types of sheet metal. A multipurpose machine,  it is used for shaping and cutting at the same time. This machine is mainly used in metal - 5 TON TO 600 TON CAPACITY</p> */}
            </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default machinery