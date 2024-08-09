import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const Overrides = () => {
    return (
        <Form>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="paymentProcessingFee">
                        <Form.Label>Payment Processing Fee Override</Form.Label>
                        <Form.Control type="number" placeholder="0.01" />
                        <Form.Text className="text-muted">
                            Overrides the default payment processing fee for transactions executed by members of this client.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="applyPaymentProcessingFee">
                        <Form.Label>Apply Payment Processing Fee</Form.Label>
                        <Form.Control as="select">
                            <option>No</option>
                            <option>Yes</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Enable or disable payment processing fee.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="reduceDiscountPercentage">
                        <Form.Label>Reduce Discount Percentage By</Form.Label>
                        <Form.Control type="number" placeholder="0" />
                        <Form.Text className="text-muted">
                            Reduces the reward discount % if payment processing fee is disabled.
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="displayContactUsPhone">
                        <Form.Label>Display Contact Us (Phone)</Form.Label>
                        <Form.Control as="select">
                            <option>Yes</option>
                            <option>No</option>
                        </Form.Control>
                        <Form.Text className="text-muted">
                            Whether to display the phone number on the contact us page.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="contactUsPhone">
                        <Form.Label>Contact Us (Phone)</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Text className="text-muted">
                            Overrides default contact us phone number (1300 887 787).
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="customerServiceSystem">
                        <Form.Label>Customer Service System</Form.Label>
                        <Form.Control as="select">
                            <option>Fresh Desk</option>
                            <option>Other</option>
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="contactUsEmail">
                        <Form.Label>Contact Us (Email)</Form.Label>
                        <Form.Control type="email" placeholder="" />
                        <Form.Text className="text-muted">
                            Overrides default contact us email address (enquiries@yourlifestylebenefits.com.au).
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="midName">
                        <Form.Label>Mid Name</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="midValue">
                        <Form.Label>Mid Value</Form.Label>
                        <Form.Control type="text" placeholder="" />
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                Save Changes
            </Button>
        </Form>
    );
};

export default Overrides;
