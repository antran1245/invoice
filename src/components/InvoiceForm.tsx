import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Dropdown, Form, Row } from "react-bootstrap";

export default function InvoiceForm() {
  return (
    <Form>
      <p>Bill Form</p>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="Street Address" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Post Code</Form.Label>
            <Form.Control type="text" placeholder="Post Code" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" />
          </Form.Group>
        </Col>
      </Row>
      <p>Bill To</p>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Client's Name</Form.Label>
            <Form.Control type="text" placeholder="Name" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Client's Email</Form.Label>
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Street Address</Form.Label>
            <Form.Control type="text" placeholder="Street Address" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Post Code</Form.Label>
            <Form.Control type="text" placeholder="Post Code" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Invoice Date</Form.Label>
            <div className="calendar">
              <Form.Control type="date" placeholder="City" />
              <FontAwesomeIcon icon={faCalendar} />
            </div>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Payment Terms</Form.Label>
            <Dropdown id="payment-terms" className="h-100">
              <Dropdown.Toggle className="w-100">
                Net 30 Days <FontAwesomeIcon icon={faAngleDown} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="w-100">
                <div>Net 1 Day</div>
                <Dropdown.Divider />
                <div>Net 7 Day</div>
                <Dropdown.Divider />
                <div>Net 14 Day</div>
                <Dropdown.Divider />
                <div>Net 30 Day</div>
              </Dropdown.Menu>
            </Dropdown>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Project Description</Form.Label>
            <Form.Control type="text" placeholder="Project Description" />
          </Form.Group>
        </Col>
      </Row>
      <h2>Item List</h2>
      <Row>
        <Col>Item Name</Col>
        <Col>Qty.</Col>
        <Col>Price</Col>
        <Col>Total</Col>
      </Row>
    </Form>
  )
}