import { useEffect, useState } from "react"
import { Button, Container, Form, InputGroup, Modal, ProgressBar, Toast } from "react-bootstrap"
import subscriptionConfirmationController from "../../controllers/subscriptionConfirmationController"
import { useForm } from "react-hook-form"

import styles from '../MailForm/MailerForm.module.css'


let setShowValidationModal

const ValidationModal = () => {
    const [show, setShow] = useState(false)
    const [seconds, setSeconds] = useState(60)
    const form = useForm()

    const [showSuccessToast, setShowSuccessToast] = useState(false);
    const [showErrorToast, setShowErrorToast] = useState(false);

    useEffect(() => {
        let interval;

        if (show) {
            interval = setInterval(() => {
                setSeconds((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        clearInterval(interval);
                        setShow(false);
                        return 60; 
                    }
                    return prevSeconds - 1;
                });
            }, 1000);
        }

        return () => clearInterval(interval);
    }, [show]);


    setShowValidationModal = (value) => {
        setShow(value)
    }


    const handleClose = () => { 
        setSeconds(60)
        setShow(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            const response = await subscriptionConfirmationController.confirm({ token: form.getValues('tokenValue') })


            if (response.status === 201) {
                handleClose()
                setShowSuccessToast(true)
            }

            if (response.status === 401) {
                setShowErrorToast(true)
            }
        }

        catch (error) {
            console.error(error)

            if (error.response.status === 401) {
                setShowErrorToast(true)
                handleClose()
            }
        }

        
    }


    return (
        <>
            <Form>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>📬 Confirmação de email</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <ProgressBar animated now={100 * (seconds / 60)} label={`${seconds} seg`} className='mb-5'/>
                        <span className=''>
                            Enviamos código de confirmação em seu email
                        </span>

                            <InputGroup className="mb-3 mt-1">
                                <InputGroup.Text id="basic-addon1">Código</InputGroup.Text>
                                <Form.Control
                                    placeholder="insira o token"
                                    aria-label="tokenConfirmation"
                                    aria-describedby="basic-addon1"
                                    {...form.register('tokenValue')}
                                />
                            </InputGroup>


                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </Form>


            <Toast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>🎉 Sua assinatura está ativa!</strong></Toast.Body>
            </Toast>

            <Toast show={showErrorToast} onClose={() => setShowErrorToast(false)} delay={2000} autohide className={styles.toast}>
                <Toast.Body><strong>⚠️ Token inválido!</strong></Toast.Body>
            </Toast>
        </>
    )
}

export { ValidationModal, setShowValidationModal }