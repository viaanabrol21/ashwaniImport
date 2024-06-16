import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Contact Washer",
            img: "/assets/images/washer/contact-washer.png",
            text: "",
        },
        {
          id: "2",
          title: "Flat Washer",
          img: "/assets/images/washer/flat-washer.png",
          text: "",
        },
        {
          id: "3",
          title: "Spring Washer",
          img: "/assets/images/washer/spring-washer.png",
          text: "",
        },
        {
          id: "4",
          title: "Square taper Washer",
          img: "/assets/images/washer/square-taper-washer.png",
          text: "",
      },
      {
        id: "5",
        title: "Toothed Washer",
        img: "/assets/images/washer/toothed-washer.png",
        text: "",
      },
    ]
  return (
    <div className={styles.parts_cards}>
        <div className='container'>
            <div className='row'>
            {parts.map((link=>(
                <div className='col-md-4'>
                <parts key={link.id}>
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