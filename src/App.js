import './App.css';

import { Container, Col, Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <div>
      <Row>
        <Col xs={4}>
          <Container>

          </Container>
        </Col>

        <Col className="wallpaper-col" xs={8}></Col>
      </Row>
    </div>
  )
}

export default App;
