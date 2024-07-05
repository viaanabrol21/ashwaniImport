 'use client'
 import Image from 'next/image'
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';
// import * as formik from 'formik';
// import * as yup from 'yup';
 import styles from './contact.module.css'

// function contactPage() {
    
//   const { Formik } = formik;

//   const schema = yup.object().shape({
//     companyName: yup.string().required(),
//     fullName: yup.string().required(),
//     telephone: yup.string().required(),
//     email: yup.string().required(),
//     message: yup.string().required(),
//   });

//   return (
//         <>
//             <div className=''>
//                 <Image src='/assets/images/background/c2.jpg' className={styles.imgWidth} layout="fill" alt='about' />
//                 <div className={styles.centered}>
//                     <h2 className='text-white'>Contact Us</h2>
//                 </div>
//             </div>
//             <div className='container'>
//                 <div className={styles.wrapper}>
//                 <div className='row'>
//                     <div className='col-12'>
//                         <div className='text-center mt-5 mb-5'>
//                             <h1 className={styles.text}>Get In Touch</h1>
//                         </div>
//                         <div className=''>
//                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.515093623436!2d51.544789400000006!3d25.219570299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf1dbd104243%3A0xed72b1afa353d690!2sAshwani%20Imports%20%26%20Exports!5e0!3m2!1sen!2sin!4v1719157505162!5m2!1sen!2sin" width="100%" height="450"  loading="lazy"></iframe>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='row mt-5'>
//                     <div className='col-md-6'>
//                         <Formik
//                         validationSchema={schema}
//                         onSubmit={console.log}
//                         initialValues={{
//                             companyName: '',
//                             fullName: '',
//                             telephone: '',
//                             email: '',
//                             message: '',
//                         }}
//                         >
//                         {({ handleSubmit, handleChange, values, touched, errors }) => (
//                             <Form noValidate onSubmit={handleSubmit}>
//                                 <Row className="">
//                                     <Form.Group as={Col} md="12" controlId="validationFormik01">
//                                     <Form.Label>Company Name</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="companyName"
//                                         value={values.companyName}
//                                         onChange={handleChange}
//                                         isValid={touched.companyName && !errors.companyName}
//                                         isInvalid={!!errors.companyName}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.companyName}
//                                     </Form.Control.Feedback>
//                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                                     </Form.Group>
//                                     <Form.Group as={Col} md="12" controlId="validationFormik02">
//                                     <Form.Label>Full Name</Form.Label>
//                                     <Form.Control
//                                         type="text"
//                                         name="fullName"
//                                         value={values.fullName}
//                                         onChange={handleChange}
//                                         isValid={touched.fullName && !errors.fullName}
//                                         isInvalid={!!errors.fullName}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.fullName}
//                                     </Form.Control.Feedback>
//                                     <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Row>
//                                 <Row className="">
//                                     <Form.Group as={Col} md="12" controlId="validationFormik03">
//                                     <Form.Label>Telephone</Form.Label>
//                                     <Form.Control
//                                         type="number"
//                                         placeholder=""
//                                         name="telephone"
//                                         value={values.telephone}
//                                         onChange={handleChange}
//                                         isValid={touched.telephone && !errors.telephone}
//                                         isInvalid={!!errors.telephone}
//                                     />

//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.telephone}
//                                     </Form.Control.Feedback>
//                                     </Form.Group>
//                                     <Form.Group as={Col} md="12" controlId="validationFormik04">
//                                     <Form.Label>Email</Form.Label>
//                                     <Form.Control
//                                         type="email"
//                                         placeholder=""
//                                         name="email"
//                                         value={values.email}
//                                         onChange={handleChange}
//                                         isValid={touched.email && !errors.email}
//                                         isInvalid={!!errors.email}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.email}
//                                     </Form.Control.Feedback>
//                                     </Form.Group>
//                                     <Form.Group as={Col} md="12" controlId="validationFormik05">
//                                     <Form.Label>Message</Form.Label>
//                                     <Form.Control
//                                         as="textarea" 
//                                         rows={3}
//                                         placeholder=""
//                                         name="message"
//                                         value={values.message}
//                                         onChange={handleChange}
//                                         isValid={touched.message && !errors.message}
//                                         isInvalid={!!errors.message}
//                                     />
//                                     <Form.Control.Feedback type="invalid">
//                                         {errors.message}
//                                     </Form.Control.Feedback>
//                                     </Form.Group>
//                                 </Row>
//                                 <Button type="submit" className={styles.btnStyle}>Submit form</Button>
//                             </Form>
//                         )}
//                         </Formik>
//                     </div>
//                     <div className="col-md-6">
//                                     <div className={styles.contactText}>
//                                         <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
//                                         <div>
//                                             <h4><Image src='/assets/social-icons/placeholder.png' width={30} height={30} alt='stamping' />Address</h4>
//                                             <p className="mb-2">Address: 302 / 4D, Model Town Extension, D Block, Ludhiana 141002</p>
//                                             <p>Address: VILLA NO 19, ST 407 ZONE 50, Doha, Qatar</p>
//                                         </div>
//                                     </div>
//                                     <div className={styles.contactText}>
//                                         <i className="fas fa-envelope fa-2x text-primary me-4"></i>
//                                         <div>
//                                             <h4><Image src='/assets/social-icons/envelope.png' width={30} height={30} alt='stamping' />Mail Us</h4>
//                                             <p className="mb-2">info@oilandgasfasteners.com</p>
//                                             <p className="mb-2">ashwaniexports007@gmail.com</p>
//                                         </div>
//                                     </div>
//                                     <div className={styles.contactText}>
//                                         <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
//                                         <div>
//                                             <h4><Image src='/assets/social-icons/phone.png' width={30} height={30} alt='stamping' />Telephone</h4>
//                                             <p className="mb-2">91-81462-74050</p>
//                                             <p>+974-3152-2202</p>
//                                         </div>
//                                     </div>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </>
//   );
// }

// export default contactPage;





import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [formStatus, setFormStatus] = useState('');

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
                setFormStatus('Failed to send your message. Please try again later.');
            }
        } catch (error) {
            setFormStatus('An error occurred. Please try again later.');
        }
    };

    return (
        <>
            <div className=''>
                <Image src='/assets/images/background/c2.jpg' className={styles.imgWidth} layout="fill" alt='about' />
                <div className={styles.centered}>
                    <h2 className='text-white'>Contact Us</h2>
                </div>
                <div className=''>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.515093623436!2d51.544789400000006!3d25.219570299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf1dbd104243%3A0xed72b1afa353d690!2sAshwani%20Imports%20%26%20Exports!5e0!3m2!1sen!2sin!4v1719157505162!5m2!1sen!2sin" width="100%" height="450"  loading="lazy"></iframe>
                </div>
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
                            {formStatus && <p className={styles.contactSuccess}>{formStatus}</p>}
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
                                   
                                    <p className="mb-2">info@oilandgasfasteners.com</p>
                                    <p className="mb-2">ashwaniexports007@gmail.com</p>
                                </div>                                
                        </div>
                        <div className={styles.contactText}>
                                <div className=''>
                                    <Image src='/assets/social-icons/phone.png' width={30} height={30} alt='stamping' />  
                                </div>
                                <div className=''>
                                    <p className="mb-2">91-81462-74050</p>
                                    <p>+974-3152-2202</p>
                                </div>                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

