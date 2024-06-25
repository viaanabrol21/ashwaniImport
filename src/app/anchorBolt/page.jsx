import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Anchor Bolts",
            img: "/assets/images/anchor-bolt/bolts.jpeg",
            text: "",
            alt: "",
        },
        {
          id: "2",
          title: "Bolt J",
          img: "/assets/images/anchor-bolt/bolt-j.jpeg",
          text: "",
          alt: "",
        },
        {
          id: "3",
          title: "Bolt J Type",
          img: "/assets/images/anchor-bolt/j-type.jpeg",
          text: "",
          alt: "",
        },
        {
            id: "4",
            title: "Bolt l",
            img: "/assets/images/anchor-bolt/l-type.jpeg",
            text: "",
            alt: "",
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
                    <Image src={link.img} width={400} height={300} alt={link.alt} />
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