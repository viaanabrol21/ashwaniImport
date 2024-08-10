'use client'
import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

function page({ params }) {
  const anchor = [
    {
      id: "1",
      title: "Drop Anchor",
      img: "/assets/images/anchor/drop-anchor.png",
      text: "Drop-In Anchors are a low profile, female threaded anchor, suitable for use with machine bolts of any length or with threaded rod. The anchor is set by using a special punch to drive the captive expansion plug fully home. Correct expansion is assured for maximum holding power every time.",
      alt: "Anchor Bolts",
      name: "Drop-In Anchors",
      dimension: "m6 - m200",
      surfance: "plain,zinc plated,stainless steel",
      material: "stainless steel,Carbon Steel,Steel,brass",
      standard: "custom",
      nonStandards: "OEM is available, according to drawing or samples",
      samples: "Samples are free.",
      package: "Pack the box first and put it in the carton, or according to customers' requirement.",
    },
    {
      id: "2",
      title: "Sleeve Anchor",
      img: "/assets/images/anchor/sleeve-anchor.png",
      text: "These anchors can be used in a variety of base materials such as concrete, brick and block. The design of the fixings will determine where they can be used, with stainless steel sleeve anchors more suitable for outdoor, wet environments and zinc plated anchors for indoor, dry environments.",
      alt: "Sleeve Anchor",
      name: "Sleeve Anchor",
      dimension: "",
      surfance: "plain,zinc plated,stainless steel",
      material: "stainless steel,Carbon Steel,Steel,brass",
      standard: "custom",
      nonStandards: "OEM is available, according to drawing or samples",
      samples: "Samples are free.",
      package: "Pack the box first and put it in the carton, or according to customers' requirement.",
    },
    {
      id: "3",
      title: "Wedge Anchor",
      img: "/assets/images/anchor/wedge-anchor.png",
      text: "Wedge anchors' design allows them to anchor fixtures into concrete. Concrete wedge anchors work by inserting them into a hole drilled into concrete. The concrete wedge anchor is then expanded, wedging itself securely in the concrete.",
      alt: "Wedge Anchor",
      name: "Wedge Anchor",
      dimension: "",
      surfance: "plain,zinc plated,stainless steel",
      material: "stainless steel,Carbon Steel,Steel,brass",
      standard: "custom",
      nonStandards: "OEM is available, according to drawing or samples",
      samples: "Samples are free.",
      package: "Pack the box first and put it in the carton, or according to customers' requirement.",
    },
  ];

  // Find the anchor by ID
  const anchorDetails = anchor.find(item => item.id === params.anchorId);

  if (!anchorDetails) {
    return <p>Anchor not found</p>;
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
          <div className='row align-items-center' key={anchorDetails.id}>
            <div className='col-md-4'>
            <div className={styles.imageWrapper}>
              <Image src={anchorDetails.img} alt={anchorDetails.alt} height={300} width={300} />
            </div>  
            </div>
            <div className='col-md-8'>
            <div className={styles.contentWrapper}>
                <h2>{anchorDetails.title}</h2>
                <p>{anchorDetails.text}</p>
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
                        <td scope="col"> {anchorDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Dimension</th>
                        <td>{anchorDetails.dimension}</td>
                        </tr>
                        <tr>
                        <th scope="row">Surfance</th>
                        <td>{anchorDetails.surfance}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{anchorDetails.material}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{anchorDetails.standard}</td>
                        </tr>
                        <tr>
                        <th scope="row">Non-standards</th>
                        <td>{anchorDetails.nonStandards}</td>  
                        </tr>
                        <tr>
                        <th scope="row">samples</th>
                        <td>{anchorDetails.samples}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Package</th>
                        <td>{anchorDetails.package}</td>  
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
