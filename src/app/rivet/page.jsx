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
            title: "Blind Rivet",
            img: "/assets/images/rivet/blind-rivet.png",
            text: "",
            alt: "",
        },
        {
          id: "2",
          title: "Semi Tubular Rivet",
          img: "/assets/images/rivet/semi-tubular-rivet.png",
          text: "",
          alt: "",
        },
        {
          id: "3",
          title: "Solid Rivet",
          img: "/assets/images/rivet/solid-rivet.png",
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
                <Link href={`/rivet/${link.id}`}>
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