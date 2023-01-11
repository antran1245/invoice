import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '../context/InvoiceContext';
import InvoicesListing from '../components/InvoicesListing';
import InvoiceDetail from '../components/InvoiceDetail';

export default function Main() {
  const context = useContext(Context)
  return (
    <Container>
      <Row>
        <Col xs={12} lg={{ offset: 1, span: 8 }}>
          {context?.invoice ?
            <InvoiceDetail /> :
            <InvoicesListing />
          }
        </Col>
      </Row>
    </Container>
  )
}