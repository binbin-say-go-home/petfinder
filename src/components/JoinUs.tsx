import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import '../components/css/header.css';

export function JoinUs() {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        alert('Form submitted successfully!');
    };

    return (
        <div>
            <Container className="mt-4">
                <h2 className="text-center mb-4">Fill up this form to Join Us now!!!</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                        <Form.Label><strong>Name</strong></Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter your name"
                            required />
                    </Form.Group>

                    <Form.Group controlId="phoneNumber">
                        <Form.Label><strong>Phone Number</strong></Form.Label>
                        <Form.Control 
                            type="tel"
                            name="phoneNumber"
                            pattern="[0-9]{8}"
                            placeholder="Enter your phone number" 
                        />
                        <Form.Text className="text-muted">
                            Example: 12345678
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                        <Form.Label><strong>Email address</strong></Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Enter your email"
                            required
                            pattern="\S+@\S+\.\S+"  />
                        <Form.Text className="text-muted">
                            Example: email@domain.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                        <Form.Label><strong>Message</strong></Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
                    </Form.Group>

                    <Form.Group controlId="formSubmit" className="mt-3">
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
}
