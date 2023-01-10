import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import InvoicesListing from './components/InvoicesListing';
import './App.css';
import InvoiceContext from './context/InvoiceContext';

function App() {
  const [theme, setTheme] = useState<boolean>(false)
  return (
    <InvoiceContext>
      <Container fluid className='m-0 p-0' data-color-mode={theme ? 'dark' : 'light'}>
        <Sidebar theme={theme} setTheme={setTheme} />
        <Container>
          <Row>
            <Col xs={12} lg={{ offset: 1, span: 8 }}>
              <InvoicesListing />
            </Col>
          </Row>
        </Container>
      </Container>
    </InvoiceContext>
  );
}

export default App;
