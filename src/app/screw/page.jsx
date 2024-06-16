import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "ChipBoard Screw",
            img: "/assets/images/screw/chipboard-screw.png",
            text: "",
        },
        {
          id: "2",
          title: "Hex Socket Screw",
          img: "/assets/images/screw/hex-socket-screw.png",
          text: "",
        },
        {
          id: "3",
          title: "Machine Screw",
          img: "/assets/images/screw/machine-screw.png",
          text: "",
        },
        {
          id: "4",
          title: "Security Screw",
          img: "/assets/images/screw/security-screw.png",
          text: "",
      },
      {
        id: "5",
        title: "Self Drilling Screw",
        img: "/assets/images/screw/self-drilling-screw.png",
        text: "",
      },
      {
        id: "6",
        title: "Set Screw",
        img: "/assets/images/screw/set-screw.png",
        text: "",
      },
      {
        id: "7",
        title: "Wood Screw",
        img: "/assets/images/screw/wood-screw.png",
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