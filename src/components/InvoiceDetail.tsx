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
          <Col className="statusContainer">
            <div>
              <p>Status</p>
              <div className={`status ${context.invoice.status}`}>
                <span>&#x2022;</span>
                <p>{context?.invoice.status}</p>
              </div>
            </div>
            <div className="buttonGroup">
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
              <button className="markAsPaid">Mark as Paid</button>
            </div>
          </Col>
        </Row>
        <Row className="invoice">
          <Row>
            <Col>
              <p className="invoiceId">#<span>{context.invoice.id}</span></p>
              <p className="description mt-2">{context.invoice.description}</p>
            </Col>
            <Col className="senderAddress">
              <p>{context.invoice.senderAddress.street}</p>
              <p>{context.invoice.senderAddress.city}</p>
              <p>{context.invoice.senderAddress.postCode}</p>
              <p>{context.invoice.senderAddress.country}</p>
            </Col>
          </Row>
          <Row className="clientAddress">
            <Col md={4}>
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
            <Col md={4}>
              <p className="subtitle">Bill To</p>
              <p className="highlight mt-3">{context.invoice.clientName}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.street}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.city}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.postCode}</p>
              <p className="subtitle mt-2">{context.invoice.clientAddress.country}</p>
            </Col>
            <Col>
              <p className="subtitle">Sent to</p>
              <p className="highlight mt-3">{context.invoice.clientEmail}</p>
            </Col>
          </Row>
          <Row className="itemListing">
            <div className="heading">
              <Col md={5}>Item Name</Col>
              <Col md={2}>QTY.</Col>
              <Col md={2}>Price</Col>
              <Col md={3} className="total">Total</Col>
            </div>
            {
              context.invoice.items.map((item, index) => {
                return <div key={index} className="item">
                  <Col md={5}>{item.name}</Col>
                  <Col md={2} className="detail">{item.quantity}</Col>
                  <Col md={2} className="detail"><FontAwesomeIcon icon={faEuroSign} /> {item.price}</Col>
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