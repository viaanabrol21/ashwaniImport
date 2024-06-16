import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "test1",
            img: "/assets/images/products/eye-bolt.png",
            text: "lorem ipsum",
        },
        {
          id: "2",
          title: "test2",
          img: "/assets/images/products/t-bolt.png",
          text: "lorem ipsum",
        },
        {
          id: "3",
          title: "test3",
          img: "/assets/images/products/hex-bolt.png",
          text: "lorem ipsum",
        },
        {
          id: "1",
          title: "test1",
          img: "/assets/images/products/eye-bolt.png",
          text: "lorem ipsum",
      },
      {
        id: "2",
        title: "test2",
        img: "/assets/images/products/t-bolt.png",
        text: "lorem ipsum",
      },
      {
        id: "3",
        title: "test3",
        img: "/assets/images/products/hex-bolt.png",
        text: "lorem ipsum",
      },
    ]
  return (
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
  )
}

export default PartsCards