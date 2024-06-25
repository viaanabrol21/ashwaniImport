// import React from 'react'
// import Image from 'next/image'
import styles from './style.module.css'
// import test from '../../../public/bigbolt.jpg'
// import CarouselFadeExample from "@/components/carousel/carousel";

// function page() {
//   return (
//     <>

//     <div className="">
//       <section className={styles.hero}>
//       <div className={styles.bgImageWrapper}>
//     <Image
//       src={test}
//       alt="Cartoon graduates jump with happiness"
//       quality="100"
//       layout="fill"
//       />
//    </div>
//       <div className="container">
//         <div className="row">
       
//         <div className="col-md-6 d-flex align-items-center justify-content-center">
//           <div className={styles.herotext}>
//             <h1>Ashwani Imports & Exports</h1>
//             <p>where quality meets customization</p>
//             <button href="/contact">Contact Us</button>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <CarouselFadeExample />
//         </div>
//         </div>
//       </div>
//       </section>
//     </div>
//     </>
   
//   )
// }

// export default page
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <>
        <div className=''>
            <Image src='/assets/images/background/c2.jpg' className={styles.imgWidth} layout="fill" alt='about' />
            <div className={styles.centered}>
                <h2 className='text-white'>About Us</h2>
            </div>
        </div>
        <div className={styles.about}>
        <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div>
                        <p>
                        Ashwani Imports & Exports is one-stop destination for a wide  array of industrial solutions. Our extensive product range covers Anchor Bolts,  Fasteners, Nuts, Washers, Screws, U Bolts, Threaded Rods, Hanging Clamps,  Beam Clamps, Consumables, Oil & Lubricants, Hand Tools, Pipes, Structural  Steel, Plates, Machinery, Tools & Dies, and Castings in both Aluminum and Iron.
                        </p>
                        <p>
                        We are a domestic steel construction fastener manufacturer with products in multiple industries including Steel Fabrication, Highway, Marine, Timber Construction, Power  and Energy, Government and Military, Precast Concrete, Light Rail, Mining, Light Pole & Traffic Signal, Pole Line Hardware, and OEM. We specialize in fasteners not easily found in the marketplace.
                        </p>
                        <p>
                        No matter the size or grade you require, we have a solution that fits. Our dedication to meeting diverse needs means that we cater to a wide range of specifications, providing versatility and reliability in every order.
                        </p>
                        <p>
                        Our specialization lies in customized fabrication, in name of Ashwani Imports and Exports - Ludhiana where we transform your  unique requirements into tangible solutions. This bespoke approach sets us apart, allowing us to deliver tailored products that perfectly align with your needs.
                        </p>
                        <p>
                        Quality is the cornerstone of our operations. With an ISO 9001:2015 and 45001:2018 certification, we ensure that every product leaving our facility adheres to stringent quality control processes. Our goal is to not only meet industry standards but to exceed them consistently.
                        </p>
                        <p>
                        With a wide spectrum of offerings and a focus on personalized solutions,  we are your trusted partner for all your industrial and commercial requirements.
                        </p>
                        <p>
                        Experience the difference that comes with a commitment to excellence. We appreciate if you choose Ashwani Imports & Exports - where quality meets customization.  Ashwani Imports & Exports means choosing a partner dedicated to delivering quality, customization, and excellence in every aspect.
                        </p>
                        <p>
                        Experience the difference for yourself. Discover Oil and Gas Fasteners – where your needs meet our expertise.
                        </p>
                        <strong>CEO, ASHWANI KUMAR</strong>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}

export default page