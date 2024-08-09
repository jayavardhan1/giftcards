import React, { useEffect, useState } from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { getCategoryDetails } from '../../../service/Api';

const EditCategory = () => {
    const [categoryDetails, setCategoryDetails] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCategoryDetails();
            setCategoryDetails(data);
        };
        fetchData();
    }, []);

    if (!categoryDetails) {
        return <div>Loading...</div>;
    }

    return (
        <Container style={{ flexDirection: "column" }}>
            <div className="d-flex justify-content-end mb-3">
                <Button variant="primary" type="submit">
                    Save Changes
                </Button>
            </div>
            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="categoryName">
                        <Form.Label><strong>Category Name:</strong></Form.Label>
                        <Form.Control type="text" placeholder={categoryDetails.name} className="input-field" />
                        <Form.Text className="text-muted">The name of the category displayed on the screen.</Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="parent">
                        <Form.Label><strong>Parent:</strong></Form.Label>
                        <Form.Control type="text" placeholder={categoryDetails.parent} className="input-field" />
                        <Form.Text className="text-muted">The name of the parent of this category.</Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="categoryLinkBehaviour">
                        <Form.Label><strong>Category Link Behaviour:</strong></Form.Label>
                        <Form.Control as="select">
                            {categoryDetails.linkBehaviourOptions.map((option, index) => (
                                <option key={index} value={option}>{option}</option>
                            ))}
                        </Form.Control>
                        <Form.Text className="text-muted">How the browser reacts when the link to the category is selected.</Form.Text>
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="customLink">
                        <Form.Label><strong>Custom Link:</strong></Form.Label>
                        <Form.Control type="text" placeholder={categoryDetails.customLink} />
                        <Form.Text className="text-muted">URL used when the category links to a custom address.</Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="iconClassName">
                        <Form.Label><strong>Icon Class Name:</strong></Form.Label>
                        <Form.Control type="text" placeholder={categoryDetails.iconClassName} />
                        <Form.Text className="text-muted">CSS Class name used when rendering this category on a category highlights list (depending on the category highlight template used).</Form.Text>
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="categoryPageHeaderImage">
                        <Form.Label><strong>Category Page Header Image:</strong></Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="subCategoryPageImage">
                        <Form.Label><strong>Sub Category Page Image:</strong></Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="thumbnailImage">
                        <Form.Label><strong>Thumbnail Image:</strong></Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col>
                    <Form.Group controlId="clientList">
                        <Form.Label><strong>Client List:</strong></Form.Label>
                        <Form.Control as="select" multiple>
                            {categoryDetails.clients.map((client, index) => (
                                <option key={index} value={client}>{client}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
};

export default EditCategory;
