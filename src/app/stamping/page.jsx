import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Furniture Corner Braces",
            img: "/assets/images/stamping-parts/stamping1.png",
            text: "",
        },
        {
          id: "2",
          title: "L Type Corner Braces",
          img: "/assets/images/stamping-parts/stamping2.png",
          text: "",
        },
        {
          id: "3",
          title: "Z Shape Corner Brace",
          img: "/assets/images/stamping-parts/stamping3.png",
          text: "",
        },
        {
          id: "4",
          title: "L Shaped Brackets",
          img: "/assets/images/stamping-parts/stamping4.png",
          text: "",
      },
      {
        id: "5",
        title: "Corner Braces Countertop",
        img: "/assets/images/stamping-parts/stamping5.png",
        text: "",
      },
      {
        id: "6",
        title: "Shelf Brackets",
        img: "/assets/images/stamping-parts/stamping6.png",
        text: "",
      },
      {
        id: "7",
        title: "U Shape Brackets",
        img: "/assets/images/stamping-parts/stamping7.png",
        text: "",
    },
    {
      id: "8",
      title: "Slotted L shape Brackets",
      img: "/assets/images/stamping-parts/stamping8.png",
      text: "",
    },
    {
      id: "9",
      title: "L Shape Corner Brackets",
      img: "/assets/images/stamping-parts/stamping9.png",
      text: "",
    },
    {
      id: "10",
      title: "Angle Brackets",
      img: "/assets/images/stamping-parts/stamping10.png",
      text: "",
  },
  {
    id: "11",
    title: "Z Shaped Angle brackets",
    img: "/assets/images/stamping-parts/stamping11.png",
    text: "",
  },
  {
    id: "12",
    title: "Heavy Stell Angle Brackets",
    img: "/assets/images/stamping-parts/stamping12.png",
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