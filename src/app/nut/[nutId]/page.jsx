import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'

function page({ params }) {
  const nut = [
    {
        id: "1",
        title: "Cap Nut",
        img: "/assets/images/nut/cap-nut.png",
        text: "Cap Nuts are used to cover exposed threaded stud, rod and bolt ends with a dome-like cap. This provides safety and a finished look to the exposed threaded end.",
        alt: "Cap Nut",
        name: "Cap Nut",
        standard: "DIN917, DIN986, DIN1587",
        diameter: "M4-M72",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Geomet,Zinc Nickel",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and etc.",
    }, 
    {
        id: "2",
        title: "Coupler Nut",
        img: "/assets/images/nut/coupler-nut.png",
        text: "Coupler nuts (also known as a rod coupling, rod coupling nut, coupling nut, or extension nut), is a threaded fastener for joining two male threads, most commonly threaded rods. ",
        alt: "Coupler Nut",
        name: "Coupler Nut",
        standard: "ASME/ANSI B 18.2.2,IFI 128,DIN6334",
        diameter: "1/4''–1-1/2’’,M6-M36",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Zinc Nickel.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "3",
        title: "Eye Nut",
        img: "/assets/images/nut/eye-nut.png",
        text: "Eye bolts are internally threaded fasteners featuring loops that secure cables, wires, and chains to assist with vertical lifting.",
        alt: "Eye Nut",
        name: "Eye Nut",
        standard: "DIN582",
        diameter: "M6-M64;",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Zinc Nickel",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "500 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "4",
        title: "Heavy Hex Nut",
        img: "/assets/images/nut/heavy-hex-nut.png",
        text: "Heavy hex nuts are slightly larger and thicker than standard hex nuts. There are numerous grades and the heavy pattern is typically used for large diameter and high strength bolts.",
        alt: "Heavy Hex Nut",
        name: "Heavy Hex Nut",
        standard: "ASME/ANSI B18.2.2,DIN 6330",
        diameter: "1/4''–4’’; M6 – M100",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Zinc Nickel.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "5",
        title: "Hex Flange Nut",
        img: "/assets/images/nut/hex-flange-nut.png",
        text: "Hexagon Flange Nuts is a Hex Nut with a washer like flange with serrations built in, that grip the material surface and prevent the nuts from loosening in applications.",
        alt: "Hex Flange Nut",
        name: "Hex Flange Nut",
        standard: "ASME/ANSI B 18.16.4,IFI-145, DIN6923",
        diameter: "#6-3/4''; M5-M20",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "6",
        title: "Hex Nut",
        img: "/assets/images/nut/hex-nut.png",
        text: "​Hex nuts are available in ASTM A563-A and compatible with low carbon steel bolts such as ASTM A307, ASTM F1554 grade 36, SAE grade 2, and AASHTO M183. SAE grade 5 and grade 8 nuts are also available in a finished pattern. ",
        alt: "Hex Nut",
        name: "Hex Nut",
        standard: "AS ME/ANSI  B18.2.2,DIN934, DIN555,ISO4032,GB6170",
        diameter: "	1/4”–4”;  M6 – M100",
        length: "",
        material: "Carbon  Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black  oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel,  Chrome,PTFE,Dacromet,Zinc Nickel",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000  tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "7",
        title: "Slotted Nut",
        img: "/assets/images/nut/slotted-nut.png",
        text: "They are commonly used to ensure that shaft components in certain automotive assemblies do not separate or to maintain machine settings in manufacturing environments.",
        alt: "Slotted Nut",
        name: "Slotted Nut",
        standard: "ASME/ANSI B18.2.2; DIN935",
        diameter: "1/4''–1-1/2’’; M3 – M42",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M, UNC, UNF",
        finish: "Plain,Black  oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel,  Chrome,PTFE,Dacromet,Zinc Nickel",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "	1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "8",
        title: "Square Nut",
        img: "/assets/images/nut/square-nut.png",
        text: "Square nuts are typically used in conjunction with square bolts or are commonly used with pole line hardware.",
        alt: "Square Nut",
        name: "Square Nut",
        standard: "ASME/ANSI B18.2.2, DIN557, DIN562",
        diameter: "1/4''–2’’; M6 – M48",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel, Brass",
        thread: "M,UNC,UNF",
        finish: "Plain,Black  oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel,  Chrome,PTFE,Dacromet,Zinc Nickel",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "9",
        title: "T-Nut",
        img: "/assets/images/nut/t-nut.png",
        text: "T-Nut have a long, thin body with a flange on one end, giving it the appearance of a “T” when viewed in profile. The flanges of T-nuts often feature serrations on the prongs that are designed to dig into a wooden work piece as the bolt is tightened from the opposite side, providing better retention.",
        alt: "T-Nut",
        name: "T-Nut",
        standard: "",
        diameter: "1/8''–1-3/4’’,M3-M33",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M, UNC, UNF",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G,,Dacromet,Geomet",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "10",
        title: "Weld Nut",
        img: "/assets/images/nut/weld-nut.png",
        text: "Weld nuts are made with a greater amount of material than other nuts so that the nut’s form is maintained after being welded to another object.",
        alt: "Weld Nut",
        name: "Weld Nut",
        standard: "DIN928,DIN929",
        diameter: "M4-M16",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M,UNC,UNF",
        finish: "Plain,Black  oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel,  Chrome,PTFE,Dacromet,Zinc Nickel",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "500 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "11",
        title: "Wing Nut",
        img: "/assets/images/nut/wing-nut.png",
        text: "A wingnut, wing nut or butterfly nut is a type of nut with two large metal wings, one on each side, so it can be easily tightened and loosened by hand without tools.",
        alt: "Wing Nut",
        name: "Wing Nut",
        standard: "ASME/ANSI B 18.6.X,DIN315,UNI 5448",
        diameter: "1/4''–1-1/2’’,M6-M36",
        length: "",
        material: "Carbon Steel, Alloy Steel, Stainless Steel",
        thread: "M, UNC, UNF",
        finish: "Plain,Black  oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel,  Chrome,PTFE,Dacromet,Zinc Nickel",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 


  ];

  // Find the anchor bolt by ID
  const nutDetails = nut.find(item => item.id === params.nutId);

  if (!nutDetails) {
    return <p>Anchor Bolt not found</p>;
  }

  return (
    <>
      <div className='container'>
          <div className='row align-items-center' key={nutDetails.id}>
            <div className='col-md-4'>
              <div className={styles.imageWrapper}>
                <Image src={nutDetails.img} alt={nutDetails.alt} height={300} width={300} />
              </div>
            </div>
            <div className='col-md-8'>
                <div className={styles.contentWrapper}>
                    <h2>{nutDetails.title}</h2>
                    <p>{nutDetails.text}</p>
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
                        <td scope="col"> {nutDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{nutDetails.standard}</td>
                        </tr>
                        <tr>
                        <th scope="row">Diameter</th>
                        <td>{nutDetails.diameter}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{nutDetails.material}</td>
                        </tr>
                        <tr>
                        <th scope="row">Thread</th>
                        <td>{nutDetails.thread}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Finish</th>
                        <td>{nutDetails.finish}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Packing</th>
                        <td>{nutDetails.packing}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Supply Ability</th>
                        <td>{nutDetails.supplyAbility}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Trade Term</th>
                        <td>{nutDetails.tradeTerm}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Payment</th>
                        <td>{nutDetails.payment}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Market</th>
                        <td>{nutDetails.market}</td>  
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
