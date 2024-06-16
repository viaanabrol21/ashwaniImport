'use client'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './cards.module.css';

function CardComponent() {
  const cards = [
    {
        id: "1",
        title: "Drop Anchor",
        img: "./assets/images/anchor/drop-anchor.png",
        text: "",
    },
    {
      id: "2",
      title: "Sleeve Anchor",
      img: "./assets/images/anchor/sleeve-anchor.png",
      text: "",
    },
    {
      id: "3",
      title: "Hex Bolt",
      img: "./assets/images/bolt/hex-bolt.png",
      text: "",
    },
    {
      id: "4",
      title: "Eye Bolt",
      img: "./assets/images/bolt/eye-bolt.png",
      text: "",
  },
  {
    id: "5",
    title: "D Ring",
    img: "./assets/images/matching-parts/d-ring.png",
    text: "",
  },
  {
    id: "6",
    title: "Ring Pull",
    img: "./assets/images/matching-parts/ring-pull.png",
    text: "",
  },
  {
    id: "7",
    title: "Coupler Nut",
    img: "./assets/images/nut/coupler-nut.png",
    text: "",
  },
  {
    id: "8",
    title: "T Nut",
    img: "./assets/images/nut/t-nut.png",
    text: "",
  },
  {
    id: "9",
    title: "Solid Rivet",
    img: "./assets/images/rivet/solid-rivet.png",
    text: "",
  },
  {
    id: "10",
    title: "Set Screw",
    img: "./assets/images/screw/set-screw.png",
    text: "",
  },
  {
    id: "11",
    title: "Eye Nut",
    img: "./assets/images/nut/eye-nut.png",
    text: "",
  },
  {
    id: "12",
    title: "T Bolt",
    img: "./assets/images/bolt/t-bolt.png",
    text: "",
  },
  {
    id: "13",
    title: "Flat Washer",
    img: "./assets/images/washer/flat-washer.png",
    text: "",
  },
  {
    id: "14",
    title: "Set Screw",
    img: "./assets/images/stamping-parts/stamping1.png",
    text: "",
  },
]
  return (
        <>
          <div className=' overflow-x-auto'>
          <div className={styles.carousel}>
              {cards.map((link=>(
                <div className='col-lg-2 col-md-2 col-12'>
                    <Card key={link.id} className={styles.wrapper}>
                      <Card.Img variant="top" className={styles.top} src={link.img} />
                      <Card.Body>
                        <Card.Title>{link.title}</Card.Title>
                        <Card.Text>
                          {link.text}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                </div>
              )))}
           </div>
          </div>
        </>
    )
}

export default CardComponent;