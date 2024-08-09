'use client'
import Button from 'react-bootstrap/Button';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import styles from './cards.module.css';

function CardComponent() {
  const cards = [
    {
      id: "1",
      title: "Drop Anchor",
      img: "./assets/images/anchor/drop-anchor.png",
      text: "",
      alt: "",
      url: "/anchor/1",
    },
    {
      id: "2",
      title: "Sleeve Anchor",
      img: "./assets/images/anchor/sleeve-anchor.png",
      text: "",
      alt: "",
      url: "/anchor/2",
    },
    {
      id: "3",
      title: "Hex Bolt",
      img: "./assets/images/bolt/hex-bolt.png",
      text: "",
      alt: "",
      url: "/bolt/3",
    },
    {
      id: "4",
      title: "Eye Bolt",
      img: "./assets/images/bolt/eye-bolt.png",
      text: "",
      alt: "",
      url: "/bolt/1",
    },
    {
      id: "5",
      title: "D Ring",
      img: "./assets/images/matching-parts/d-ring.png",
      text: "",
      alt: "",
      url: "/matching/5",
    },
    {
      id: "6",
      title: "Ring Pull",
      img: "./assets/images/matching-parts/ring-pull.png",
      text: "",
      alt: "",
      url: "/matching/15",
    },
    {
      id: "7",
      title: "Coupler Nut",
      img: "./assets/images/nut/coupler-nut.png",
      text: "",
      alt: "",
      url: "/nut/2",
    },
    {
      id: "8",
      title: "T Nut",
      img: "./assets/images/nut/t-nut.png",
      text: "",
      alt: "",
      url: "/nut/9",
    },
    {
      id: "9",
      title: "Solid Rivet",
      img: "./assets/images/rivet/solid-rivet.png",
      text: "",
      alt: "",
      url: "/rivet/3",
    },
    {
      id: "10",
      title: "Set Screw",
      img: "./assets/images/screw/set-screw.png",
      text: "",
      alt: "",
      url: "/screw/6",
    },
    {
      id: "11",
      title: "Eye Nut",
      img: "./assets/images/nut/eye-nut.png",
      text: "",
      alt: "",
      url: "/nut/3",
    },
    {
      id: "12",
      title: "T Bolt",
      img: "./assets/images/bolt/t-bolt.png",
      text: "",
      alt: "",
      url: "/bolt/2",
    },
    {
      id: "13",
      title: "Flat Washer",
      img: "./assets/images/washer/flat-washer.png",
      text: "",
      alt: "",
      url: "/washer/2",
    },
    {
      id: "14",
      title: "Braces L Shaped",
      img: "./assets/images/stamping-parts/stamping1.png",
      text: "",
      alt: "",
      url: "/stamping/1",
    },
  ];
  
  return (
        <>
         <div className={styles.divider}>
          <div className={styles.dividerSeprator}></div>
          <span>Products</span>
        </div>
        <h2 className={styles.textHeading}>Precision in Every Piece <br /> Reliability in Every Turn</h2>
          <div className='overflow-x-auto'>
          <div className={styles.carousel}>
              {cards.map((link=>(
                <div className='' key={link.id}>
                  <Link href={link.url}>
                    <Card className={styles.wrapper}>
                      <Card.Img variant="top" className={styles.top} src={link.img} alt={link.alt}/>
                      <Card.Body>
                        <Card.Title className={styles.title}>{link.title}</Card.Title>
                        <Card.Text>
                          {link.text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    </Link>
                </div>
              )))}
           </div>
          </div>
        </>
    )
}

export default CardComponent;