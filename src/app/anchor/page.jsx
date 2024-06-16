import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Drop Anchor",
            img: "/assets/images/anchor/drop-anchor.png",
            text: "lorem ipsum",
            alt: "",
        },
        {
          id: "2",
          title: "Sleeve Anchor",
          img: "/assets/images/anchor/sleeve-anchor.png",
          text: "lorem ipsum",
          alt: "",
        },
        {
          id: "3",
          title: "Wedge Anchor",
          img: "/assets/images/anchor/wedge-anchor.png",
          text: "lorem ipsum",
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