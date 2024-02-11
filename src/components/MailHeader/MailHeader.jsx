import { Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import styles from './MailHeader.module.css'

const MailerHeader = ({ children, subtitle, imageUrl }) => {
    return (
        <Row className='justify-content-center mb-5 pb-2'>
            <img src={imageUrl} className={styles.imageLg} alt='Nasa icon'/>
            <h4>{ children }</h4>
            <span className={styles.subtitle}>{ subtitle }</span>
        </Row>
    )
}

export default MailerHeader