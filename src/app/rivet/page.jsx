import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Blind Rivet",
            img: "/assets/images/rivet/blind-rivet.png",
            text: "",
        },
        {
          id: "2",
          title: "Semi Tubular Rivet",
          img: "/assets/images/rivet/semi-tubular-rivet.png",
          text: "",
        },
        {
          id: "3",
          title: "Solid Rivet",
          img: "/assets/images/rivet/solid-rivet.png",
          text: "",
        },
    ]
  return (
    <div className={styles.parts_cards}>
        <div className='container'>
            <div className='row'>
            {parts.map((link=>(
                <div className='col-md-4' key={link.id}>
                <parts>
                <Figure className={styles.wrapper}>
                    <Image src={link.img} width={400} height={300}  />
                    <figcaption className={styles.content}>{link.title}</figcaption>   
                </Figure>
                </parts>
                </div>
                )))}
            </div>
        </div>
    </div>
  )
}

export default PartsCards