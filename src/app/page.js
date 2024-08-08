import Image from "next/image";
import Link from 'next/link';
import styles from "./page.module.css";
import CardComponent from "@/components/cards/CardComponent"
import CarouselFadeExample from "@/components/carousel/Carousel";
import Machinery from "@/components/machinery/Machinery";
import About from "@/components/about/About";
import BackgroundImage from "@/components/backgroundImage/BackgroundImage";

export default function Home() {
  return (
    <>
      <CarouselFadeExample />
        <About />
        <CardComponent />
        <Machinery />
      {/* <div className="">
        <BackgroundImage />
      </div> */}
    </>
  );
}
