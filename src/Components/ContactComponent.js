import React, { Component, useState } from "react";
import background from "../img/dane1.jpg";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function Contact() {
  const [values, setValues] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleEmailInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handleNameInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
  };
  const handleSubjectInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      subject: event.target.value,
    }));
  };
  const handleMessageInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      message: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div id="bg-img" style={{ backgroundImage: `url(${background})` }}>
        <div className="container">
          <div className="row row-content">
            <div className="col">
              <h3>Contact Dane</h3>
              <p>
                Fill out the fields below to get in touch with Dane regarding
                gig requests, questions, collaborations, or feedback.
              </p>
            </div>
          </div>
          <div className="row row-content">
            <div className="col">
              <Form onSubmit={handleSubmit}>
                <FormGroup className="col-sm-4">
                  <Label for="exampleEmail">Email</Label>
                  <Input
                    type="email"
                    name="email"
                    id="exampleEmail"
                    placeholder="Enter email"
                    value={values.email}
                    onChange={handleEmailInputChange}
                  />
                  {submitted && !values.email ? (
                    <span>Please enter an email</span>
                  ) : null}
                </FormGroup>

                <FormGroup className="col-sm-4">
                  <Label for="name">Your Name</Label>
                  <Input
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter name"
                    value={values.name}
                    onChange={handleNameInputChange}
                  />
                  {submitted && !values.name ? (
                    <span>Please enter a name</span>
                  ) : null}
                </FormGroup>

                <FormGroup className="col-sm-4">
                  <Label for="subject">Subject</Label>
                  <Input
                    type="subject"
                    name="subject"
                    id="subject"
                    placeholder="Enter Subject"
                    value={values.subject}
                    onChange={handleSubjectInputChange}
                  />
                  {submitted && !values.subject ? (
                    <span>Please enter a subject</span>
                  ) : null}
                </FormGroup>

                <FormGroup className="col-sm-6">
                  <Label for="message">Message</Label>
                  <Input
                    type="textarea"
                    name="message"
                    id="message"
                    placeholder="What's up?"
                    rows="5"
                    value={values.message}
                    onChange={handleMessageInputChange}
                  />
                  {submitted && !values.message ? (
                    <span>Please enter a message</span>
                  ) : null}
                </FormGroup>

                <Button className="btn btn-info mt-3 ml-3">Submit</Button>
              </Form>
              {submitted ? (
                <div
                  style={{ color: "white", paddingLeft: 20, paddingTop: 60 }}
                >
                  Your form has been submitted.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
