'use client'
import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';

function page({ params }) {
  const screw = [
    {
        id: "1",
        title: "Chipboard Screw",
        img: "/assets/images/screw/chipboard-screw.png",
        text: "The Chipboard Screw has a coarse thread and a fine shank to maximise grip into chipboard, MDF and other soft timbers. The head has nibs which helps to remove chipboard particles when countersinking.  They are self-tapping, so you do not need to drill a pilot hole. The screw will cut a thread into the material itself. Chipboard screws have a thin shaft to prevent the material from splitting. Their coarse threads help to secure the screws into the chipboard. They are the best type of screw to fasten chipboard to another piece of chipboard or to fasten chipboard to wood, but they also have various applications across different industries.",
        alt: "Chipboard Screw",
        name: "Chipboard Screw",
        dimension: "",
        surface: "plain",
        material: "stainless steel316",
        standard: "",
        nonStandard: "OEM is available, according to drawing or samples",
        samples: "Samples are free.",
        package: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "T/T or L/C",
    }, 
    {
        id: "2",
        title: "Hex Socket Screw",
        img: "/assets/images/screw/hex-socket-screw.png",
        text: "Socket screws have a hexagonal drive and are designed to be used with an allen key, which can be beneficial if the work is being done in a confined space. Allen key bolts offer increased performance and ease of tightening with higher torque and lightweight construction. Available in a range of lengths and widths.",
        alt: "Hex Socket Screw",
        name: "Hex Socket Screw",
        dimension: "M8-M24",
        surface: "plain",
        material: "stainless steel316",
        standard: "JB /T 1709",
        nonStandard: "OEM is available, according to drawing or samples",
        samples: "Samples are free.",
        package: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "T/T or L/C",
    }, 
    {
        id: "3",
        title: "Machine Screw",
        img: "/assets/images/screw/machine-screw.png",
        text: "Machine screws are blunt ended screws used to fasten metal parts together. Usually made from brass, steel or stainless steel and also come with coatings such as brass, copper, nickel and galvanized which help to deter rust. Machine screws have the four basic head types flathead, roundhead, oval head and fillister head. ",
        alt: "Machine Screw",
        name: "Machine Screw",
        dimension: "#2-1/2”  M2-M12",
        surface: "Zinc Plated(Clear/Blue/Yellow/Black),Nickel, Chrome,PTFE,Dacromet,Geomet,Magni.",
        material: "Carbon Steel(Q235, C1018, C1022,  CH22A, #35, #45,),Stainless Steel, Brass",
        standard: "ASME B18.6.3 DIN84 DIN85 DIN963 DIN964 DIN965 DIN966 DIN7985",
        nonStandard: "",
        samples: "",
        package: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        payment: "	T/T, L/C,West union,Paypal.etc",
    }, 
    {
        id: "4",
        title: "Security Screw",
        img: "/assets/images/screw/security-screw.png",
        text: "Security screws are designed to stop theft and vandalism. A security screw makes it more difficult for the vandal or criminal to get access to their target. Tamper-resistant screws require a special tool, which the vandal or criminal is unlikely to have access to.",
        alt: "Security Screw",
        name: "Security Screw",
        dimension: "M8-M24",
        surface: "plain",
        material: "stainless steel304",
        standard: "DIN",
        nonStandard: "OEM is available, according to drawing or samples",
        samples: "Samples are free.",
        package: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "T/T or L/C",
    }, 
    {
        id: "5",
        title: "Self Drilling Screw",
        img: "/assets/images/screw/self-drilling-screw.png",
        text: "Self Drillng Screw can be identified by the drill bit shaped point of the screw and are designed for a variety of applications such as fastening metal to metal and metal to wood. Self-drilling screws do not require a pilot hole, which accelerates installation time and lowers the cost and need of additional drill bits. This extra functionality and cost saving feature makes self-drilling screws the clear choice for metal building construction.",
        alt: "Self Drilling Screw",
        name: "Self Drilling Screw",
        dimension: "#4-1/2”",
        surface: "Zinc Plated(Clear/Blue/Yellow/Black),HDG, PTFE.",
        material: "Carbon Steel(C1018, C1022,  CH22A),Stainless Steel",
        standard: "	ASME B18.6.4 & SAE J78  DIN7504K， DIN7504P，DIN7504N",
        nonStandard: "",
        samples: "",
        package: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        payment: "T/T, L/C,West union,Paypal.etc",
    }, 
    {
        id: "6",
        title: "Set Screw",
        img: "/assets/images/screw/set-screw.png",
        text: "Set screws are designed to secure sliding or moving components in place by fastening one object inside of the other and tightening. They have threaded inserts rather than screw grooves. They are commonly used in engineering and many industries. The range comes in a variety of sizes to suit your needs.",
        alt: "Set Screw",
        name: "Set Screw",
        dimension: "M2-M100",
        surface: "",
        material: "",
        standard: "DIN",
        nonStandard: "OEM is available, according to drawing or samples",
        samples: "Samples are free.",
        package: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "	T/T or L/C",
    }, 
    {
        id: "7",
        title: "Wood Screw",
        img: "/assets/images/screw/wood-screw.png",
        text: "Wood screws are specifically designed for connecting wood to wood. They usually require pre-drilled holes.Suitable for a variety of jobs our wood screw range contains features such as shanks that reduce wood split, twin threads for a fast and accurate drive and tips that do not require any pre-drilling.",
        alt: "Wood Screw",
        name: "Wood Screw",
        dimension: "M2-M100",
        surface: "",
        material: "",
        standard: "DIN",
        nonStandard: "OEM is available, according to drawing or samples",
        samples: "Samples are free.",
        package: "Pack the box first and put it in the carton, or according to customers' requirement.",
        payment: "	T/T or L/C",
    }, 
  ];

  // Find the anchor bolt by ID
  const screwDetails = screw.find(item => item.id === params.screwId);

  if (!screwDetails) {
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
          <div className='row align-items-center' key={screwDetails.id}>
            <div className='col-md-4'>
              <div className={styles.imageWrapper}>
                <Image src={screwDetails.img} alt={screwDetails.alt} height={300} width={300} />
              </div>
            </div>
            <div className='col-md-8'>
                <div className={styles.contentWrapper}>
                    <h2>{screwDetails.title}</h2>
                    <p>{screwDetails.text}</p>
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
                        <td scope="col"> {screwDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Dimension</th>
                        <td>{screwDetails.dimension}</td>
                        </tr>
                        <tr>
                        <th scope="row">Surface</th>
                        <td>{screwDetails.surface}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{screwDetails.material}</td>
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{screwDetails.standard}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Non-standards</th>
                        <td>{screwDetails.nonStandard}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Samples</th>
                        <td>{screwDetails.samples}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Package</th>
                        <td>{screwDetails.package}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Payment</th>
                        <td>{screwDetails.payment}</td>  
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
