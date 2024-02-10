import './App.css';

import MailerForm from './components/Form/MailerForm'
import { Container, Col, Row, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import nasaLogo from './images/nasa-logo.png'
import gmailIcon from './images/gmail-icon.png'
import linkedinIcon from './images/linkedin-icon.jpeg'
import githubIcon from './images/github-icon.png'

const App = () => {
  return (
    <div>
      <Row>
        <Col xs={4} className='d-flex align-items-center justify-content-center p-custom'>
          <Container>
            <div className='image-container mb-5 pb-2'>
              <img src={ nasaLogo } width='200' alt='Nasa logo'></img>
            </div>
            <h4>Astronomy Picture of The Day</h4>
            <p className='subtext mb-4'>Receive daily in your email photos provided by NASA's API, APOD.</p>

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
                
                <Button href='malto:dr.pedrofernades@gmail.com' variant='danger' className='mb-1'>
                  <img src={gmailIcon} width='20'></img>&nbsp;
                  Gmail</Button>
              </Row>
            </Col>
          </Container>
        </Col>

        <Col className="wallpaper-col" xs={8}></Col>
      </Row>

    </div>
  )
}

export default App;
