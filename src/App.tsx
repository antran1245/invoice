import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import InvoicesListing from './components/InvoicesListing';
import './App.css';

function App() {
  return (
    <Container fluid className='m-0 p-0' data-color-mode="light">
      <Sidebar />
      <Container>
        <Row>
          <Col xs={12} lg={{ offset: 1, span: 8 }}>
            <InvoicesListing />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default App;
