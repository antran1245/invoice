import { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
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
              <div className={`status ${context?.invoice.status}`}>
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
      </div> : null
  )
}