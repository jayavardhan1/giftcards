import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const EntryExit = () => {
    return (
        <Form>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="loginRedirection">
                        <Form.Label>Login Redirection</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Text className="text-muted">
                            Users attempting to login via the portal login page will instead be redirected here. Default is blank.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="logoutRedirection">
                        <Form.Label>Logout Redirection</Form.Label>
                        <Form.Check
                            type="switch"
                            id="logout-redirection-switch"
                            label=""
                            checked={true} // Replace with your state logic
                        />
                        <Form.Text className="text-muted">
                            Users logging out will be redirected to the URL defined in their Tier.
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="facebookLogin">
                        <Form.Label>Facebook Login</Form.Label>
                        <Form.Check
                            type="switch"
                            id="facebook-login-switch"
                            label=""
                            checked={false} // Replace with your state logic
                        />
                        <Form.Text className="text-muted">
                            Enables/Disables Facebook Login for this client (Facebook login button appears on login screen).
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="clientApiActivation">
                        <Form.Label>Client API Activation Link Creation</Form.Label>
                        <Form.Check
                            type="switch"
                            id="client-api-activation-switch"
                            label=""
                            checked={false} // Replace with your state logic
                        />
                        <Form.Text className="text-muted">
                            Enables/Disables whether the API creates and returns an activation link for a newly created user by the client (through API).
                        </Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Button variant="primary" type="submit">
                Save Changes
            </Button>
        </Form>
    );
};

export default EntryExit;
