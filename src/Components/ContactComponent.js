import React, { Component } from "react";
import background from "../img/dane1.jpg";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class Contact extends Component {
    render() {
        return (
            <>
                <div
                    id="bg-img"
                    style={{ backgroundImage: `url(${background})` }}
                >
                    <div className="container">
                        <div className="row row-content">
                            <div className="col">
                                <h3>Contact Dane</h3>
                                <p>
                                    Fill out the fields below to get in touch
                                    with Dane regarding gig requests, questions,
                                    collaborations, or feedback.
                                </p>
                            </div>
                        </div>
                        <div className="row row-content">
                            <div className="col">
                                <Form>
                                    <FormGroup className="col-sm-4">
                                        <Label for="exampleEmail">Email</Label>
                                        <Input
                                            type="email"
                                            name="email"
                                            id="exampleEmail"
                                            placeholder="Enter email"
                                        />
                                    </FormGroup>

                                    <FormGroup className="col-sm-4">
                                        <Label for="name">Your Name</Label>
                                        <Input
                                            type="name"
                                            name="name"
                                            id="name"
                                            placeholder="Enter name"
                                        />
                                    </FormGroup>

                                    <FormGroup className="col-sm-4">
                                        <Label for="subject">Subject</Label>
                                        <Input
                                            type="subject"
                                            name="subject"
                                            id="subject"
                                            placeholder="Enter Subject"
                                        />
                                    </FormGroup>

                                    <FormGroup className="col-sm-6">
                                        <Label for="message">Message</Label>
                                        <Input
                                            type="textarea"
                                            name="message"
                                            id="message"
                                            placeholder="What's up?"
                                            rows="5"
                                        />
                                    </FormGroup>

                                    <Button className="btn btn-info mt-3 ml-3">
                                        Submit
                                    </Button>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Contact;
