import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import axios from 'axios';
import styles from './MailerForm.module.css';
import emailValidator from 'email-validator';

const MailerForm = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showConfictToast, setShowConfictToast] = useState(false);
    const [showInvalidEmailToast, setShowInvalidEmailToast] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!emailValidator.validate(email)) {
            setShowInvalidEmailToast(true)
            return
        }

        try {
            const response = await axios.post('https://apod-backend.onrender.com/noauth/subscriptions', { username, email });
            if (response.status === 201) {
                setShowSuccessToast(true);
            }

        } 
        
        catch (error) {
            
            if (error && error.response && error.response.status === 409) {
                setShowConfictToast(true)
            }

            console.log(error.response.status) 
            console.error('Erro ao enviar o formulário:', error);
            setShowErrorToast(true);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Control style={{ backgroundColor: '#f9f9f9' }} className='mb-3' placeholder="Name" value={username} onChange={handleNameChange} required />
                <Form.Control style={{ backgroundColor: '#f9f9f9' }} className='mb-3' type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />
                <Button className={`w-100 button-primary ${styles.buttonPrimary}`} type="submit">Subscribe <strong>(⚠️ Beta Tester)</strong></Button>
            </Form>

            <Toast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>🎉 Your subscription is active!</strong></Toast.Body>
            </Toast>

            <Toast show={showErrorToast} onClose={() => setShowErrorToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Error occurred while subscribing!</strong></Toast.Body>
            </Toast>

            <Toast show={showConfictToast} onClose={() => setShowConfictToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Already have a subscription!</strong></Toast.Body>
            </Toast>

            <Toast show={showInvalidEmailToast} onClose={() => setShowInvalidEmailToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Email is invalid!</strong></Toast.Body>
            </Toast>
        </>
    );
};

export default MailerForm;