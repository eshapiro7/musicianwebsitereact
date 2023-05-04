import React, { Component } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import Pic1 from "../img/Def1.jpg";
import Pic2 from "../img/Def2.jpg";
class Photos extends Component {
  render() {
    const photos = () => {
      return (
        <Card>
          <CardBody>
            <img src={Pic1} width="50" height="50" alt="dane pictures" />
          </CardBody>
        </Card>
      );
    };
    return (
      <>
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col">
                <h3> Photos </h3>
              </div>
            </div>
            <>
              <Card>
                {/* <CardBody>{gigs}</CardBody> */}
                <CardBody>
                  <img src={Pic1} alt="DJ DANGEROUS DANE" height="200" />
                  <img src={Pic2} alt="DJ DANGEROUS DANE" height="200" />
                </CardBody>
                <CardBody>
                  <div className="temp-gig"></div>
                </CardBody>
              </Card>
            </>

            {/* <p className="p-3">Under construction - photos coming soon.</p> */}
          </div>
        </div>
      </>
    );
  }
}
export default Photos;
