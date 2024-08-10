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
          title: "Anchor Bolt J",
          img: "/assets/images/anchor-bolt/bolt-j.jpeg",
          text: "",
          alt: "",
        },
        {
          id: "2",
          title: "Anchor Bolt I",
          img: "/assets/images/anchor-bolt/I-anchorBolt.jpeg",
          text: "",
          alt: "",
        },
        {
            id: "3",
            title: "Anchor Bolt L",
            img: "/assets/images/anchor-bolt/l-type.jpeg",
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
                <Link href={`/anchorBolt/${link.id}`}>
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
    </>  
  )
}

export default PartsCards