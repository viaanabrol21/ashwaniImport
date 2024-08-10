'use client'
import Breadcrumb from '@/components/breadcrumb/Breadcrumb';
import React from 'react'
import Image from 'next/image';
import styles from './styles.module.css'

function page({ params }) {
  const washer = [
    {
        id: "1",
        title: "Contact Washer",
        img: "/assets/images/washer/contact-washer.png",
        text: "Contact Washers are conical shaped lock washers, formed with a ribbed top surface. The conical shape exerts locking force 360° around the underside of the screw head or nut.",
        alt: "Contact Washer",
        name: "Contact Washer",
        standard: "DIN999",
        diameter: "M2-M100",
        material: "",
        finish: "",
        packing: "Pack the box first and put it in the carton, or according to customers' requirement.",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T or L/C",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and etc.",
    }, 
    {
        id: "2",
        title: "Flat Washer",
        img: "/assets/images/washer/flat-washer.png",
        text: "Flat Washers Are Positioned Under the Head of a Bolt or Nut in Order to Provide a Smooth Bearing Surface and Distribute the Fastener Load over a Wider Area.",
        alt: "Flat Washer",
        name: "Flat Washer",
        standard: "ASME/ANSI B18.22.1 USS/SAE, DIN125A, DIN125B, DIN126, DIN433, DIN440, DIN7349, DIN988, DIN9021,F436,F436M",
        diameter: "#6 – 3”, M3-M72",
        material: "Low Carbon Steel, C1045 Heat Treatment, Alloy Steel, Stainless Steel, Brass, Nylon",
        finish: "Plain, Zinc Plated(Clear/Blue/Yellow/Black), Black oxide, Nickel, Chrome, H.D.G, PTFE",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "3",
        title: "Spring Washer",
        img: "/assets/images/washer/spring-washer.png",
        text: "Spring washers also called split lock washers, provide a vibration resistant function, they consist of ring split at one point and bent into a helical shape, this causes the washer to exert a spring force between the fastener's head and the bearing face which maintains the washer hard against the face and the bolt thread hard against the nut or threaded hole, creating more friction and resistance to rotation.",
        alt: "Spring Washer",
        name: "Spring Washer",
        standard: "ASME/ANSI B18.21.1, DIN127A, DIN127B, DIN7980",
        diameter: "#2 – 3”, M3 – M72",
        material: "C70, 65Mn,Stainless Steel, Brass",
        finish: "Plain, Zinc Plated(Clear/Blue/Yellow/Black), Black oxide, Nickel, Chrome, H.D.G, Telfon",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "4",
        title: "Square Taper Washer",
        img: "/assets/images/washer/square-taper-washer.png",
        text: "Taper Washer are square or half round, Taper washers are designed to be used on channel sections, underneath nuts with tapered flanges to enable the bolt assembly to fit square when tightened.",
        alt: "Square Taper Washer",
        name: "Square Taper Washer",
        standard: "ASME/ANSI B 18.23.1,ASME/ANSI B 18.2.6,ASTM F436,BS 3410,DIN 434,DIN 435,DIN 436",
        diameter: "1/4 – 2”, M6 – M52",
        material: "Carbon Steel, Stainless Steel",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Zinc Nickel.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
    {
        id: "5",
        title: "Toothed Washer",
        img: "/assets/images/washer/toothed-washer.png",
        text: "We have a lineup of nearly all washers circulating in the market, including square or wavy types, as well as flat (round) washers and spring washers.",
        alt: "Toothed Washer",
        name: "Toothed Washer",
        standard: "	DIN 6797(Type A,Type J)",
        diameter: "	M1.7– M48",
        material: "Carbon Steel, Stainless Steel",
        finish: "Plain,Black oxide, Zinc Plated(Clear/Blue/Yellow/Black), H.D.G, Nickel, Chrome,PTFE,Dacromet,Zinc Nickel,Zinteck.",
        packing: "bulk in cartons (25kg Max.)+wood Pallet or according to customer special demand",
        supplyAbility: "1000 tons per month",
        tradeTerm: "FOB/CIF/CFR/CNF/EXW/DDU/DDP",
        payment: "T/T, L/C,West union,Paypal.etc",
        market: "Europe/South&north Amrica/East&South east Asia/Middle East/Australia and ect.",
    }, 
  ];

  // Find the anchor bolt by ID
  const washerDetails = washer.find(item => item.id === params.washerId);

  if (!washerDetails) {
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
          <div className='row align-items-center' key={washerDetails.id}>
            <div className='col-md-4'>
              <div className={styles.imageWrapper}>
                <Image src={washerDetails.img} alt={washerDetails.alt} height={300} width={300} />
              </div>
            </div>
            <div className='col-md-8'>
                <div className={styles.contentWrapper}>
                    <h2>{washerDetails.title}</h2>
                    <p>{washerDetails.text}</p>
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
                        <td scope="col"> {washerDetails.name}</td>
                        </tr>
                        <tr>
                        <th scope="row">Standard</th>
                        <td>{washerDetails.standard}</td>
                        </tr>
                        <tr>
                        <th scope="row">Diameter</th>
                        <td>{washerDetails.diameter}</td>
                        </tr>
                        <tr>
                        <th scope="row">Material</th>
                        <td>{washerDetails.material}</td>
                        </tr>
                        <tr>
                        <th scope="row">Finish</th>
                        <td>{washerDetails.finish}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Packing</th>
                        <td>{washerDetails.packing}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Supply Ability</th>
                        <td>{washerDetails.supplyAbility}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Trade Term</th>
                        <td>{washerDetails.tradeTerm}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Payment</th>
                        <td>{washerDetails.payment}</td>  
                        </tr>
                        <tr>
                        <th scope="row">Market</th>
                        <td>{washerDetails.market}</td>  
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
