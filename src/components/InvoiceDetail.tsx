import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/InvoiceContext";
import "../sass/invoicedetail.scss"

export default function InvoiceDetail() {
  const { invoice, setInvoice, setOverlay } = useContext(Context)

  return (
    invoice ?
      <div id="detail">
        <Row className="back">
          <p onClick={() => setInvoice(null)}>
            <span>
              <FontAwesomeIcon icon={faAngleLeft} />
            </span>
            Go back
          </p>
        </Row>
        <Row>
          <Col className="statusContainer justify-content-between">
            <div className="d-flex justify-content-between justify-content-md-start w-100">
              <p>Status</p>
              <div className={`status ${invoice.status}`}>
                <span>&#x2022;</span>
                <p>{invoice.status}</p>
              </div>
            </div>
            <div className="buttonGroup d-none d-md-flex w-100 justify-content-end">
              <button className="edit" onClick={() => setOverlay(true)}>Edit</button>
              <button className="delete">Delete</button>
              <button className="markAsPaid">Mark as Paid</button>
            </div>
          </Col>
        </Row>
        <Row className="invoice">
          <Row>
            <Col xs={12} md={6}>
              <p className="invoiceId">#<span>{invoice.id}</span></p>
              <p className="description mt-2">{invoice.description}</p>
            </Col>
            <Col className="senderAddress text-start text-md-end mt-4 mt-md-0" xs={12} md={6}>
              <p>{invoice.senderAddress.street}</p>
              <p>{invoice.senderAddress.city}</p>
              <p>{invoice.senderAddress.postCode}</p>
              <p>{invoice.senderAddress.country}</p>
            </Col>
          </Row>
          <Row className="clientAddress">
            <Col xs={6} md={4}>
              <div>
                <p className="subtitle">Invoice Date</p>
                <p className="highlight mt-3">
                  {new Date(invoice.createdAt).getDate()} {new Date(invoice.createdAt).toLocaleDateString('en-us', { year: "numeric", month: "short" })}
                </p>
              </div>
              <div className="dueDate">
                <p className="subtitle">Payment Due</p>
                <p className="highlight mt-3">
                  {new Date(invoice.paymentDue).getDate()} {new Date(invoice.paymentDue).toLocaleDateString('en-us', { year: "numeric", month: "short" })}
                </p>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <p className="subtitle">Bill To</p>
              <p className="highlight mt-3">{invoice.clientName}</p>
              <p className="subtitle mt-2">{invoice.clientAddress.street}</p>
              <p className="subtitle mt-2">{invoice.clientAddress.city}</p>
              <p className="subtitle mt-2">{invoice.clientAddress.postCode}</p>
              <p className="subtitle mt-2">{invoice.clientAddress.country}</p>
            </Col>
            <Col className="mt-4 mt-md-0">
              <p className="subtitle">Sent to</p>
              <p className="highlight mt-3">{invoice.clientEmail}</p>
            </Col>
          </Row>
          <Row className="itemListing">
            <div className="heading d-none d-md-flex">
              <Col md={9} className="d-flex">
                <Col md={7}>Item Name</Col>
                <Col md={2} className="text-center">QTY.</Col>
                <Col md={2} className="text-end">Price</Col>
              </Col>
              <Col md={3} className="total">Total</Col>
            </div>
            {
              invoice.items.map((item, index) => {
                return <div key={index} className={`item ${index !== 0 ? 'mt-4' : 'mt-0 mt-md-4'} align-items-center`}>
                  <Col xs={9} md={9} className="d-flex flex-wrap align-items-center">
                    <Col xs={12} sm={12} md={7}>{item.name}</Col>
                    <Col xs={2} sm={1} md={2} className="detail text-start text-md-center mt-1 mt-md-0">{item.quantity} <span className="d-md-none">x</span></Col>
                    <Col xs={4} sm={3} md={2} className="detail text-start text-md-end mt-1 mt-md-0"><FontAwesomeIcon icon={faEuroSign} /> {item.price}</Col>
                  </Col>
                  <Col md={3} className="total"><FontAwesomeIcon icon={faEuroSign} /> {item.total}</Col>
                </div>
              })
            }
          </Row>
          <Row className="amount">
            <Col>Amount Due</Col>
            <Col className="total"><FontAwesomeIcon icon={faEuroSign} /> {invoice.total}</Col>
          </Row>
        </Row>
      </div> : null
  )
}