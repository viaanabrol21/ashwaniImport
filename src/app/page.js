import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import CardComponent from "@/components/cards/CardComponent"
import CarouselFadeExample from "@/components/carousel/Carousel";
import Machinery from "@/components/machinery/Machinery";

export default function Home() {
  return (
    <>
      <div className={styles.hero}>
      {/* <Image src='/background.jpg' className={styles.bgImg} alt="background" width={1500} height={500} /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className={styles.herotext}>
                <h1>Ashwani Imports & Exports</h1>
                <p className="mb-5">where quality meets customization</p>
                <Link href="/contact" className={styles.heroButton}>Contact Us</Link>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4">
                <CarouselFadeExample />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textHeading}>
        <h2>Products</h2>
        <CardComponent />
      </div>
      <div className={styles.textHeading}>
        <h2>Machinery</h2>
        <Machinery />
      </div>
    </>
  );
}
