'use client'
import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

function page({ params }) {
  const rivet = [
    {
        id: "1",
        title: "Blind Rivet",
        img: "/assets/images/rivet/blind-rivet.png",
        text: "Blind rivets, a.k.a. break stem rivets, are tubular fasteners with a mandrel through the center. Blind rivets are inserted into drilled holes in the parts to be joined, and a special tool is used to draw the mandrel through the body of the rivet.",
        alt: "Blind Rivet",
        name: "Blind Rivet",
        standard: "",
        diameter: "",
        length: "",
        material: "Copper Steel, Aluminium Steel, Stainless Steel",
        packing: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "T/T or L/C",
    }, 
    {
        id: "2",
        title: "Semi Tubular Rivet",
        img: "/assets/images/rivet/semi-tubular-rivet.png",
        text: "Semi-tubular rivets (also known as tubular rivets) are essentially the same as solid rivets, but with a shallow hole at the tip, opposite the head. This hole causes the tubular portion of the rivet (around the hole) to roll outward when force is applied. ",
        alt: "Semi Tubular Rivet",
        name: "Semi Tubular Rivet",
        standard: "ASME/ANSI B 18.2.2,IFI 128,DIN6334",
        diameter: "1/16” to 3/8”; 0.085”/0.089” and 0.095”/0.099”",
        length: "1/16” to 2-15/16”",
        material: "Aluminum,Brass,Nickel-plated brass,Copper,Steel (plain finish),Zinc-plated steel,stainless steel",
        packing: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "T/T or L/C",
    }, 
    {
        id: "3",
        title: "Solid Rivet",
        img: "/assets/images/rivet/solid-rivet.png",
        text: "Solid rivets are among the simplest, most reliable, and oldest types of fasteners. These simple devices consist of a solid shaft with a head on one end; once installed, the headless end of a solid rivet is deformed with a hammer or rivet gun to hold it in place. Perhaps the most widely-used style of rivet, solid rivets are utilized in applications where reliability and safety are important.",
        alt: "Solid Rivet",
        name: "Solid Rivet",
        standard: "DIN582",
        diameter: "1/2” to 1-3/4”",
        length: "3/32” to 8-1/2”",
        material: "Aluminum,Brass,Copper,Monel,Steel,Stainless steel",
        packing: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "T/T or L/C",
    }, 



  ];

  // Find the anchor bolt by ID
  const rivetDetails = rivet.find(item => item.id === params.rivetId);

  if (!rivetDetails) {
    return <p>Anchor Bolt not found</p>;
  }

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
      <div className='container'>
          <div className='row align-items-center' key={rivetDetails.id}>
            <div className='col-md-4'>
              <div className={styles.imageWrapper}>
                <Image src={rivetDetails.img} alt={rivetDetails.alt} height={300} width={300} />
              </div>
            </div>
            <div className='col-md-8'>
                <div className={styles.contentWrapper}>
                    <h2>{rivetDetails.title}</h2>
                    <p>{rivetDetails.text}</p>
                </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-12'>
                <div className="table-responsive py-5"> 
                    <table className="table table-bordered table-hover">
                    <tbody className={styles.tableWrapper}>
                        <tr>
                        <th scope="col">Name</th>
                        <td scope="col"> {rivetDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{rivetDetails.standard}</td>
                        </tr>
                        <tr>
                        <th scope="row">Diameter</th>
                        <td>{rivetDetails.diameter}</td>
                        </tr>
                        <tr>
                        <th scope="row">Length</th>
                        <td>{rivetDetails.length}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{rivetDetails.material}</td>
                        </tr>
                        <tr>
                        <th scope="row">Packing</th>
                        <td>{rivetDetails.packing}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Payment</th>
                        <td>{rivetDetails.payment}</td>  
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
