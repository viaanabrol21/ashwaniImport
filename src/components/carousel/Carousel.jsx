'use client'
import Link from 'next/link';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import style from './style.module.css'

function CarouselFadeExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
      <Image src='/assets/images/carousel/c1.jpg' layout="fill" className={style.imgWidth} alt='stamping' />
        <Carousel.Caption className={style.cCaption}>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center'>
              <div className={style.cContent}>
                <h2>Ashwani Imports & Exports</h2>
                <p>Where quality meets customization</p>
                <div className="d-flex gap-2 mt-4">
                  <Link href="/contact" className={style.heroButton}>Contact Us</Link>
                  <Link href="/catalouge ashwaniexports.pdf" target="-blank" className={style.heroButton}>Download Catalog</Link>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className={style.cImage}>
                <Image src='/assets/images/anchor/drop-anchor.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/anchor/sleeve-anchor.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/bolt/eye-bolt.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/bolt/hex-bolt.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/nut/eye-nut.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/rivet/blind-rivet.png' width={150} height={150} alt='stamping' />
              </div>
            </div>
          </div> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <Image src='/assets/images/carousel/c2.jpg' layout="fill" className={style.imgWidth} alt='stamping' />
        <Carousel.Caption className={style.cCaption}>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center'>
              <div className={style.cContent}>
                <h2>Ashwani Imports & Exports</h2>
                <p>Where quality meets customization</p>
                <div className="d-flex gap-2 mt-3">
                  <Link href="/contact" className={style.heroButton}>Contact Us</Link>
                  <Link href="/catalouge ashwaniexports.pdf" target="-blank" className={style.heroButton}>Download Catalog</Link>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className={style.cImage}>
                <Image src='/assets/images/stamping-parts/stamping1.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/stamping-parts/stamping2.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/stamping-parts/stamping3.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/stamping-parts/stamping4.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/stamping-parts/stamping5.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/stamping-parts/stamping6.png' width={150} height={150} alt='stamping' />
              </div>
            </div>
          </div> 
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <Image src='/assets/images/carousel/c1.jpg' layout="fill" className={style.imgWidth} alt='stamping' />
        <Carousel.Caption className={style.cCaption}>
          <div className='row'>
            <div className='col-md-6 d-flex align-items-center'>
              <div className={style.cContent}>
                <h2>Ashwani Imports & Exports</h2>
                <p>Where quality meets customization</p>
                <div className="d-flex gap-2 mt-3">
                  <Link href="/contact" className={style.heroButton}>Contact Us</Link>
                  <Link href="/catalouge ashwaniexports.pdf" target="-blank" className={style.heroButton}>Download Catalog</Link>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className={style.cImage}>
                <Image src='/assets/images/matching-parts/ball-lock-pin.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/matching-parts/cam-action.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/matching-parts/d-ring.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/matching-parts/pull-head.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/matching-parts/ring-pull.png' width={150} height={150} alt='stamping' />
                <Image src='/assets/images/matching-parts/wire-lock-pin.png' width={150} height={150} alt='stamping' />
              </div>
            </div>
          </div> 
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;