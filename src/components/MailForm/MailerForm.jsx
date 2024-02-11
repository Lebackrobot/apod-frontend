import { Form, Button } from 'react-bootstrap';
import styles from './MailerForm.module.css'

const MailerForm = () => {
    return (
            <Form>
                <Form.Control style={{ backgroundColor:'#f9f9f9'}} className='mb-3' placeholder="Name"/>
                <Form.Control style={{ backgroundColor: '#f9f9f9' }}  className='mb-3' type="email" placeholder="Email" />
            <Button className={`w-100 button-primary ${styles.buttonPrimary}`} type="submit" disabled>Subscribe (🚀 next feature)</Button>
            </Form>
    )
}

export default MailerForm;