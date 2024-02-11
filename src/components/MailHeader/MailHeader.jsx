import { Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import styles from './MailHeader.module.css'

const MailerHeader = ({ children, subtitle, imageUrl }) => {
    return (
        <Row className='justify-content-center mb-4'>
            <Col className='text-center'>
                <img src={imageUrl} className={styles.imageMd} alt='Nasa icon'/>
                <h4>{ children }</h4>
                <span className={styles.subtitle}>{ subtitle }</span>
            </Col>
        </Row>
    )
}

export default MailerHeader