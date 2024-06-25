import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'

function machinery() {
    const cards = [
        {
            id: "1",
            title: "Bandsaw",
            img: "/assets/images/machines/bandsaw.png",
            text: "DOUBLE COLOUMN BANSAW MACHINE SIZE 10MM TO 600MM DIA",
            alt: "",
        },
        {
          id: "2",
          title: "Threading Machine",
          img: "/assets/images/machines/lincoN.jpeg",
          text: "LINCO Threading Machine - For any type of threading MM / UNC / UNF 6mm to 100mm Capcity",
          alt: "",
        },
        {
          id: "3",
          title: "Milling Machine",
          img: "/assets/images/machines/millingN.jpeg",
          text: "The milling machine is a type of machine which removes the material from the workpiece by feeding the work past a rotating multipoint cutter. The metal removal rate is higher very high as the cutter has a high speed and many cutting edges.",
          alt: "",
        },
        {
          id: "4",
          title: "Power Press",
          img: "/assets/images/machines/powerP.jpeg",
          text: "A Power Press Machine is used for cutting metal in a particular shape. It is a machine with a controlled system that is used for processing various types of sheet metal. A multipurpose machine,  it is used for shaping and cutting at the same time. This machine is mainly used in metal - 5 TON TO 600 TON CAPACITY",
          alt: "",
      },
      {
        id: "5",
        title: "Drilling Machine",
        img: "/assets/images/machines/drilling.png",
        text: "HEAVY DUTY DRILL MACHINE AND RADIAL DRILLING MACHINE UPTO 72MM DRILLING",
        alt: "",
      },
      {
        id: "6",
        title: "Lathe Machine",
        img: "/assets/images/machines/lathemachine.jpg",
        text: "A Lathe machine tolls that rotates a workpiece about an axis of rotation to perform various operations such as cutting, sanding, knerling, drilling, dformation, facting, threading and turning with tolls that are applied to the workpeice to create an object with symmetry about that axis.",
        alt: "",
      },
    ]  
  return (
    
    // <div className={styles.content}>
    //     <div className='container'>
    //     <div className='row justify-content-center mb-5 mt-5'>
    //         <div className='col-md-4'>
    //             <div className={styles.wrapper}>
    //             <Image src='/assets/images/machines/bandsaw.png' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
    //             <strong>Bandsaw</strong>
    //             {/* <p>DOUBLE COLOUMN BANSAW MACHINE SIZE 10MM TO 600MM DIA</p> */}
    //             </div>
    //         </div>
    //         <div className='col-md-4'>
    //         <div className={styles.wrapper}>
    //             <Image src='/assets/images/machines/linco.jpg' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
    //             <strong>Threading Machine</strong>
    //             {/* <p>LINCO Threading Machine - For any type of threading MM / UNC / UNF 6mm to 100mm Capcity</p> */}
    //         </div>
    //         </div>
    //         <div className='col-md-4'>
    //         <div className={styles.wrapper}>
    //             <Image src='/assets/images/machines/millingmach.jpg' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
    //             <strong>Milling Machine</strong>
    //             <p></p>
    //         </div>
    //         </div>
    //         <div className='col-md-4'>
    //         <div className={styles.wrapper}>
    //             <Image src='/assets/images/machines/power-press.jpg' className={styles.imgBorder} width={400} height={400} alt='bandsaw' />
    //             <strong>Power Press</strong>
    //             {/* <p> A Power Press Machine is used for cutting metal in a particular shape. It is a machine with a controlled system that is used for processing various types of sheet metal. A multipurpose machine,  it is used for shaping and cutting at the same time. This machine is mainly used in metal - 5 TON TO 600 TON CAPACITY</p> */}
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // </div>
    <div className='container'>
        <div className={styles.machine}>
            {cards.map((link=>(
                <div className={styles.machineWrapper} key={link.id}>
                    <div className={styles.machineCard}>
                        <div className={styles.imgBox}>
                        <Image src={link.img} layout="fill" alt='stamping' />
                        </div>
                        <div className={styles.machineContent}>
                            <h2>{link.title}</h2>
                            <p>
                            {link.text}
                            </p>
                        </div>
                    </div>
                </div>
            )))}    
        </div>
    </div>
  )
}

export default machinery