import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'

function page({ params }) {
  const stamping = [
    {
        id: "1",
        title: "Furniture Corner Braces L Shaped Stainless Steel Brackets",
        img: "/assets/images/stamping-parts/stamping1.png",
        text: "The triangle bracket can bear the pressure of 100KG, easy and quick installation, after surface treatment, not easy to rust, and save space, can fully meet your needs, I hope to help you.",
        alt: "Furniture Corner Braces L Shaped Stainless Steel Brackets",
        name: "Furniture Corner Braces L Shaped Stainless Steel Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "3/16”;1/4”",
        productionProcess: "1 1/2; 1 3/4",
        customizedProductsLeadtime: "Clean",
    }, 
    {
        id: "2",
        title: "Stainless Steel L Type Corner Brace Bracket",
        img: "/assets/images/stamping-parts/stamping2.png",
        text: "There are many kinds of brackets, generally divided into suspended ceiling type, wall type, wall stretch type. Among them, there is a vertical angle adjustable type in the wall type bracket, generally used in entertainment occasions.",
        alt: "Stainless Steel L Type Corner Brace Bracket",
        name: "Stainless Steel L Type Corner Brace Bracket",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "3",
        title: "Z Shaped Corner Brace Stainless Steel Bracket",
        img: "/assets/images/stamping-parts/stamping3.png",
        text: "Z Shaped Corner Brace Stainless Steel Bracket can be seen everywhere in our life, and their application scenarios are extremely wide: hydraulic bracket, solar bracket, cable bracket, cable ditch bracket, photovoltaic power station bracket, mining bracket,notebook bracket, air conditioning bracket, pipe bracket, camera bracket, greenhouse bracket, etc.",
        alt: "Z Shaped Corner Brace Stainless Steel Bracket",
        name: "Z Shaped Corner Brace Stainless Steel Bracket",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "4",
        title: "L Shaped Stainless Steel Brackets",
        img: "/assets/images/stamping-parts/stamping4.png",
        text: "Fix bracket on the wall, put the plank such as board, can make beautiful and easy triangle bracket.Fixed bracket, micro Boiler bracket, bracket,and so on can be installed in the room, you can put computers, cosmetics, interesting furnishings on it, your furniture can also be installed in the triangle bracket.",
        alt: "L Shaped Stainless Steel Brackets",
        name: "L Shaped Stainless Steel Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "5",
        title: "L Shaped Corner Braces Countertop Support Brackets",
        img: "/assets/images/stamping-parts/stamping5.png",
        text: "The L Shaped Corner Braces Countertop Support Brackets is fixed on the wall, put boards and other plates, can become a beautiful and generous triangular bracket, fixed bracket, micro boiler bracket, bracket, tripod, shelving, shelves, bookshelves, flower racks, wall shelf bracket and so on.",
        alt: "L Shaped Corner Braces Countertop Support Brackets",
        name: "L Shaped Corner Braces Countertop Support Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "6",
        title: "Heavy Duty Stainless Steel Shelf Brackets",
        img: "/assets/images/stamping-parts/stamping6.png",
        text: "The Stainless Steel Shelf Brackets can bear the pressure of 100KG, easy and quick installation, after surface treatment, not easy to rust, and save space.",
        alt: "Heavy Duty Stainless Steel Shelf Brackets",
        name: "Heavy Duty Stainless Steel Shelf Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "7",
        title: "Stainless Steel U Shaped Brackets",
        img: "/assets/images/stamping-parts/stamping7.png",
        text: "The Stainless Steel U Shaped Brackets is used to bear the load and the main connection part of the composition furniture, namely the main frame of the force.",
        alt: "Stainless Steel U Shaped Brackets",
        name: "Stainless Steel U Shaped Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "8",
        title: "Slotted Adjustable Heavy Duty L Shaped Brackets",
        img: "/assets/images/stamping-parts/stamping8.png",
        text: "The appearance of the Heavy Duty L Shaped Brackets can be convenient for you to use, our brackets can bear the pressure of 100KG, easy and quick installation, surface treatment will not rust, and save space, they can fully meet your needs.",
        alt: "Slotted Adjustable Heavy Duty L Shaped Brackets",
        name: "Slotted Adjustable Heavy Duty L Shaped Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "9",
        title: "L Shape Stainless Steel Corner Brace Bracket",
        img: "/assets/images/stamping-parts/stamping9.png",
        text: "L Shape Stainless Steel Bracket is fixed on the wall, put the plank such as board next go up, can do a beautiful and easy triangle bracket. bracket can be installed in the room and products such as computers, cosmetics and furniture can be placed on them. In the kitchen, it can be used as a mini boiler bracket, a microwave oven, a condiment box, etc., and there are many other uses.",
        alt: "L Shape Stainless Steel Corner Brace Bracket",
        name: "L Shape Stainless Steel Corner Brace Bracket",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "10",
        title: "Corner Brace Stainless Steel Heavy Duty Angle Brackets",
        img: "/assets/images/stamping-parts/stamping10.png",
        text: "The Stainless Steel Heavy Duty Brackets is fixed on the wall, put boards and other plates, can become a beautiful and generous triangular bracket, fixed bracket, micro boiler bracket, bracket, tripod, shelving, shelves, bookshelves, flower racks, wall shelf bracket and so on.",
        alt: "Corner Brace Stainless Steel Heavy Duty Angle Brackets",
        name: "Corner Brace Stainless Steel Heavy Duty Angle Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "11",
        title: "Stainless Steel Z Shaped Angle Brackets",
        img: "/assets/images/stamping-parts/stamping11.png",
        text: "Stainless Steel Z Shaped Angle Brackets are widely used and can be seen everywhere in our life. The bracket is fixed on the wall, put boards and other plates, can become a beautiful and generous triangular bracket, fixed bracket, micro boiler bracket, bracket, tripod, shelving, shelves, bookshelves, flower racks, wall shelf bracket and so on.",
        alt: "Stainless Steel Z Shaped Angle Brackets",
        name: "Stainless Steel Z Shaped Angle Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
    {
        id: "12",
        title: "Heavy Duty Stainless Steel Angle Brackets",
        img: "/assets/images/stamping-parts/stamping12.png",
        text: "Fix Stainless Steel Angle Brackets on the wall, put the plank such as board, can make beautiful and easy triangle bracket. Shelves, bookshelves, flower racks, you can interesting furnishings on it, and you can also put the seasoning box.",
        alt: "Heavy Duty Stainless Steel Angle Brackets",
        name: "Heavy Duty Stainless Steel Angle Brackets",
        standard: "DIN, ASTM/ASME, JIS, EN, ISO, AS, GB",
        material: "Stainless Steel: SS201, SS304, SS316; Carbon Steel: Gr A2; Aluminum",
        finishing: "Plain, Sand Blasting, Polishing",
        productionProcess: "Cold Froging, Machining and CNC, Stamping, Welding, Bending",
        customizedProductsLeadtime: "Busy season: 15-30days, Slack seaon: 10-15days",
    }, 
  ];

  // Find the anchor bolt by ID
  const stampingDetails = stamping.find(item => item.id === params.stampingId);

  if (!stampingDetails) {
    return <p>Anchor Bolt not found</p>;
  }

  return (
    <>
      <div className='container'>
          <div className='row align-items-center' key={stampingDetails.id}>
            <div className='col-md-4'>
              <div className={styles.imageWrapper}>
                <Image src={stampingDetails.img} alt={stampingDetails.alt} height={300} width={300} />
              </div>
            </div>
            <div className='col-md-8'>
                <div className={styles.contentWrapper}>
                    <h2>{stampingDetails.title}</h2>
                    <p>{stampingDetails.text}</p>
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
                        <td scope="col"> {stampingDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{stampingDetails.standard}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{stampingDetails.material}</td>
                        </tr>
                        <tr>
                        <th scope="row">Finishing</th>
                        <td>{stampingDetails.finishing}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Production Process</th>
                        <td>{stampingDetails.productionProcess}</td>
                        </tr>
                        <tr>
                        <th scope="row">Customized Products Lead time</th>
                        <td>{stampingDetails.customizedProductsLeadtime}</td>  
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
