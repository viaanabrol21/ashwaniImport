'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "Eye Bolt",
            img: "/assets/images/bolt/eye-bolt.png",
            text: "",
            alt: "",
        },
        {
          id: "2",
          title: "T bolt",
          img: "/assets/images/bolt/t-bolt.png",
          text: "",
          alt: "",
        },
        {
          id: "3",
          title: "Hex Bolt",
          img: "/assets/images/bolt/hex-bolt.png",
          text: "",
          alt: "",
        },
        {
          id: "4",
          title: "Carriage Bolt",
          img: "/assets/images/bolt/carriage-bolt.png",
          text: "",
          alt: "",
      },
      {
        id: "5",
        title: "Flange Bolt",
        img: "/assets/images/bolt/flange-bolt.png",
        text: "",
        alt: "",
      },
      {
        id: "6",
        title: "U Bolt",
        img: "/assets/images/bolt/u-bolt.png",
        text: "",
        alt: "",
      },
      {
        id: "7",
        title: "Wing Bolt",
        img: "/assets/images/bolt/wing-bolt.png",
        text: "",
        alt: "",
      },
      {
        id: "8",
        title: "Heavy Hex Bolt",
        img: "/assets/images/bolt/heavy-hex-bolt.png",
        text: "",
        alt: "",
      },
    ]
  return (
    <>
    <Breadcrumb
      homeElement="Home"
      separator=">"
      containerClasses="breadcrumbs"
      listClasses=""
      activeClasses="active"
      capitalizeLinks={true}
    />
    <div className={styles.parts_cards}>
        <div className='container'>
            <div className='row'>
            {parts.map((link=>(
                <div className='col-md-4' key={link.id}>
                <Link href={`/bolt/${link.id}`}>
                <Figure className={styles.wrapper}>
                    <Image src={link.img} width={400} height={300} alt={link.alt}  />
                    <figcaption className={styles.content}>{link.title}</figcaption>   
                </Figure>
                </Link>
                </div>
                )))}
            </div>
        </div>
    </div>
  </>  
  )
}

export default PartsCards