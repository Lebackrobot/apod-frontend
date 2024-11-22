import 'bootstrap/dist/css/bootstrap.min.css'
import styles from './MailContact.module.css'

const MailContact = () => {
    return (
        <span className={` ${styles.subtitle} subtext p-3 mt-3 mb-3 d-flex align-items-center justify-content-center`}>
            &mdash;&nbsp;
            <strong> Contate me </strong>
            &nbsp;&mdash;
        </span>
    )
}

export default MailContact