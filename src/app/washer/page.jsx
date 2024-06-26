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
            alt: "",
        },
        {
          id: "2",
          title: "Flat Washer",
          img: "/assets/images/washer/flat-washer.png",
          text: "",
          alt: "",
        },
        {
          id: "3",
          title: "Spring Washer",
          img: "/assets/images/washer/spring-washer.png",
          text: "",
          alt: "",
        },
        {
          id: "4",
          title: "Square taper Washer",
          img: "/assets/images/washer/square-taper-washer.png",
          text: "",
          alt: "",
      },
      {
        id: "5",
        title: "Toothed Washer",
        img: "/assets/images/washer/toothed-washer.png",
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
                    <Image src={link.img} width={400} height={300}  alt={link.alt}/>
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