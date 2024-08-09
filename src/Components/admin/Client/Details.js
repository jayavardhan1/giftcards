import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getClientById } from '../../../service/Api';
import {updateSuccess} from "../../../alerts";

const ClientDetails = () => {
    const [ClientDetailsData, setClientDetailsData] = useState(null);
    const { clientId } = useParams(); // Fetch clientId from URL parameters

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getClientById(clientId);
                setClientDetailsData(data);
            } catch (error) {
                console.error("Error fetching client details:", error);
            }
        };
        fetchData();
    }, [clientId]);

    if (!ClientDetailsData) {
        return <div>Loading...</div>;
    }
    // save function
    const save = () => {
        console.log('save');
        updateSuccess();
    };
    return (
        <Container style={{ flexDirection: "column" }}>
            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" type="submit" onClick={save}>
                    Save Changes
                </Button>
            </div>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="clientName">
                        <Form.Label><strong>Name:</strong></Form.Label>
                        <Form.Control type="text" placeholder={ClientDetailsData.clientName || ''} className="input-field" />
                        <Form.Text className="text-muted">The name of the client.</Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="programName">
                        <Form.Label><strong>Program Name:</strong></Form.Label>
                        <Form.Control type="text" placeholder={ClientDetailsData.programName || ''} className="input-field" />
                        <Form.Text className="text-muted">The name of the Loyalty Program.</Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="portalWebsite">
                        <Form.Label><strong>Portal Website:</strong></Form.Label>
                        <Form.Control type="text" placeholder={ClientDetailsData.portalWebsite || ''} />
                        <Form.Text className="text-muted">The URL used to access this portal.</Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="clientWebsite">
                        <Form.Label><strong>Client Website:</strong></Form.Label>
                        <Form.Control type="text" placeholder={ClientDetailsData.clientWebsite || ''} />
                        <Form.Text className="text-muted">The URL used to access the client's home website.</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="status">
                        <Form.Label><strong>Status:</strong></Form.Label>
                        <Form.Control as="select">
                            {(ClientDetailsData.statusOptions || []).map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="transactionLimit">
                        <Form.Label><strong>Transaction Limit ($):</strong></Form.Label>
                        <Form.Control type="number" placeholder={ClientDetailsData.transactionLimit || ''} />
                        <Form.Text className="text-muted">If transactions exceed $5,000 within 24 hours an SMS alert will trigger.</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="availableFrom">
                        <Form.Label><strong>Available From:</strong></Form.Label>
                        <Form.Control type="datetime-local" />
                        <Form.Text className="text-muted">The earliest date at which this portal is accessible.</Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="availableUntil">
                        <Form.Label><strong>Available Until:</strong></Form.Label>
                        <Form.Control type="datetime-local" />
                        <Form.Text className="text-muted">The latest date at which this portal is accessible.</Form.Text>
                    </Form.Group>
                </Col>
            </Row>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="clientKey">
                        <Form.Label><strong>Client Key:</strong></Form.Label>
                        <Form.Control type="text" placeholder={ClientDetailsData.clientKey || ''} readOnly />
                        <Form.Text className="text-muted">System generated - used by clients and apps to identify the source of the request in the API prior to user authentication.</Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="countryOfOrigin">
                        <Form.Label><strong>Country of Origin:</strong></Form.Label>
                        <Form.Control as="select">
                            {(ClientDetailsData.countryOptions || []).map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default ClientDetails;
