import React, { useState, useRef } from "react";
import background from "../img/dane1.jpg";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { send } from "emailjs-com";

function Contact() {
  const form = useRef();

  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_fwq1h8x", "template_pkrd9la", toSend, "tLcSY7xkUjnG0w76M")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const [values, setValues] = useState({
    email: "",
    name: "",
    subject: "",
    message: "",
  });

  const resetValues = (event) => {
    event.persist();
    setValues((values) => ({
      email: "",
      name: "",
      subject: "",
      message: "",
    }));
  };

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <div
        className="Contact"
        id="bg-img"
        style={{ backgroundImage: `url(${background})` }}
      >
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
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  name="from_name"
                  placeholder="Name"
                  value={toSend.from_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="reply_to"
                  placeholder="Email"
                  value={toSend.reply_to}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="to_name"
                  placeholder="Subject"
                  value={toSend.to_name}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="message"
                  placeholder="What's up?"
                  value={toSend.message}
                  onChange={handleChange}
                />

                <button className="btn btn-info ml-3" type="submit">
                  Submit
                </button>

                {/*  <Button
                  className="btn btn-info mt-3 ml-3"
                  onClick={resetValues}
                >
                  Submit
                </Button>
                */}
              </form>

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
