import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import nasaUrl from './images/nasa-logo.png'

import MailerForm from './components/MailForm/MailerForm'
import { Container, Col, Row } from 'react-bootstrap'

import MailerHeader from './components/MailHeader/MailHeader'
import MailSocialMedia from './components/MailSocialMedia/MailSocialMedia'
import MailContact from './components/MailContact/MailContact';

const App = () => {
  return (
    <Row style={{ minHeight: '50vh' }}>
        <Col md={6} className={`d-flex  justify-content-center ${styles.pCustom}`}>
          <Container>
            <MailerHeader className='mb-5 pb-2' subtitle={"Receive daily in your email photos provided by NASA's API, APOD."} imageUrl={nasaUrl}>
              Astronomy Picture of The Day
            </MailerHeader>

            <MailerForm></MailerForm>

            <Col>
              <MailContact></MailContact>
              <Row className='d-flex align-items-center justify-content-center'>
                <MailSocialMedia socialMedia='linkedin'> Linkedin </MailSocialMedia>
                <MailSocialMedia socialMedia='gmail'> Gmail </MailSocialMedia>
                <MailSocialMedia socialMedia='github'> GitHub </MailSocialMedia>
              </Row>
            </Col>
          </Container>
        </Col>

        <Col className={`${styles.wallpaperCol}  d-none d-md-block`} md={6}></Col>
      </Row>
  )
}

export default App;
