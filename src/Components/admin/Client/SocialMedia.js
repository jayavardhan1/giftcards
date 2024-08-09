import React from 'react';
import { Form, Col, Row, Button } from 'react-bootstrap';

const SocialMedia = () => {
    return (
        <Form>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="twitterUrl">
                        <Form.Label>Twitter URL:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Text className="text-muted">
                            The URL for the client's Twitter feed. If present, the Twitter link will be displayed on the default layout template.
                        </Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="facebookUrl">
                        <Form.Label>Facebook URL:</Form.Label>
                        <Form.Control type="text" placeholder="" />
                        <Form.Text className="text-muted">
                            The URL for the client's Facebook page. If present, the Facebook link will be displayed on the default layout template.
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

export default SocialMedia;
