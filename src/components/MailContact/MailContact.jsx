import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './MailContact.module.css'

const MailContact = () => {
    return (
        <span className={` ${styles.subtitle} subtext mt-5 mb-5 d-flex align-items-center justify-content-center`}>
            &mdash;&nbsp;
            <strong> contact me </strong>
            &nbsp;&mdash;
        </span>
    )
}

export default MailContact