import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import background from "../img/dane1.jpg";
import { GIGLIST } from "../giglist";

class GigCopy extends Component {
  render() {
    const gigs = GIGLIST.map((gig) => {
      return (
        <Card>
          <CardBody>
            <dl className="row row-content text-center">
              <dt className="col-4">{gig.date}</dt>
              <dt className="col-4">{gig.location}</dt>
              <dt className="col-4">
                <button className="btn btn-md btn-info">
                  <a className="font-white" href={gig.ticket} target="_blank">
                    Tickets
                  </a>
                </button>
              </dt>
            </dl>
          </CardBody>
        </Card>
      );
    });
    return (
      <>
        <div id="bg-img" style={{ backgroundImage: `url(${background})` }}>
          <Card>
            <CardHeader>
              <h3>Upcoming Gigs</h3>
            </CardHeader>
            <CardBody>{gigs}</CardBody>
          </Card>
        </div>
      </>
    );
  }
}

export default GigCopy;
