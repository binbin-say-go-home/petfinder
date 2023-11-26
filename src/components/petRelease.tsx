import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

interface PetReleaseForm {
  petName: string;
  reasonForRelease: string;
  phoneNumber: string;
  picture: File | null;
  petType: string;
  gender: string;
  age: number;
  breed: string;
}

export function PetRelease() {
  const [formValues, setFormValues] = useState<PetReleaseForm>({
    petName: '',
    reasonForRelease: '',
    phoneNumber: '',
    picture: null,
    petType: '',
    gender: '',
    age: 0,
    breed: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    
    if (name === 'age') {
      const ageValue = parseInt(value, 10);
      if (isNaN(ageValue) || ageValue < 0) {
        return;
      }
    }

    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setFormValues((prev) => ({
      ...prev,
      picture: file || null,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formValues);
    alert('Your form is submitted! Please wait for our staff to contact you');
  };
  

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Pet Release Form</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="petName">
          <Form.Label style={{ fontWeight: 'bold' }}>What is your Pet Name</Form.Label>
          <Form.Control
            type="text"
            name="petName"
            value={formValues.petName}
            onChange={handleChange}
            placeholder="Enter pet name"
            required
          />
        </Form.Group>

        <Form.Group controlId="petType">
          <Form.Label style={{ fontWeight: 'bold' }}>What is your Pet Type</Form.Label>
          <Form.Select
            name="petType"
            value={formValues.petType}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Pet Type</option>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="reasonForRelease">
          <Form.Label style={{ fontWeight: 'bold' }}>Reason for Release your pet</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="reasonForRelease"
            value={formValues.reasonForRelease}
            onChange={handleChange}
            placeholder="Enter reason for release"
            required
          />
        </Form.Group>

        <Form.Group controlId="phoneNumber">
          <Form.Label style={{ fontWeight: 'bold' }}>Phone Number</Form.Label>
          <Form.Control
            type="tel"
            name="phoneNumber"
            value={formValues.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{8}"
            placeholder="Enter phone number"
            required
          />
        </Form.Group>

        <Form.Group controlId="picture">
          <Form.Label style={{ fontWeight: 'bold' }}>Upload Picture</Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFileChange}
          />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label style={{ fontWeight: 'bold' }}>Gender of the pet</Form.Label>
          <Form.Select
            name="gender"
            value={formValues.gender}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="age">
          <Form.Label style={{ fontWeight: 'bold' }}>Age of the pet</Form.Label>
          <Form.Control
            type="number"
            name="age"
            value={formValues.age}
            onChange={handleChange}
            placeholder="Enter age"
            required
          />
        </Form.Group>

        <Form.Group controlId="breed">
          <Form.Label style={{ fontWeight: 'bold' }}>What is the Breed</Form.Label>
          <Form.Control
            type="text"
            name="breed"
            value={formValues.breed}
            onChange={handleChange}
            placeholder="Enter breed"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-2">
          Release Pet
        </Button>
      </Form>
    </Container>
  );
}
