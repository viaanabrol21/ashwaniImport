'use client'
import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

function page({ params }) {
  const studBolt = [
    {
      id: "1",
      title: "Stud Bolts",
      img: "/assets/images/stud-bolt/stud1.jpeg",
      text: "Used in high pressure bolting situations for pipeline, drilling, petroleum / petrochemical refining and general industry for sealing and flange connections all thread, tap end and double end stud bolts are the lion’s share of the industry. The all thread stud bolt is a threaded rod with 2 heavy hex nuts, while the tap end and double end are nut continuously thread, but have a body in the middle with one nut. In a tap end the short end of the stud bolt is designed with a UNC 3A fit to go into a tapped hole on the body of a larger machined or forged equipment. In a flanged connection the size, length, diameter and number of bolt holes is dependent of flange type and pressure class of flange. Stud Bolt grades and sizes are defined by industry standards in ASTM A193 and ASME B16.5 standards. Standard U.S. bolt threads are defined in ASME / ANSI Unified Inch Screw Threads. The most commonly used Unified threads are UN, UNC, UNF in thread pitches associated to the diameter. The thread diameter/pitch combinations are measured by the number of threads per inch (TPI) accompanying each diameter. At Ashwani Imports and Exports, we manufacture studs in a wide variety of ASTM grades and exotic grade high strength alloys. Our Booking for Energy Book section on stud bolts includes many finer details on stud bolts. Like how the ends are finished.",
      alt: "",
      name: "",
      studBoltEnds: "At manufacturer’s option, ends or points may be rounded (oval), sheared, flat or saw cut and chamfered. When rounded, the stud shall have an oval point with a radius equal to approximately one times the basic stud diameter. When flat and chamfered, the end shall be chamfered from a diameter not exceeding the minor diameter of the thread to produce a length of chamfer or incomplete thread approximately equivalent to 2 times the thread pitch.",
      length: "Stud bolt length is commonly measured end to end or first to first. The length of stud bolt, measured parallel to the axis, is the distance from first thread to first thread. First thread is defined as the intersection of the major diameter of the thread with the base of the point.  Stud bolts are normally available in 1/4 in. length increments",
      material: "We can produce Stud Bolts 4  inches in diameter and handle lengths over 4 feet on our state of the art CNCs. We thread metric, UN, UNC, and UNF send us your thread length and a pitch and we’ll go to work for you.",
    },
    {
      id: "2",
      title: "Stud Bolt",
      img: "/assets/images/stud-bolt/stud2.jpeg",
      text: "Used in high pressure bolting situations for pipeline, drilling, petroleum / petrochemical refining and general industry for sealing and flange connections all thread, tap end and double end stud bolts are the lion’s share of the industry. The all thread stud bolt is a threaded rod with 2 heavy hex nuts, while the tap end and double end are nut continuously thread, but have a body in the middle with one nut. In a tap end the short end of the stud bolt is designed with a UNC 3A fit to go into a tapped hole on the body of a larger machined or forged equipment. In a flanged connection the size, length, diameter and number of bolt holes is dependent of flange type and pressure class of flange. Stud Bolt grades and sizes are defined by industry standards in ASTM A193 and ASME B16.5 standards. Standard U.S. bolt threads are defined in ASME / ANSI Unified Inch Screw Threads. The most commonly used Unified threads are UN, UNC, UNF in thread pitches associated to the diameter. The thread diameter/pitch combinations are measured by the number of threads per inch (TPI) accompanying each diameter. At Ashwani Imports and Exports, we manufacture studs in a wide variety of ASTM grades and exotic grade high strength alloys. Our Booking for Energy Book section on stud bolts includes many finer details on stud bolts. Like how the ends are finished.",
      alt: "",
      name: "",
      studBoltEnds: "At manufacturer’s option, ends or points may be rounded (oval), sheared, flat or saw cut and chamfered. When rounded, the stud shall have an oval point with a radius equal to approximately one times the basic stud diameter. When flat and chamfered, the end shall be chamfered from a diameter not exceeding the minor diameter of the thread to produce a length of chamfer or incomplete thread approximately equivalent to 2 times the thread pitch.",
      length: "Stud bolt length is commonly measured end to end or first to first. The length of stud bolt, measured parallel to the axis, is the distance from first thread to first thread. First thread is defined as the intersection of the major diameter of the thread with the base of the point.  Stud bolts are normally available in 1/4 in. length increments",
      material: "We can produce Stud Bolts 4  inches in diameter and handle lengths over 4 feet on our state of the art CNCs. We thread metric, UN, UNC, and UNF send us your thread length and a pitch and we’ll go to work for you.",
    },
    {
      id: "3",
      title: "Stud Bolt",
      img: "/assets/images/stud-bolt/stud3.jpeg",
      text: "Used in high pressure bolting situations for pipeline, drilling, petroleum / petrochemical refining and general industry for sealing and flange connections all thread, tap end and double end stud bolts are the lion’s share of the industry. The all thread stud bolt is a threaded rod with 2 heavy hex nuts, while the tap end and double end are nut continuously thread, but have a body in the middle with one nut. In a tap end the short end of the stud bolt is designed with a UNC 3A fit to go into a tapped hole on the body of a larger machined or forged equipment. In a flanged connection the size, length, diameter and number of bolt holes is dependent of flange type and pressure class of flange. Stud Bolt grades and sizes are defined by industry standards in ASTM A193 and ASME B16.5 standards. Standard U.S. bolt threads are defined in ASME / ANSI Unified Inch Screw Threads. The most commonly used Unified threads are UN, UNC, UNF in thread pitches associated to the diameter. The thread diameter/pitch combinations are measured by the number of threads per inch (TPI) accompanying each diameter. At Ashwani Imports and Exports, we manufacture studs in a wide variety of ASTM grades and exotic grade high strength alloys. Our Booking for Energy Book section on stud bolts includes many finer details on stud bolts. Like how the ends are finished.",
      alt: "",
      name: "",
      studBoltEnds: "At manufacturer’s option, ends or points may be rounded (oval), sheared, flat or saw cut and chamfered. When rounded, the stud shall have an oval point with a radius equal to approximately one times the basic stud diameter. When flat and chamfered, the end shall be chamfered from a diameter not exceeding the minor diameter of the thread to produce a length of chamfer or incomplete thread approximately equivalent to 2 times the thread pitch.",
      length: "Stud bolt length is commonly measured end to end or first to first. The length of stud bolt, measured parallel to the axis, is the distance from first thread to first thread. First thread is defined as the intersection of the major diameter of the thread with the base of the point.  Stud bolts are normally available in 1/4 in. length increments",
      material: "We can produce Stud Bolts 4  inches in diameter and handle lengths over 4 feet on our state of the art CNCs. We thread metric, UN, UNC, and UNF send us your thread length and a pitch and we’ll go to work for you.",
    },
    {
      id: "4",
      title: "Stud Bolt",
      img: "/assets/images/stud-bolt/stud4.jpeg",
      text: "Used in high pressure bolting situations for pipeline, drilling, petroleum / petrochemical refining and general industry for sealing and flange connections all thread, tap end and double end stud bolts are the lion’s share of the industry. The all thread stud bolt is a threaded rod with 2 heavy hex nuts, while the tap end and double end are nut continuously thread, but have a body in the middle with one nut. In a tap end the short end of the stud bolt is designed with a UNC 3A fit to go into a tapped hole on the body of a larger machined or forged equipment. In a flanged connection the size, length, diameter and number of bolt holes is dependent of flange type and pressure class of flange. Stud Bolt grades and sizes are defined by industry standards in ASTM A193 and ASME B16.5 standards. Standard U.S. bolt threads are defined in ASME / ANSI Unified Inch Screw Threads. The most commonly used Unified threads are UN, UNC, UNF in thread pitches associated to the diameter. The thread diameter/pitch combinations are measured by the number of threads per inch (TPI) accompanying each diameter. At Ashwani Imports and Exports, we manufacture studs in a wide variety of ASTM grades and exotic grade high strength alloys. Our Booking for Energy Book section on stud bolts includes many finer details on stud bolts. Like how the ends are finished.",
      alt: "",
      name: "",
      studBoltEnds: "At manufacturer’s option, ends or points may be rounded (oval), sheared, flat or saw cut and chamfered. When rounded, the stud shall have an oval point with a radius equal to approximately one times the basic stud diameter. When flat and chamfered, the end shall be chamfered from a diameter not exceeding the minor diameter of the thread to produce a length of chamfer or incomplete thread approximately equivalent to 2 times the thread pitch.",
      length: "Stud bolt length is commonly measured end to end or first to first. The length of stud bolt, measured parallel to the axis, is the distance from first thread to first thread. First thread is defined as the intersection of the major diameter of the thread with the base of the point.  Stud bolts are normally available in 1/4 in. length increments",
      material: "We can produce Stud Bolts 4  inches in diameter and handle lengths over 4 feet on our state of the art CNCs. We thread metric, UN, UNC, and UNF send us your thread length and a pitch and we’ll go to work for you.",
    },
  ];

  // Find the anchor bolt by ID
  const studBoltDetails = studBolt.find(item => item.id === params.studBoltId);

  if (!studBoltDetails) {
    return <p>Stud Bolt not found</p>;
  }

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
      <div className='container'>
          <div className='row align-items-center' key={studBoltDetails.id}>
            <div className='col-md-4'>
            <div className={styles.imageWrapper}>
              <Image src={studBoltDetails.img} alt={studBoltDetails.alt} height={300} width={300} />
            </div>  
            </div>
            <div className='col-md-8'>
              <div className={styles.contentWrapper}>
                    <h2>{studBoltDetails.title}</h2>
                    <p>{studBoltDetails.text}</p>
                </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
                <div className="table-responsive py-5"> 
                    <table className="table table-bordered table-hover">
                    <tbody className={styles.tableWrapper}>
                        <tr>
                        <th scope="col">Stud Bolt Ends</th>
                        <td scope="col"> {studBoltDetails.studBoltEnds}</td>
                        </tr>
                        <tr>
                        <th scope="row">Length</th>
                        <td>{studBoltDetails.length}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{studBoltDetails.material}</td>                        
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
          </div>
      </div>
    </>
  );
}
export default page;
