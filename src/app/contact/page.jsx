'use client'
import Image from 'next/image'
import styles from './contact.module.css'
import React, { useState, useEffect } from 'react';

export default function Contact() {
   const [formData, setFormData] = useState({
       name: '',
       phone: '',
       email: '',
       message: '',
   });
   const [formStatus, setFormStatus] = useState('');
   const [isError, setIsError] = useState(false); // Track if the message is an error

   const handleChange = (e) => {
       const { name, value } = e.target;
       setFormData({
           ...formData,
           [name]: value,
       });
   };

   const handleSubmit = async (e) => {
       e.preventDefault();

       // Basic validation
       if (!formData.name || !formData.phone || !formData.email || !formData.message) {
           setFormStatus('Please fill out all fields.');
           return;
       }

       try {
           const response = await fetch("https://api.web3forms.com/submit", {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
               },    
               body: JSON.stringify({
                   access_key: process.env.NEXT_PUBLIC_DATA,
                   ...formData,
               }),
           });

           // JSON parsing
           const result = await response.json();

           if (result.success) {
               setIsError(false);
               setFormStatus('Your message was sent successfully!');
               // Clear form fields
               setFormData({
                   name: '',
                   phone: '',
                   email: '',
                   message: '',
               });

               // Remove success message after 5 seconds
               setTimeout(() => {
                   setFormStatus('');
               }, 5000);
           } else {
               setIsError(true);
               setFormStatus('Failed to send your message. Please try again later.');
               setFormData({
                name: '',
                phone: '',
                email: '',
                message: '',
            });
               setTimeout(() => {
                setFormStatus('');
            }, 5000);
           }
       } catch (error) {
           setIsError(true);
           setFormStatus('An error occurred. Please try again later.');
           setFormData({
            name: '',
            phone: '',
            email: '',
            message: '',
        });
           setTimeout(() => {
            setFormStatus('');
        }, 5000);
       }
   };

   return (
       <>
           <div className={styles.imgWidth}>
               <Image
                    alt="backgroundImage"
                    src={'/assets/images/background/bg1.jpg'}
                    quality={100}
                    fill
                    sizes="100vw"
                    className={styles.backgroundImage}
                    style={{
                        objectFit: 'cover',
                        objectPosition: 'center',

                    }}
                />
            <div className={styles.divider}>
                <div className={styles.dividerSeprator}></div>
            </div>
               <div className={styles.centered}>
                   <h2 className='text-white'>Contact Us</h2>
                   <p className='text-white'>Strong Connections Start Here.</p>
               </div>
           </div>
           <div className=''>
                       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.515093623436!2d51.544789400000006!3d25.219570299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf1dbd104243%3A0xed72b1afa353d690!2sAshwani%20Imports%20%26%20Exports!5e0!3m2!1sen!2sin!4v1719157505162!5m2!1sen!2sin" width="100%" height="450"  loading="lazy"></iframe>
               </div>
           <div className='container mt-5 mb-5'>
               <div className='row align-items-center'>
                   <div className='text-center mt-5 mb-5'>
                       <h1 className={styles.text}>Get In Touch</h1>
                   </div>
                   <div className="col-md-6">
                       <form onSubmit={handleSubmit}>
                           <div className={styles.contactForm}>
                               <input
                                   type="text"
                                   name="name"
                                   required
                                   placeholder="Your name"
                                   value={formData.name}
                                   onChange={handleChange}
                               />
                           </div>
                           <div className={styles.contactForm}>
                               <input
                                   type="number"
                                   name="phone"
                                   required
                                   placeholder="Phone"
                                   value={formData.phone}
                                   onChange={handleChange}
                               />
                           </div>
                           <div className={styles.contactForm}>
                               <input
                                   type="email"
                                   name="email"
                                   required
                                   placeholder="Email@example.com"
                                   value={formData.email}
                                   onChange={handleChange}
                               />
                           </div>
                           <div className={styles.contactForm}>
                               <textarea  
                                   name="message"
                                   required
                                   rows="4"
                                   placeholder="Message"
                                   value={formData.message}
                                   onChange={handleChange}
                               ></textarea>
                           </div>
                           {formStatus && (
                                <p className={`${isError ? styles.contactError : styles.contactSuccess}`}>
                                    {formStatus}
                                </p>
                            )}
                           <button className={styles.btnStyle} type="submit">Submit Form</button>
                       </form>                      
                   </div>
                   <div className="col-md-6">
                       <div className={styles.contactText}>
                               <div className=''>
                                   <Image src='/assets/social-icons/placeholder.png' width={30} height={30} alt='stamping' />
                               </div>
                               <div className=''>                                  
                                   <p className="mb-2">Address: 302 / 4D, Model Town Extension, D Block, Ludhiana 141002</p>
                                   <p>Address: VILLA NO 19, ST 407 ZONE 50, Doha, Qatar</p>
                               </div>                               
                       </div>
                       <div className={styles.contactText}>
                               <div className=''>
                                   <Image src='/assets/social-icons/envelope.png' width={30} height={30} alt='stamping' />
                               </div>
                               <div className=''>
                                   <p className="mb-2">Email: info@oilandgasfasteners.com</p>
                                   <p className="mb-2">Email: ashwaniexports007@gmail.com</p>
                               </div>                                
                       </div>
                       <div className={styles.contactText}>
                               <div className=''>
                                   <Image src='/assets/social-icons/phone.png' width={30} height={30} alt='stamping' />  
                               </div>
                               <div className=''>
                                   <p className="mb-2">+91-81462-74050</p>
                                   <p>+974-3152-2202</p>
                               </div>                                
                       </div>
                   </div>
               </div>
           </div>
       </>
   );
}

