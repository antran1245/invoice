import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faEuroSign } from "@fortawesome/free-solid-svg-icons";
import { Context } from "../context/InvoiceContext";
import "../sass/invoicedetail.scss"

export default function InvoiceDetail() {
  const context = useContext(Context)

  return (
    context?.invoice ?
      <div id="detail">
        <Row className="back">
          <p onClick={() => context.setInvoice(null)}>
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
              <div className={`status ${context.invoice.status}`}>
                <span>&#x2022;</span>
                <p>{context?.invoice.status}</p>
              </div>
            </div>
            <div className="buttonGroup d-none d-md-flex w-100 justify-content-end">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
              <button className="markAsPaid">Mark as Paid</button>
            </div>
          </Col>
        </Row>
        <Row className="invoice">
          <Row>
            <Col xs={12} md={6}>
              <p className="invoiceId">#<span>{context.invoice.id}</span></p>
              <p className="description mt-2">{context.invoice.description}</p>
            </Col>
            <Col className="senderAddress text-start text-md-end mt-4 mt-md-0" xs={12} md={6}>
              <p>{context.invoice.senderAddress.street}</p>
              <p>{context.invoice.senderAddress.city}</p>
              <p>{context.invoice.senderAddress.postCode}</p>
              <p>{context.invoice.senderAddress.country}</p>
            </Col>
          </Row>
          <Row className="clientAddress">
            <Col xs={6} md={4}>
              <div>
                <p className="subtitle">Invoice Date</p>
                <p className="highlight mt-3">
                  {new Date(context.invoice.createdAt).getDate()} {new Date(context.invoice.createdAt).toLocaleDateString('en-us', { year: "numeric", month: "short" })}
                </p>
              </div>
              <div className="dueDate">
                <p className="subtitle">Payment Due</p>
                <p className="highlight mt-3">
                  {new Date(context.invoice.paymentDue).getDate()} {new Date(context.invoice.paymentDue).toLocaleDateString('en-us', { year: "numeric", month: "short" })}
                </p>
              </div>
            </Col>
            <Col xs={6} md={4}>
              <p className="subtitle">Bill To</p>
              <p className="highlight mt-3">{context.invoice.clientName}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.street}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.city}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.postCode}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.country}</p>
            </Col>
            <Col className="mt-4 mt-md-0">
              <p className="subtitle">Sent to</p>
              <p className="highlight mt-3">{context.invoice.clientEmail}</p>
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
              context.invoice.items.map((item, index) => {
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
            <Col className="total"><FontAwesomeIcon icon={faEuroSign} /> {context.invoice.total}</Col>
          </Row>
        </Row>
      </div> : null
  )
}