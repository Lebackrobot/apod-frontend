import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './MailContact.component.css'

const MailContact = () => {
    return (
        <span className='subtext mt-5 mb-5 d-flex align-items-center justify-content-center'>
            &mdash;&nbsp;
            <strong className={styles.subtitle}> contact me </strong>
            &nbsp;&mdash;
        </span>
    )
}

export default MailContact