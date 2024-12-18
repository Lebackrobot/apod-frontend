import { useEffect, useState } from "react"
import { Button, Container, Form, InputGroup, Modal, ProgressBar } from "react-bootstrap"

let setShowValidationModal

const ValidationModal = () => {
    const [show, setShow] = useState(false)
    const [seconds, setSeconds] = useState(60)

    useEffect(() => {
        if (show) {
            console.log('>>>>>')
            let interval = setInterval(() => {
                setSeconds(seconds - 1)
              
                if (seconds == 0) {
                    clearInterval(interval)
                    setSeconds(60)
                    setShow(false)
                }
            }, 1000)

        }

        else {
            setSeconds(60)
        }


    }, [seconds])

    setShowValidationModal = (value) => {
        setShow(value)
    }


    const handleClose = () => { 
        setSeconds(60)
        setShow(false)
    }


      

    return (
        <>
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
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>

                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fechar
                    </Button>
                    <Button variant="primary" onClick={() => {}}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export { ValidationModal, setShowValidationModal }