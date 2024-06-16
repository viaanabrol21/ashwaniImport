import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Cap Nut",
            img: "/assets/images/nut/cap-nut.png",
            text: "",
            alt: "",
        },
        {
          id: "2",
          title: "Coupler Nut",
          img: "/assets/images/nut/coupler-nut.png",
          text: "",
          alt: "",
        },
        {
          id: "3",
          title: "Eye Nut",
          img: "/assets/images/nut/eye-nut.png",
          text: "",
          alt: "",
        },
        {
          id: "4",
          title: "Heavy Hex Nut",
          img: "/assets/images/nut/heavy-hex-nut.png",
          text: "",
          alt: "",
      },
      {
        id: "5",
        title: "Hex Flange Nut",
        img: "/assets/images/nut/hex-flange-nut.png",
        text: "",
        alt: "",
      },
      {
        id: "6",
        title: "Hex Nut",
        img: "/assets/images/nut/hex-nut.png",
        text: "",
        alt: "",
      },
      {
        id: "7",
        title: "Slotted Nut",
        img: "/assets/images/nut/slotted-nut.png",
        text: "",
        alt: "",
    },
    {
      id: "8",
      title: "Square Nut",
      img: "/assets/images/nut/square-nut.png",
      text: "",
      alt: "",
    },
    {
      id: "9",
      title: "T Nut",
      img: "/assets/images/nut/t-nut.png",
      text: "",
      alt: "",
    },
    {
      id: "10",
      title: "test1",
      img: "/assets/images/nut/weld-nut.png",
      text: "",
      alt: "",
  },
  {
    id: "11",
    title: "test2",
    img: "/assets/images/nut/wing-nut.png",
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