'use client'
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import style from './style.module.css'

function CarouselFadeExample() {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
      <Image src='/assets/images/carousel/1.jpg' layout="fill" className={style.imgWidth} />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <Image src='/assets/images/carousel/2.jpg' layout="fill" className={style.imgWidth}  />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <Image src='/assets/images/carousel/3.jpg' layout="fill" className={style.imgWidth}  />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;