import { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Context } from '../context/InvoiceContext';
import InvoicesListing from '../components/InvoicesListing';
import InvoiceDetail from '../components/InvoiceDetail';

export default function Main() {
  const context = useContext(Context)
  return (
    <Container className='px-4 px-md-0'>
      <Row>
        <Col xs={12} md={{ offset: 0, span: 12 }} lg={{ offset: 1, span: 10 }} xl={9}>
          {context?.invoice ?
            <InvoiceDetail /> :
            <InvoicesListing />
          }
        </Col>
      </Row>
    </Container>
  )
}