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
            title: "O type",
            img: "/assets/images/matching-parts/0-type-lockpin.png",
            text: "",
            alt: "",
        },
        {
          id: "2",
          title: "Ball Lock Pin",
          img: "/assets/images/matching-parts/ball-lock-pin.png",
          text: "",
          alt: "",
        },
        {
          id: "3",
          title: "Cam Action",
          img: "/assets/images/matching-parts/cam-action-indexin.png",
          text: "",
          alt: "",
        },
        {
          id: "4",
          title: "Quick Release Ball Lock Pin with Mounting Lanyard",
          img: "/assets/images/matching-parts/ball-mounting-lanyard.png",
          text: "",
          alt: "",
      },
      {
        id: "5",
        title: "D Ring",
        img: "/assets/images/matching-parts/d-ring.png",
        text: "",
        alt: "",
      },
      {
        id: "6",
        title: "Double End Clevis",
        img: "/assets/images/matching-parts/double-end-clevis.png",
        text: "",
        alt: "",
      },
      {
        id: "7",
        title: "Hand Retractable",
        img: "/assets/images/matching-parts/hand-retractable.png",
        text: "",
        alt: "",
    },
    {
      id: "8",
      title: "Male Female Hex",
      img: "/assets/images/matching-parts/male-female-hex.png",
      text: "",
      alt: "",
    },
    {
      id: "9",
      title: "R Clip Cotter Pin",
      img: "/assets/images/matching-parts/r-clip-clotter-pin.png",
      text: "",
      alt: "Stainless Steel R Clip Cotter Pin",
    },
    {
      id: "10",
      title: "Spring Ball Plunger",
      img: "/assets/images/matching-parts/spring-ball.png",
      text: "",
      alt: "",
    },
    {
        id: "11",
        title: "Pull Head",
        img: "/assets/images/matching-parts/pull-head.png",
        text: "",
        alt: "",
    },
    {
        id: "12",
        title: "Pull Knob",
        img: "/assets/images/matching-parts/pull-knob-indexing.png",
        text: "",
        alt: "",
    },
    {
        id: "13",
        title: "Release Ball",
        img: "/assets/images/matching-parts/quick-release-ball.png",
        text: "",
        alt: "",
    },
    {
    id: "14",
    title: "Hex Male Female Threaded Standoffs",
    img: "/assets/images/matching-parts/male-female-thread.png",
    text: "",
    alt: "",
    },
    {
    id: "15",
    title: "Ring Pull Indexing",
    img: "/assets/images/matching-parts/ring-pull-indexin.png",
    text: "",
    alt: "",
    },
    {
    id: "16",
    title: "Female Threaded Hex Standoffs",
    img: "/assets/images/matching-parts/female-hex-standoff.png",
    text: "",
    alt: "",
    },
    {
    id: "17",
    title: "Round Head Groove",
    img: "/assets/images/matching-parts/round-head-groove.png",
    text: "",
    alt: "",
    },
    {
    id: "18",
    title: "Slotted Flange",
    img: "/assets/images/matching-parts/slotted-flange-ball.png",
    text: "",
    alt: "",
    },
    {
    id: "19",
    title: "T handle Quickball",
    img: "/assets/images/matching-parts/t-handle-quickball.png",
    text: "",
    alt: "",
    },
    {
        id: "20",
        title: "Wire Lock Pin",
        img: "/assets/images/matching-parts/wire-lock-pin.png",
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
        listClasses="breadcrumb-item"
        activeClasses="active"
        capitalizeLinks={true}
      />
      <div className={styles.parts_cards}>
        <div className='container'>
            <div className='row'>
            {parts.map((link=>(
                <div className='col-md-4' key={link.id}>
                <Link href={`/matching/${link.id}`}>
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