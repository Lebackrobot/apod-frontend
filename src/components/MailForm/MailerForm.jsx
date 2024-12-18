import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import axios from 'axios';
import styles from './MailerForm.module.css';
import emailValidator from 'email-validator';
import { ValidationModal, setShowValidationModal } from '../Modals/ValidationModal';

const MailerForm = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showConfictToast, setShowConfictToast] = useState(false);
    const [showInvalidEmailToast, setShowInvalidEmailToast] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        setShowValidationModal(true)

        if (!emailValidator.validate(email)) {
            setShowInvalidEmailToast(true)
            return
        }

        /* try {
            const response = await axios.post('https://apod-backend.onrender.com/noauth/subscriptions', { username, email });
            if (response.status === 201) {
                setShowSuccessToast(true);
            }

        }
        
        catch (error) {
            
            if (error && error.response && error.response.status === 409) {
                setShowConfictToast(true)
                return
            }

            setShowErrorToast(true);
        } */
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <>
            <ValidationModal></ValidationModal>

            <Form onSubmit={handleSubmit}>
                <Form.Control style={{ backgroundColor: '#f9f9f9' }} className='mb-3' placeholder="Nome" value={username} onChange={handleNameChange} required />
                <Form.Control style={{ backgroundColor: '#f9f9f9' }} className='mb-3' type="email" placeholder="Email" value={email} onChange={handleEmailChange} required />


                <Button className={`w-100 button-primary ${styles.buttonPrimary}`} type="submit">Inscrever <strong style={{ fontSize: '14px' }}></strong></Button>
            </Form>

            <Toast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>🎉 Your subscription is active!</strong></Toast.Body>
            </Toast>

            <Toast show={showErrorToast} onClose={() => setShowErrorToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Ocorreu um erro na usa assinatura!</strong></Toast.Body>
            </Toast>

            <Toast show={showConfictToast} onClose={() => setShowConfictToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Esse email já tem uma assinatura!</strong></Toast.Body>
            </Toast>

            <Toast show={showInvalidEmailToast} onClose={() => setShowInvalidEmailToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Email inválido!</strong></Toast.Body>
            </Toast>
        </>
    );
};

export default MailerForm;