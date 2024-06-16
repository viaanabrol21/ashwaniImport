import React from 'react';
import Image from 'next/image';
import styles from './style.module.css'
import { Figure } from 'react-bootstrap';

function PartsCards() {

    const parts = [
        {
            id: "1",
            title: "O type",
            img: "/assets/images/matching-parts/0-type-lockpin.png",
            text: "",
        },
        {
          id: "2",
          title: "Ball Lock Pin",
          img: "/assets/images/matching-parts/ball-lock-pin.png",
          text: "",
        },
        {
          id: "3",
          title: "Cam Action",
          img: "/assets/images/matching-parts/cam-action-indexin.png",
          text: "",
        },
        {
          id: "4",
          title: "Cam Action",
          img: "/assets/images/matching-parts/cam-action.png",
          text: "",
      },
      {
        id: "5",
        title: "D Ring",
        img: "/assets/images/matching-parts/d-ring.png",
        text: "",
      },
      {
        id: "6",
        title: "Double End Clevis",
        img: "/assets/images/matching-parts/double-end-clevis.png",
        text: "",
      },
      {
        id: "7",
        title: "Hand Retractable",
        img: "/assets/images/matching-parts/hand-retractable.png",
        text: "",
    },
    {
      id: "8",
      title: "Male Female Hex",
      img: "/assets/images/matching-parts/male-female-hex.png",
      text: "",
    },
    {
      id: "9",
      title: "O Type Lockin",
      img: "/assets/images/matching-parts/o-type-lockpin.png",
      text: "",
    },
    {
      id: "10",
      title: "Pull Head Indexing",
      img: "/assets/images/matching-parts/pull-head-indexing.png",
      text: "",
    },
    {
        id: "11",
        title: "Pull Head",
        img: "/assets/images/matching-parts/pull-head.png",
        text: "",
    },
    {
        id: "12",
        title: "Pull Knob",
        img: "/assets/images/matching-parts/pull-knob-indexing.png",
        text: "",
    },
    {
        id: "13",
        title: "Release Ball",
        img: "/assets/images/matching-parts/quick-release-ball.png",
        text: "",
    },
    {
    id: "14",
    title: "Release ball locking",
    img: "/assets/images/matching-parts/quickrelease-ball-locking.png",
    text: "",
    },
    {
    id: "15",
    title: "Ring Pull Indexing",
    img: "/assets/images/matching-parts/ring-pull-indexin.png",
    text: "",
    },
    {
    id: "16",
    title: "Ring Pull",
    img: "/assets/images/matching-parts/ring-pull.png",
    text: "",
    },
    {
    id: "17",
    title: "Round Head Groove",
    img: "/assets/images/matching-parts/round-head-groove.png",
    text: "",
    },
    {
    id: "18",
    title: "Slotted Flange",
    img: "/assets/images/matching-parts/slotted-flange-ball.png",
    text: "",
    },
    {
    id: "19",
    title: "T handle Quickball",
    img: "/assets/images/matching-parts/t-handle-quickball.png",
    text: "",
    },
    {
        id: "20",
        title: "Wire Lock Pin",
        img: "/assets/images/matching-parts/wire-lock-pin.png",
        text: "",
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