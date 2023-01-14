import { Col, Dropdown, DropdownButton, Form, Row } from "react-bootstrap";

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
            <Form.Control type="number" placeholder="00000" />
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
            <Form.Control type="number" placeholder="00000" />
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
            <Form.Control type="date" placeholder="City" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group>
            <Form.Label>Payment Terms</Form.Label>
            <DropdownButton title={"Next 30 Days"}>
              <Dropdown.Item>Next 30 Days</Dropdown.Item>
              <Dropdown.Item>Next 60 Days</Dropdown.Item>
              <Dropdown.Item>Next 90 Days</Dropdown.Item>
            </DropdownButton>
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