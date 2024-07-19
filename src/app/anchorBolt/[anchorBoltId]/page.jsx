import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'

function page({ params }) {
  const anchorBolt = [
    {
      id: "1",
      title: "Anchor Bolts",
      img: "/assets/images/anchor-bolt/bolts.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore repellat magnam. Placeat exercitationem rerum, explicabo magnam mollitia quisquam nulla unde ab cumque ipsam, consequatur deserunt quae molestias ullam repellat.",
      alt: "Anchor Bolts",
      name: "Anchor Bolts",
      dimension: "",
      surfance: "",
      material: "",
      standard: "custom",
      nonStandards: "",
      samples: "",
      package: "",
    },
    {
      id: "2",
      title: "J Anchor Bolt",
      img: "/assets/images/anchor-bolt/bolt-j.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore repellat magnam. Placeat exercitationem rerum, explicabo magnam mollitia quisquam nulla unde ab cumque ipsam, consequatur deserunt quae molestias ullam repellat.",
      alt: "J Anchor Bolt",
      name: "J Anchor Bolt",
      dimension: "",
      surfance: "",
      material: "",
      standard: "custom",
      nonStandards: "",
      samples: "",
      package: "",
    },
    {
      id: "3",
      title: "J-type Anchor",
      img: "/assets/images/anchor-bolt/j-type.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore repellat magnam. Placeat exercitationem rerum, explicabo magnam mollitia quisquam nulla unde ab cumque ipsam, consequatur deserunt quae molestias ullam repellat.",
      alt: "J-type Anchor",
      name: "J-type Anchor",
      dimension: "",
      surfance: "",
      material: "",
      standard: "custom",
      nonStandards: "",
      samples: "",
      package: "",
    },
    {
      id: "4",
      title: "L-type Anchor",
      img: "/assets/images/anchor-bolt/l-type.jpeg",
      text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore repellat magnam. Placeat exercitationem rerum, explicabo magnam mollitia quisquam nulla unde ab cumque ipsam, consequatur deserunt quae molestias ullam repellat.",
      alt: "L-type Anchor",
      name: "L-type Anchor",
      dimension: "",
      surfance: "",
      material: "",
      standard: "custom",
      nonStandards: "",
      samples: "",
      package: "",
    },
  ];

  // Find the anchor bolt by ID
  const anchorBoltDetails = anchorBolt.find(item => item.id === params.anchorBoltId);

  if (!anchorBoltDetails) {
    return <p>Anchor Bolt not found</p>;
  }

  return (
    <>
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
                        <th scope="row">Surfance</th>
                        <td>{anchorBoltDetails.surfance}</td>
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
