import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "",
            img: "/assets/images/stud-bolt/stud1.jpeg",
            text: "",
            alt: "",
        },
        {
          id: "2",
          title: "",
          img: "/assets/images/stud-bolt/stud2.jpeg",
          text: "",
          alt: "",
        },
        {
          id: "3",
          title: "",
          img: "/assets/images/stud-bolt/stud3.jpeg",
          text: "",
          alt: "",
        },
        {
            id: "4",
            title: "",
            img: "/assets/images/stud-bolt/stud4.jpeg",
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
                <Link href={`/studBolt/${link.id}`}>
                <Figure className={styles.wrapper}>
                    <Image src={link.img} width={400} height={300} alt={link.alt} />
                    <figcaption className={styles.content}>{link.title}</figcaption>   
                </Figure>
                </Link>
                </div>
                )))}
            </div>
        </div>
    </div>
  )
}

export default PartsCards