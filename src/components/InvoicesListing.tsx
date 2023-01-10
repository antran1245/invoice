import { useEffect, useState } from "react";
import { Col, Dropdown, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faCirclePlus, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Invoice from "./Invoice";
import empty from '../assets/illustration-empty.svg'
import file from '../data.json'
import "../sass/invoiceslisting.scss"
import { InvoiceInterface } from "../interfaces/InvoiceInterface";

export default function InvoicesListing() {
  const [angle, setAngle] = useState<boolean>(true)
  const [data, setData] = useState<InvoiceInterface[] | []>([])
  const [filter, setFilter] = useState<{ 'draft': boolean, 'pending': boolean, 'paid': boolean }>({ 'draft': false, 'pending': false, 'paid': false })

  useEffect(() => {
    setData(file)
  }, [])

  /**
   * Reset all the filter to default (false).
   * Filter the invoices by a status.
   * Or show all invoices if no checkbox is checked.
   * @param e : change in checkbox check or uncheck
   */
  const filterStatus = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      let curr = file.filter(item => item.status === e.target.value)
      let defaultFilter = { 'draft': false, 'pending': false, 'paid': false }
      setData(curr)
      setFilter({ ...defaultFilter, [e.target.value]: true })
    } else {
      setData(file)
      setFilter({ 'draft': false, 'pending': false, 'paid': false })
    }
  }

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
                <div><label><input type={"checkbox"} value="draft" onChange={(e) => filterStatus(e)} checked={filter.draft} /> Draft</label></div>
                <div><label><input type={"checkbox"} value="pending" onChange={(e) => filterStatus(e)} checked={filter.pending} /> Pending</label></div>
                <div><label><input type={"checkbox"} value="paid" onChange={(e) => filterStatus(e)} checked={filter.paid} /> Paid</label></div>
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