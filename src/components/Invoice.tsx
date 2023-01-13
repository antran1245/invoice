import { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { InvoiceInterface } from "../interfaces/InvoiceInterface";
import { Context } from "../context/InvoiceContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEuroSign, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import '../sass/invoice.scss'

export default function Invoice(props: InvoiceInterface) {
  const context = useContext(Context)
  return (
    <Row className="invoice" onClick={() => context?.setInvoice(props)}>
      <Col xs={6} md={2}>
        <p className="id">
          <span>#</span>{props.id}
        </p>
      </Col>
      <Col md={2} className="d-none d-md-block">
        <p className="duedate">
          <span>Due</span> {props.paymentDue}
        </p>
      </Col>
      <Col xs={5} md={2} className="text-center">
        <p className="name">
          {props.clientName}
        </p>
      </Col>
      <Col xs={4} md={2} className="mt-4 mt-md-0">
        <p className="duedate d-md-none">
          <span>Due</span> {props.paymentDue}
        </p>
        <p className="price text-start text-md-end mt-2 mt-md-0">
          <FontAwesomeIcon icon={faEuroSign} /> {props.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </Col>
      <Col xs={5} md={2} className={`status mt-4 mt-md-0 ${props.status}`}>
        <span>&#x2022;</span>
        <p>{props.status}</p>
      </Col>
      <Col xs={1} className="arrow mt-4 mt-md-0">
        <FontAwesomeIcon icon={faAngleRight} />
      </Col>
    </Row>
  )
}