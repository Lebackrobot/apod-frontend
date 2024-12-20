import React, { useState } from 'react';
import { Form, Button, Toast } from 'react-bootstrap';
import styles from './MailerForm.module.css';
import emailValidator from 'email-validator';
import { ValidationModal, setShowValidationModal } from '../Modals/ValidationModal';
import subscriptionController from '../../controllers/subscriptionController';

const MailerForm = () => {
    const [username, setName] = useState('');
    const [email, setEmail] = useState('');
    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);
    const [showConfictToast, setShowConfictToast] = useState(false);
    const [showInvalidEmailToast, setShowInvalidEmailToast] = useState(false);
    const [disableButton, setDisableButton] = useState(false)

    const handleSubmit = async (event) => {
        setDisableButton(true)
        setTimeout(() => {
            setDisableButton(false)
        }, 3000)

        event.preventDefault();

        
        if (!emailValidator.validate(email)) {
            setShowInvalidEmailToast(true)
            return
        }
        
        
        try {
            const response = await subscriptionController.create({ name: username, email })
            if (response.status === 202) {
                setShowValidationModal(true)
                return
            }

        }
        
        catch (error) {
            console.error(error)

            if (error.response.status === 401) {
                setShowConfictToast(true)
                return
            }

            setShowErrorToast(true)
        }
    }

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


                <Button className={`w-100 button-primary ${styles.buttonPrimary}`} disabled={disableButton} type="submit">Inscrever <strong style={{ fontSize: '14px' }}></strong></Button>
            </Form>

            <Toast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>🎉 Sua assinatura está ativa!</strong></Toast.Body>
            </Toast>

            <Toast show={showErrorToast} onClose={() => setShowErrorToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Sua assinatura já está ativa!</strong></Toast.Body>
            </Toast>

            <Toast show={showInvalidEmailToast} onClose={() => setShowInvalidEmailToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Email inválido!</strong></Toast.Body>
            </Toast>
        </>
    );
};

export default MailerForm;