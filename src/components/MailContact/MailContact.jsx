import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './MailContact.module.css'

const MailContact = () => {
    return (
        <span className={` ${styles.subtitle} subtext p-4 mt-4 mb-4 d-flex align-items-center justify-content-center`}>
            &mdash;&nbsp;
            <strong> contact me </strong>
            &nbsp;&mdash;
        </span>
    )
}

export default MailContact