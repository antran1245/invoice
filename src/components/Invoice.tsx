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
      <Col md={2}>
        <p className="id">
          <span>#</span>{props.id}
        </p>
      </Col>
      <Col md={3}>
        <p className="duedate">
          <span>Due</span> {props.paymentDue}
        </p>
      </Col>
      <Col md={2}>
        <p className="name">
          {props.clientName}
        </p>
      </Col>
      <Col md={2}>
        <p className="price">
          <FontAwesomeIcon icon={faEuroSign} /> {props.total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
        </p>
      </Col>
      <Col md={2} className={`status ${props.status}`}>
        <span>&#x2022;</span>
        <p>{props.status}</p>
      </Col>
      <Col className="arrow">
        <FontAwesomeIcon icon={faAngleRight} />
      </Col>
    </Row>
  )
}