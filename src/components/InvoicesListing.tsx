import { useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCirclePlus, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Invoice from "./Invoice";
import empty from '../assets/illustration-empty.svg'
import data from '../data.json'
import "../sass/invoiceslisting.scss"

export default function InvoicesListing() {
  const [angle, setAngle] = useState<boolean>(true)
  return (
    <div id="invoicesListing">
      <Row>
        <header id="header">
          <div>
            <h1 className="title">Invoices</h1>
            <p className="subtitle">There are 7 total invoices</p>
          </div>
          <div className="options">
            <Dropdown id="filter-button" autoClose={false}>
              <Dropdown.Toggle onClickCapture={() => setAngle(!angle)}>
                Filter by status <FontAwesomeIcon icon={angle ? faAngleDown : faAngleUp} />
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <div><label><input type={"checkbox"} value="Draft" /> Draft</label></div>
                <div><label><input type={"checkbox"} value="Pending" /> Pending</label></div>
                <div><label><input type={"checkbox"} value="Paid" /> Paid</label></div>
              </Dropdown.Menu>
            </Dropdown>
            <button className="new"><FontAwesomeIcon icon={faCirclePlus} /> New Invoice</button>
          </div>
        </header>
      </Row>
      <Row id="invoicesContainer">
        {
          data.length > 0 ?
            <Col className="listing">
              {data.map((item, index) => {
                return <Invoice key={index} {...item} />
              })}
            </Col> :
            <Col xs={3} className="empty">
              <img src={empty} alt="no invoice" />
              <p>There is nothing here</p>
              <p className="subtitle"> Create an invoice by clicking the <b>New Invoice</b> button and get started</p>
            </Col>
        }
      </Row>
    </div>
  )
}