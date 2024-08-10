'use client'
import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

function page({ params }) {
  const anchorBolt = [
    {
      id: "1",
      title: "J Anchor Bolt",
      img: "/assets/images/anchor-bolt/bolt-j.jpeg",
      text: "J type anchor bolts are a specific type of bolt used for anchoring structures to concrete. They are named for their J shaped design, which provides a secure and stable connection. J type anchor bolts have a hook-like end and are often used in applications where the bolt needs to be inserted into a pre-drilled hole in the concrete. The hook at the end of the bolt helps to prevent it from pulling out of the concrete when there is tension or load applied to it. These bolts are commonly used in construction and infrastructure projects, such as securing steel columns or beams to concrete foundations. They are also used for anchoring machinery, equipment, and other heavy objects to concrete floors. When installing J type anchor bolts, it is important to ensure that the hole is the correct size and depth, and that the bolt is properly tightened to achieve the desired level of anchoring strength. It is also important to follow manufacturer's instructions and any applicable construction codes and regulations",
      alt: "ANCHOR BOLT J TYPE",
      name: "ANCHOR BOLT J TYPE",
      dimension: "M12 to M72",
      surface: "GI, HDG, PTFE COATED",
      material: "A36, S235, S275RJ, 8.8, B7, SS304, SS316",
      standard: "ISO, ASTM , AISI, BS",
      nonStandards: "CUSTOMIZE",
      samples: "ON REQUEST",
      package: "10 PCS EACH ASSEMBLED WITH NUT/WASHER/PLATES",
    },
    {
      id: "2",
      title: "I-type Anchor Bolt",
      img: "/assets/images/anchor-bolt/I-anchorBolt.jpeg",
      text: "Foundation Anchor Bolts ‘I’ Type are used to connect structural and non-structural elements to concrete. The connection can be made by a variety of different components; anchor bolts or fasteners, steel plates or stiffeners. Anchor bolts transfer different types of load which are tension forces and shear forces.",
      alt: "I-type Anchor",
      name: "I-type Anchor",
      dimension: "M12 to M72",
      surface: "GI, HDG, PTFE COATED",
      material: "A36, S235, S275RJ, 8.8, B7, SS304, SS316",
      standard: "ISO, ASTM , AISI, BS",
      nonStandards: "CUSTOMIZE",
      samples: "ON REQUEST",
      package: "10 PCS EACH ASSEMBLED WITH NUT/WASHER/PLATES",
    },
    {
      id: "3",
      title: "L-type Anchor Bolt",
      img: "/assets/images/anchor-bolt/l-type.jpeg",
      text: "Foundation Anchor Bolts “L” Type are used to connect structural and non-structural elements to concrete. The connection can be made by a variety of different components; anchor bolts or fasteners, steel plates or stiffeners. Anchor bolts transfer different types of load which are tension forces and shear forces.",
      alt: "L-type Anchor",
      name: "L-type Anchor",
      dimension: "M12 to M72",
      surface: "GI, HDG, PTFE COATED",
      material: "A36, S235, S275RJ, 8.8, B7, SS304, SS316",
      standard: "ISO, ASTM , AISI, BS",
      nonStandards: "CUSTOMIZE",
      samples: "ON REQUEST",
      package: "10 PCS EACH ASSEMBLED WITH NUT/WASHER/PLATES",
    },
  ];

  // Find the anchor bolt by ID
  const anchorBoltDetails = anchorBolt.find(item => item.id === params.anchorBoltId);

  if (!anchorBoltDetails) {
    return <p>Anchor Bolt not found</p>;
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
          <div className='row align-items-center' key={anchorBoltDetails.id}>
            <div className='col-md-4'>
            <div className={styles.imageWrapper}>
              <Image src={anchorBoltDetails.img} alt={anchorBoltDetails.alt} height={300} width={300} />
            </div>  
            </div>
            <div className='col-md-8'>
              <div className={styles.contentWrapper}>
                    <h2>{anchorBoltDetails.title}</h2>
                    <p>{anchorBoltDetails.text}</p>
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
                        <td scope="col"> {anchorBoltDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Dimension</th>
                        <td>{anchorBoltDetails.dimension}</td>
                        </tr>
                        <tr>
                        <th scope="row">Surface</th>
                        <td>{anchorBoltDetails.surface}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{anchorBoltDetails.material}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{anchorBoltDetails.standard}</td>
                        </tr>
                        <tr>
                        <th scope="row">Non-standards</th>
                        <td>{anchorBoltDetails.nonStandards}</td>  
                        </tr>
                        <tr>
                        <th scope="row">samples</th>
                        <td>{anchorBoltDetails.samples}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Package</th>
                        <td>{anchorBoltDetails.package}</td>  
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
