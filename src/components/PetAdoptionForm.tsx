import { useEffect, useState } from "react";
import { Pet } from "../models/Pet";
import { getPetById } from "../services/petService";
import { useParams } from "react-router-dom";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { AdoptionForm } from "../models/AdoptionForm";
import { postAdoption } from "../services/adoptionService";
import '../components/css/style.css';

export function PetAdoptionForm(){
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
    const [pet, setPet] = useState<Pet | null>(null);
    const [formValues, setFormValues] = useState<AdoptionForm>({
        firstName: '',
        middleName: '',
        lastName: '',
        hasFencedYard: false,
        hasChildren: false,
        hasOtherPets: false,
        phoneNumber: '',
        email: '',
        aboutSelf: ''
    });

    const { id } = useParams();

    useEffect(() => {
        if(id !== undefined){
            getPetById(Number(id)).then((pet) => { setPet(pet)});
        }
    }, [id]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;

        if(type === 'checkbox'){
            setFormValues(prev => ({
                ...prev,
                [name] : (e.target as HTMLInputElement).checked
            }));
        }
        else{
            setFormValues(prev => ({
                ...prev,
                [name]: value
            }));
        }
    }

    function onSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault();
        postAdoption(formValues);
        setFormSubmitted(true);
    }

    return(
        <div className="PetAdoptionForm">
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    { formSubmitted ? <Alert>One of our team members will get back with you as soon as possible, thanks!</Alert> : 
                <Form onSubmit={onSubmit}>
                <Form.Group controlId="firstName">
                        <Form.Label><strong>First Name</strong></Form.Label>
                        <Form.Control 
                            type="text"
                            name="firstName"
                            value={formValues.firstName}
                            onChange={handleChange}
                            required
                            placeholder="Enter your first name"
                        />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Label><strong>Last Name</strong></Form.Label>
                        <Form.Control 
                            type="text"
                            name="lastName"
                            value={formValues.lastName}
                            onChange={handleChange}
                            required 
                            placeholder="Enter your last name"
                        />

                    </Form.Group>
                    <Form.Group controlId="phoneNumber">
                        <Form.Label><strong>Phone Number</strong></Form.Label>
                        <Form.Control 
                            type="tel"
                            name="phoneNumber"
                            value={formValues.phoneNumber}
                            onChange={handleChange}
                            pattern="[0-9]{8}"
                            placeholder="Enter your phone number" 
                        />
                        <Form.Text className="text-muted">
                            Example: 88886666
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="email">
                        <Form.Label><strong>Email</strong></Form.Label>
                        <Form.Control 
                            type="email"
                            name="email"
                            value={formValues.email}
                            onChange={handleChange}
                            pattern="\S+@\S+\.\S+"
                            placeholder="Enter your Email" 
                        />
                        <Form.Text className="text-muted">
                            Example: email@domain.com
                        </Form.Text>
                    </Form.Group>

                    <Form.Group controlId="aboutSelf">
                        <Form.Label><strong>About Yourself</strong></Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={3}
                            name="aboutSelf"
                            value={formValues.aboutSelf}
                            onChange={handleChange} 
                        />
                    </Form.Group>

                    {pet?.animalType === 'dog' && (
                        <Form.Check 
                            type="checkbox"
                            id="hasFencedYard"
                            label="Do you have a fenced yard? (For dogs only)"
                            name="hasFencedYard"
                            checked={formValues.hasFencedYard}
                            onChange={handleChange}
                            className="highlight-checkbox" 
                        />
                    )}

                    <Form.Check 
                        type="checkbox"
                        id="hasChildren"
                        label="Do you have children?"
                        name="hasChildren"
                        checked={formValues.hasChildren}
                        onChange={handleChange}
                        className="highlight-checkbox" 
                    />

                    <Form.Check 
                        type="checkbox"
                        id="hasOtherPets"
                        label="Do you have other pets?"
                        name="hasOtherPets"
                        checked={formValues.hasOtherPets}
                        onChange={handleChange}
                        className="highlight-checkbox" 
                    />

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                        }
                </Col>
                <Col lg={3}></Col>
            </Row>
        </div>
    )
}