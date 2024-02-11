import './App.css';

import MailerForm from './components/MailForm/MailerForm'
import { Container, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import NasaUrl from './images/nasa-logo.png'
import gmailIcon from './images/gmail-icon.png'
import linkedinIcon from './images/linkedin-icon.jpeg'
import githubIcon from './images/github-icon.png'

import MailerHeader from './components/MailHeader/MailHeader'

const App = () => {
  return (
    <div>
      <Row>
        <Col lg={4} className='d-flex align-items-center justify-content-center p-custom'>
          <Container>

            <MailerHeader className='mb-5 pb-2' subtitle={"Receive daily in your email photos provided by NASA's API, APOD."} imageUrl={NasaUrl}>
              Astronomy Picture of The Day
            </MailerHeader>

            <MailerForm></MailerForm>

            <Col>
              <Row className='d-flex align-items-center justify-content-center'>
                <span className='subtext mt-5 mb-5 d-flex align-items-center justify-content-center'> 
                  &mdash;&nbsp;<strong> contact me </strong>&nbsp;&mdash;
                </span>
                
                <Button href='https://github.com/Lebackrobot' variant='dark' className='mb-1'>
                  <img src={githubIcon} width='20'></img>&nbsp;&nbsp;
                  Github
                  </Button>
                  
                <Button href='https://www.linkedin.com/in/pedro-fernandes-b72a8516b/' className='mb-1'>
                  &nbsp;&nbsp;&nbsp;<img src={linkedinIcon} width='20'></img>&nbsp;
                  Linkedin
                </Button>
                
                <Button href='malto:dr.pedrofernades@gmail.com' variant='danger' cassName='mb-1'>
                  <img src={gmailIcon} width='20'></img>&nbsp;Gmail</Button>
              </Row>
            </Col>
          </Container>
        </Col>

        <Col className="wallpaper-col  d-none d-lg-block" lg={8}></Col>
      </Row>

    </div>
  )
}

export default App;
