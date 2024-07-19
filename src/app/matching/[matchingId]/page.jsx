import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'

function page({ params }) {
  const matching = [
    {
      id: "1",
      title: "Stainless Steel O Type Lock Pin",
      img: "/assets/images/matching-parts/0-type-lockpin.png",
      text: "​Wire lock pins are like having pin and cotter in one secure assembly. The wire loop is pulled over the end of the pin to lock it in place or remove it. As a one-piece quick locking pin, Wire Lock Pins eliminate cotter pin loss and fit most Quick-Release applications.",
      alt: "O Type Lock Pin",
      name: "O Type Lock Pin",
      material: "Stainless Steel",
      size: "3/16”;1/4”",
      length: "1 1/2; 1 3/4",
      surface: "Clean",
      OEM: "Available",
      measurementSystem: "",
      grade: "",
    },
    {
        id: "2",
        title: "Quick Release Ball Lock Pin with Ring Button",
        img: "/assets/images/matching-parts/ball-lock-pin.png",
        text: "Quick release pins are offered in a variety of styles and materials, such as double act pin, push pull pins,detent pins and many other pins.",
        alt: "Quick Release Ball Lock Pin with Ring Button",
        name: "Quick Release Ball Lock Pin with Ring Button",
        material: "Stainless Steel",
        size: "3/16”-1”",
        length: "1/2”-7",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
      id: "3",
      title: "Stainless Steel Cam Action Indexing Plunger",
      img: "/assets/images/matching-parts/cam-action-indexin.png",
      text: "Cam Action Indexing Plunger are kinetic, multi-part standard parts for fast, reliable locking of moving parts. No tools are required to operate them. Detent pins, also called indexing plungers, guarantee high holding forces and secure fixation in combination with simple handling. ",
      alt: "Stainless Steel Cam Action Indexing Plunger",
      name: "Stainless Steel Cam Action Indexing Plunger",
      material: "Stainless Steel",
      size: "M4-M12",
      length: "37.5mm-69mm",
      surface: "Clean",
      OEM: "Available",
      measurementSystem: "",
      grade: "",
    },
    {
        id: "4",
        title: "Quick Release Ball Lock Pin with Mounting Lanyard",
        img: "/assets/images/matching-parts/ball-mounting-lanyard.png",
        text: "Quick Release Pins are mainly used in applications requiring rapid, frequent and manual assembly and disassembly of products. When installed, a spring loaded ball projects out of the pin shaft into a hole or detent, locking the pin in place. Quick release pins are offered in a variety of styles and materials, such as double act pin, push pull pins,detent pins and many other pins.",
        alt: "Quick Release Ball Lock Pin with Mounting Lanyard",
        name: "Quick Release Ball Lock Pin with Mounting Lanyard",
        material: "Stainless Steel",
        size: "M5-M25",
        length: "10mm-100mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "5",
        title: "Stainless Steel Quick Release Ball Locking Pin",
        img: "/assets/images/matching-parts/d-ring.png",
        text: "Quick Release Pins are mainly used in applications requiring rapid, frequent and manual assembly and disassembly of products. Quick release pins are offered in a variety of styles and materials, such as double act pin, push pull pins,detent pins and many other pins.",
        alt: "Stainless Steel Quick Release Ball Locking Pin",
        name: "Stainless Steel Quick Release Ball Locking Pin",
        material: "Stainless Steel",
        size: "",
        length: "",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "Inch; Metric",
        grade: "A2/A4",
      },
      {
        id: "6",
        title: "Stainless Steel Double End Clevis Pin",
        img: "/assets/images/matching-parts/double-end-clevis.png",
        text: "Double End Clevis Pin are a type of fastener that will allow the rotation or swivel of the connected parts about the axis of the pin linkage.",
        alt: "Stainless Steel Double End Clevis Pin",
        name: "Stainless Steel Double End Clevis Pin",
        material: "Stainless Steel",
        size: "",
        length: "",
        surface: "Plain",
        OEM: "",
        measurementSystem: "Inch; Metric",
        grade: "A2/A4",
      },
      {
        id: "7",
        title: "Stainless Steel Hand Retractable Spring Plungers",
        img: "/assets/images/matching-parts/hand-retractable.png",
        text: "Hand Retractable Spring Plungers are kinetic, multi-part standard parts for fast, reliable locking of moving parts. No tools are required to operate them.",
        alt: "Stainless Steel Hand Retractable Spring Plungers",
        name: "Stainless Steel Hand Retractable Spring Plungers",
        material: "Stainless Steel",
        size: "",
        length: "",
        surface: "Plain",
        OEM: "",
        measurementSystem: "Inch; Metric",
        grade: "A2/A4",
      },
      {
        id: "8",
        title: "Stainless Steel Male-female Hex Standoffs",
        img: "/assets/images/matching-parts/male-female-hex.png",
        text: "​This is a brass hex body threaded male female standoff. Standoff is a threaded fastener used to hold two parts a set distance apart. At each end a standoff may have a threaded shaft (male) or a threaded hole (female).",
        alt: "Stainless Steel Male-female Hex Standoffs",
        name: "Stainless Steel Male-female Hex Standoffs",
        material: "Stainless Steel",
        size: "",
        length: "",
        surface: "Plain",
        OEM: "",
        measurementSystem: "Inch; Metric",
        grade: "A2/A4",
      },
      {
        id: "9",
        title: "Stainless Steel R Clip Cotter Pin",
        img: "/assets/images/matching-parts/r-clip-clotter-pin.png",
        text: "R-clips are also known as hitch pin clips and hairpin cotter pins , these pins are easy to install and remove. Use them to secure the ends of clevis pins and shafts to keep components in place.",
        alt: "Stainless Steel R Clip Cotter Pin",
        name: "Stainless Steel R Clip Cotter Pin",
        material: "Stainless Steel",
        size: "",
        length: "",
        surface: "Plain",
        OEM: "Available",
        measurementSystem: "Inch; Metric",
        grade: "A2/A4",
      },
      {
        id: "10",
        title: "Stainless Steel Spring Ball Plunger",
        img: "/assets/images/matching-parts/spring-ball.png",
        text: "Spring plungers are used for indexing and accurate positioning of components and come in a variety of metric and standard sizes. These components use spring-force to apply pressure so that the ball or nose will remain positioned. These plungers have different installation methods including hex socket, slotted drive and top slot for blind-holes and have light, standard, or heavy end forces available to them.",
        alt: "Stainless Steel Spring Ball Plunger",
        name: "Stainless Steel Spring Ball Plunger",
        material: "Stainless Steel",
        size: "",
        length: "",
        surface: "Plain",
        OEM: "Available",
        measurementSystem: "Inch; Metric",
        grade: "A2/A4",
      },
      {
        id: "11",
        title: "Stainless Steel Pull Head Indexing Plunger",
        img: "/assets/images/matching-parts/pull-head.png",
        text: "Pull Head Indexing Plunger are kinetic, multi-part standard parts for fast, reliable locking of moving parts. No tools are required to operate them. Detent pins, also called indexing plungers, guarantee high holding forces and secure fixation in combination with simple handling.",
        alt: "Stainless Steel Pull Head Indexing Plunger",
        name: "Stainless Steel Pull Head Indexing Plunger",
        material: "Stainless Steel",
        size: "M4-M7",
        length: "26.5mm-34mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "12",
        title: "Stainless Steel Pull Knob Indexing Plunger",
        img: "/assets/images/matching-parts/pull-knob-indexing.png",
        text: "Pull Knob Indexing Plunger are kinetic, multi-part standard parts for fast, reliable locking of moving parts. No tools are required to operate them. Detent pins, also called indexing plungers, guarantee high holding forces and secure fixation in combination with simple handling. ",
        alt: "Stainless Steel Pull Knob Indexing Plunger",
        name: "Stainless Steel Pull Knob Indexing Plunger",
        material: "Stainless Steel",
        size: "M5-M10",
        length: "45mm-80mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "13",
        title: "Stainless Steel Quick Release Ball Lock Pin",
        img: "/assets/images/matching-parts/quick-release-ball.png",
        text: "Quick release pins are offered in a variety of styles and materials, such as double act pin, push pull pins,detent pins and many other pins.",
        alt: "Stainless Steel Quick Release Ball Lock Pin",
        name: "Stainless Steel Quick Release Ball Lock Pin",
        material: "Stainless Steel",
        size: "M5-M12",
        length: "10mm-80mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "14",
        title: "Hex Male Female Threaded Standoffs",
        img: "/assets/images/matching-parts/male-female-thread.png",
        text: "Standoffs are commonly used within electronic assemblies. They are also both used to provide space for cooling airflow and provide electrical insulation. They may be referred to as PCB Standoffs.Common materials for such standoffs are brass, stainless steel, nylon polyoxymethylene (POM), polyvinyl chloride (PVC), and ceramics.",
        alt: "Hex Male Female Threaded Standoffs",
        name: "Hex Male Female Threaded Standoffs",
        material: "Stainless Steel",
        size: "M2-M4",
        length: "4mm-60mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "15",
        title: "Stainless Steel Ring Pull Index Plunger",
        img: "/assets/images/matching-parts/ring-pull-indexin.png",
        text: "Ring Pull Index Plunger are kinetic, multi-part standard parts for fast, reliable locking of moving parts. No tools are required to operate them. Detent pins, also called indexing plungers, guarantee high holding forces and secure fixation in combination with simple handling.",
        alt: "Stainless Steel Ring Pull Index Plunger",
        name: "Stainless Steel Ring Pull Index Plunger",
        material: "Stainless Steel",
        size: "M6-M16",
        length: "12mm-23mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "16",
        title: "Stainless Steel Female Threaded Hex Standoffs",
        img: "/assets/images/matching-parts/female-hex-standoff.png",
        text: "This is a stainless steel hex body threaded female standoff. Standoff is a threaded fastener used to hold two parts a set distance apart. ",
        alt: "Stainless Steel Female Threaded Hex Standoffs",
        name: "Stainless Steel Female Threaded Hex Standoffs",
        material: "Stainless Steel",
        size: "M2.5-M4",
        length: "4mm-55mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "17",
        title: "Stainless Steel Round Head Grooved Pins",
        img: "/assets/images/matching-parts/round-head-groove.png",
        text: "​Round Head Grooved Pins high shear strength and good wear resistance. Easy to install, a grooved pin requires no reaming or threading of the hole it’s going into. ",
        alt: "Stainless Steel Round Head Grooved Pins",
        name: "Stainless Steel Round Head Grooved Pins",
        material: "Stainless Steel",
        size: "3/16'- 3/4",
        length: "3/8' - 4 1/4",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "18",
        title: "Stainless Steel Slotted Flanged Ball Plunger",
        img: "/assets/images/matching-parts/slotted-flange-ball.png",
        text: "Spring plungers are used for indexing and accurate positioning of components and come in a variety of metric and standard sizes. These components use spring-force to apply pressure so that the ball or nose will remain positioned. These plungers have different installation methods including hex socket, slotted drive and top slot for blind-holes and have light, standard, or heavy end forces available to them.",
        alt: "Stainless Steel Slotted Flanged Ball Plunger",
        name: "Stainless Steel Slotted Flanged Ball Plunger",
        material: "Stainless Steel",
        size: "M5-M16",
        length: "",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "19",
        title: "T Handle Quick Release Ball Lock Pins",
        img: "/assets/images/matching-parts/t-handle-quickball.png",
        text: "Quick release pins are offered in a variety of styles and materials, such as double act pin, push pull pins,detent pins and many other pins.",
        alt: "T Handle Quick Release Ball Lock Pins",
        name: "T Handle Quick Release Ball Lock Pins",
        material: "Stainless Steel",
        size: "M5-M25",
        length: "10mm - 100mm",
        surface: "Clean",
        OEM: "Available",
        measurementSystem: "",
        grade: "",
      },
      {
        id: "20",
        title: "Stainless Steel Wire Lock Pin",
        img: "/assets/images/matching-parts/wire-lock-pin.png",
        text: "Wire lock pins are like having pin and cotter in one secure assembly. The wire loop is pulled over the end of the pin to lock it in place or remove it. As a one-piece quick locking pin, Wire Lock Pins eliminate cotter pin loss and fit most Quick-Release applications.",
        alt: "Stainless Steel Wire Lock Pin",
        name: "Stainless Steel Wire Lock Pin",
        material: "Stainless Steel",
        size: "",
        length: "",
        surface: "Plain",
        OEM: "Available",
        measurementSystem: "Inch; Metric",
        grade: "A2/A4",
      },  
  ];

  // Find the anchor bolt by ID
  const matchingDetails = matching.find(item => item.id === params.matchingId);

  if (!matchingDetails) {
    return <p>Anchor Bolt not found</p>;
  }

  return (
    <>
      <div className='container'>
          <div className='row align-items-center' key={matchingDetails.id}>
            <div className='col-md-4'>
            <div className={styles.imageWrapper}>
              <Image src={matchingDetails.img} alt={matchingDetails.alt} height={300} width={300} />
            </div>  
            </div>
            <div className='col-md-8'>
                <div className={styles.contentWrapper}>
                    <h2>{matchingDetails.title}</h2>
                    <p>{matchingDetails.text}</p>
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
                        <td scope="col"> {matchingDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{matchingDetails.material}</td>
                        </tr>
                        <tr>
                        <th scope="row">Size</th>
                        <td>{matchingDetails.size}</td>
                        </tr>
                        <tr>
                        <th scope="row">Length</th>
                        <td>{matchingDetails.length}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Surface</th>
                        <td>{matchingDetails.surface}</td>
                        </tr>
                        <tr>
                        <th scope="row">OEM</th>
                        <td>{matchingDetails.OEM}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Measurement System</th>
                        <td>{matchingDetails.measurementSystem}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Grade</th>
                        <td>{matchingDetails.grade}</td>  
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
