import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'

function page({ params }) {
  const bolt = [
    {
        id: "1",
        title: "Eye Bolt",
        img: "/assets/images/bolt/eye-bolt.png",
        text: "Structural Steel; Metal Buliding; Oil&Gas;Tower&Pole; Wind Energy; Mechanical Machine; Automobile: Home Decorating.",
        alt: "Eye Bolt",
        name: "Eye Bolt",
        standard: "ASME/ANSI B 18.15,DIN580",
        diameter: "	1/4”-4 ”, M8-M100",
        length: "≤200mm or 14”",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Geomet,Magni,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "500 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "2",
        title: "T Bolt",
        img: "/assets/images/bolt/t-bolt.png",
        text: "T bolts are basically used in applications providing high diameter which are common in heavy trucks, industrial machinery, off-road equipment, agriculture irrigation, and machinery.",
        alt: "T Bolt",
        name: "T Bolt",
        standard: "ASME B18.5, DIN261,DIN186 or custom demand",
        diameter: "	1/2”-1 1/2”,M12-M36",
        length: "≤800mm or 30”",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Geomet,Magni,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1500 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "3",
        title: "Hex Bolt",
        img: "/assets/images/bolt/hex-bolt.png",
        text: "Hex bolts can be used for many different applications that include fastening wood, steel, and other construction materials for projects such as docks, bridges, highway structures, and buildings.",
        alt: "Hex Bolt",
        name: "Hex Bolt",
        standard: "ASME/ANSI  B 18.2.1,IFI149,DIN931,DIN933,DIN558, DIN601,DIN960, DIN961, ISO4014,ISO4017",
        diameter: "1/4”-2  1/2”,M4-M64",
        length: "≤800mm  or 30”",
        material: "Carbon  Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "UNC,UNF",
        finish: "Plain,Black Oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel,  Chrome,PTFE,Dacromet,Zinc Nickel,Zinteck.",
        packing: "Bulk In Cartons (25kg Max.)+Wood Pallet Or According To Customer Special Demand",
        supplyAbility: "1000 Tons Per Month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T,  L/C, D/A , D/P ,West Union,Paypal.Etc",
        market: "Europe/South&North  Amrica/East&South East Asia/Middle East/Australia And Ect.",
    }, 
    {
        id: "4",
        title: "Carriage Bolt",
        img: "/assets/images/bolt/carriage-bolt.png",
        text: "Carriage bolts (round head with a square neck) are commonly used in wood connections. The square neck under the round head will seat into the hole in the wood to prevent the head from turning.",
        alt: "Carriage Bolt",
        name: "Carriage Bolt",
        standard: "ASME/ANSI B 18.2.1, DIN603",
        diameter: "1/2”-1 1/2”,M12-M36",
        length: "≤800mm or 30”",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Geomet,Magni,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1500 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "5",
        title: "Flange Bolt",
        img: "/assets/images/bolt/flange-bolt.png",
        text: "Flange Bolts are named by the ridge or skirt around the bolt head. A flange bolt is designed to provide the holding power as if a washer was installed. The skirt acts as a distributor of the entire clamping load. Flange bolts help make jobs easier and faster with their multi-feature function.",
        alt: "Flange Bolt",
        name: "Flange Bolt",
        standard: "IFI-111,DIN6921",
        diameter: "1/4”-1 1/2”,M5-M36",
        length: "≤800mm or 30”",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1500 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "6",
        title: "U Bolt",
        img: "/assets/images/bolt/u-bolt.png",
        text: "U bolts are used as framing fasteners and anchors for foundations and roofs, pipe and conduit holders and bolts for motor and engine shaft components.",
        alt: "U Bolt",
        name: "U Bolt",
        standard: "IFI-136,DIN3570 or custom demand",
        diameter: "1/4”-1 1/2”,M12-M36",
        length: "≤800mm or 30”",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Geomet,Magni,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1500 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "7",
        title: "Wing Bolt",
        img: "/assets/images/bolt/wing-bolt.png",
        text: "Wing Bolts, or Wing Screws, featured elongated ‘wings’ that are designed to be easily operated by hand. They can be used with Wing Nuts to create an exceptional fastening that can be adjusted from various positions. ",
        alt: "Wing Bolt",
        name: "Wing Bolt",
        standard: "",
        diameter: "",
        length: "",
        material: "",
        thread: "",
        finish: "",
        packing: "",
        supplyAbility: "",
        tradeTerm: "",
        payment: "",
        market: "",
    }, 
    {
        id: "8",
        title: "Heavy Hex Bolt",
        img: "/assets/images/bolt/heavy-hex-bolt.png",
        text: "Heavy hex bolts can be used for many different applications that include fastening wood, steel, and other construction materials for projects such as docks, bridges, highway structures, and buildings. Heavy hex bolts with forged heads are also commonly used as headed anchor bolts.",
        alt: "Heavy Hex Bolt",
        name: "Heavy Hex Bolt",
        standard: "ASTM A325, A490，A354 Gr. BC，A354 Gr. BC ; A307 Gr. B",
        diameter: "1/4”-4”,M4-M100",
        length: "≤800mm or 30”",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Geomet,Magni,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 

  ];

  // Find the anchor bolt by ID
  const boltDetails = bolt.find(item => item.id === params.boltId);

  if (!boltDetails) {
    return <p>Anchor Bolt not found</p>;
  }

  return (
    <>
      <div className='container'>
          <div className='row align-items-center' key={boltDetails.id}>
            <div className='col-md-4'>
              <div className={styles.imageWrapper}>
                <Image src={boltDetails.img} alt={boltDetails.alt} height={300} width={300} />
              </div>
            </div>
            <div className='col-md-8'>
                <div className={styles.contentWrapper}>
                    <h2>{boltDetails.title}</h2>
                    <p>{boltDetails.text}</p>
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
                        <td scope="col"> {boltDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{boltDetails.standard}</td>
                        </tr>
                        <tr>
                        <th scope="row">Diameter</th>
                        <td>{boltDetails.diameter}</td>
                        </tr>
                        <tr>
                        <th scope="row">length</th>
                        <td>{boltDetails.length}</td>
                        
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{boltDetails.material}</td>
                        </tr>
                        <tr>
                        <th scope="row">Thread</th>
                        <td>{boltDetails.thread}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Finish</th>
                        <td>{boltDetails.finish}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Packing</th>
                        <td>{boltDetails.packing}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Supply Ability</th>
                        <td>{boltDetails.supplyAbility}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Trade Term</th>
                        <td>{boltDetails.tradeTerm}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Payment</th>
                        <td>{boltDetails.payment}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Market</th>
                        <td>{boltDetails.market}</td>  
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
