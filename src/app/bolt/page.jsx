import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Eye Bolt",
            img: "/assets/images/bolt/eye-bolt.png",
            text: "",
        },
        {
          id: "2",
          title: "T bolt",
          img: "/assets/images/bolt/t-bolt.png",
          text: "",
        },
        {
          id: "3",
          title: "Hex Bolt",
          img: "/assets/images/bolt/hex-bolt.png",
          text: "",
        },
        {
          id: "4",
          title: "Carriage Bolt",
          img: "/assets/images/bolt/carriage-bolt.png",
          text: "",
      },
      {
        id: "5",
        title: "Flange Bolt",
        img: "/assets/images/bolt/flange-bolt.png",
        text: "",
      },
      {
        id: "6",
        title: "U Bolt",
        img: "/assets/images/bolt/u-bolt.png",
        text: "",
      },
      {
        id: "7",
        title: "Wing Bolt",
        img: "/assets/images/bolt/wing-bolt.png",
        text: "",
      },
      {
        id: "8",
        title: "Heavy Hex Bolt",
        img: "/assets/images/bolt/heavy-hex-bolt.png",
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