import { Form, Button } from 'react-bootstrap';
import './MailerForm.css'

const MailerForm = () => {
    return (
            <Form>
                <Form.Control style={{ backgroundColor:'#f9f9f9'}} className='mb-3' placeholder="Name"/>
                <Form.Control style={{ backgroundColor: '#f9f9f9' }}  className='mb-3' type="email" placeholder="Email" />
                <Button className='w-100 button-primary' type="submit">Send to me</Button>
            </Form>
    )
}

export default MailerForm;