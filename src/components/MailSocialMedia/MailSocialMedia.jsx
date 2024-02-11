
    import { Button } from 'react-bootstrap'
    import 'bootstrap/dist/css/bootstrap.min.css'

    import gmailUrl from './../../images/gmail-icon.png'
    import linkedinUrl from './../../images/linkedin-icon.jpeg'
    import githubUrl from './../../images/github-icon.png'

    import styles from './MailSocialMedia.module.css'

    const MailSocialMedia = ({ children, socialMedia }) => {
        console.log(gmailUrl)

        const imageUrl = { 'gmail': gmailUrl, 'linkedin': linkedinUrl, 'github': githubUrl }[socialMedia]
        const socialUrl = { 'gmail': 'malto:dr.pedrofernades@gmail.com', 'linkedin': 'https://www.linkedin.com/in/pedro-fernandes-b72a8516b', 'github': 'https://github.com/Lebackrobot' }[socialMedia]
        const variant = { 'gmail': 'danger', 'linkedin': 'primary', 'github': 'dark'}[socialMedia]

        const nbsps = { 'gmail': 3, 'linkedin': 0, 'github': 2 }[socialMedia]
        const spaces = Array.from({ length: nbsps }, (_, i) => i)

        return (
            <Button href={socialUrl} variant={variant} target='_blank' className='mb-1'>
                <img src={imageUrl} className={styles.socialMediaImage} alt='Social media icon'></img>
                <span className='m-3'>
                    { children }
                    {spaces.map((index) => (
                        <span key={index}>&nbsp;</span>
                    ))}
                </span>
            </Button>
        )
    }

    export default MailSocialMedia