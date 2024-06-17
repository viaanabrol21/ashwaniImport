'use client'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as formik from 'formik';
import * as yup from 'yup';
import styles from './contact.module.css'

function contactPage() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    companyName: yup.string().required(),
    fullName: yup.string().required(),
    telephone: yup.string().required(),
    email: yup.string().required(),
    message: yup.string().required(),
  });

  return (
    <div className='container'>
        <div className={styles.wrapper}>
        <div className='row'>
            <div className='col-12'>
                <div className='text-center mt-5 mb-5'>
                    <h1 className={styles.text}>Get In Touch</h1>
                </div>
                <div className=''>
                    {/* <div className="h-400 rounded">
                        <iframe className="rounded w-100" 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" 
                        loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div> */}
                </div>
            </div>
        </div>
        <div className='row mt-5'>
            <div className='col-md-6'>
                <Formik
                validationSchema={schema}
                onSubmit={console.log}
                initialValues={{
                    companyName: '',
                    fullName: '',
                    telephone: '',
                    email: '',
                    message: '',
                }}
                >
                {({ handleSubmit, handleChange, values, touched, errors }) => (
                    <Form noValidate onSubmit={handleSubmit}>
                        <Row className="">
                            <Form.Group as={Col} md="12" controlId="validationFormik01">
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="companyName"
                                value={values.companyName}
                                onChange={handleChange}
                                isValid={touched.companyName && !errors.companyName}
                                isInvalid={!!errors.companyName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.companyName}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationFormik02">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fullName"
                                value={values.fullName}
                                onChange={handleChange}
                                isValid={touched.fullName && !errors.fullName}
                                isInvalid={!!errors.fullName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.fullName}
                            </Form.Control.Feedback>
                            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row className="">
                            <Form.Group as={Col} md="12" controlId="validationFormik03">
                            <Form.Label>Telephone</Form.Label>
                            <Form.Control
                                type="number"
                                placeholder=""
                                name="telephone"
                                value={values.telephone}
                                onChange={handleChange}
                                isValid={touched.telephone && !errors.telephone}
                                isInvalid={!!errors.telephone}
                            />

                            <Form.Control.Feedback type="invalid">
                                {errors.telephone}
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationFormik04">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder=""
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                isValid={touched.email && !errors.email}
                                isInvalid={!!errors.email}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.email}
                            </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="12" controlId="validationFormik05">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea" 
                                rows={3}
                                placeholder=""
                                name="message"
                                value={values.message}
                                onChange={handleChange}
                                isValid={touched.message && !errors.message}
                                isInvalid={!!errors.message}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.message}
                            </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Button type="submit" className={styles.btnStyle}>Submit form</Button>
                    </Form>
                )}
                </Formik>
            </div>
            <div className="col-md-6">
                            <div className={styles.contactText}>
                                <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Address</h4>
                                    <p className="mb-2">Address: 302 / 4D, Model Town Extension, D Block, Ludhiana 141002</p>
                                </div>
                            </div>
                            <div className={styles.contactText}>
                                <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Mail Us</h4>
                                    <p className="mb-2">info@oilandgasfasteners.com</p>
                                </div>
                            </div>
                            <div className={styles.contactText}>
                                <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                <div>
                                    <h4>Telephone</h4>
                                    <p className="mb-2">91-81462-74050, +974-3152-2202</p>
                                </div>
                            </div>
            </div>
        </div>
        </div>
    </div>
  );
}

export default contactPage;