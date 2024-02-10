import './App.css';

import MailerForm from './components/Form/MailerForm';
import nasaLogo from './images/nasa-logo.png'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

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

          </Container>
        </Col>

        <Col className="wallpaper-col" xs={8}></Col>
      </Row>
    </div>
  )
}

export default App;
