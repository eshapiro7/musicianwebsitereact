import React from "react";
import background from "../img/dane1.jpg";
import { Card, CardBody, CardHeader } from 'reactstrap';

function Gigs() {
    
        return (
            <>
                <div id="bg-img" style={{ backgroundImage: `url(${background})`}}>
                    <div className="container">
                    <Card>
                        <CardHeader><h3>Upcoming Gigs</h3></CardHeader>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-4">Wednesday 6/22/22</dt>
                                <dt className="col-4">Greenroom 42 New York, NY</dt>
                                <dd className="col-4"><button className="btn btn-md btn-info"><a href="https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000" target="_blank">Tickets</a></button></dd>

                                <dt className="col-4">Friday 6/24/22</dt>
                                <dt className="col-4">February 3, 2016</dt>
                                <dd className="col-4"><button className="btn btn-md btn-info"><a href="https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000" target="_blank">Tickets</a></button></dd>

                                <dt className="col-4">Saturday 6/25/22</dt>
                                <dt className="col-4">Anything Brooklyn, NY</dt>
                                <dd className="col-4"><button className="btn btn-md btn-info"><a href="https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000" target="_blank">Tickets</a></button></dd>

                                <dt className="col-4">Friday 7/1/22</dt>
                                <dt className="col-4">Anything Brooklyn, NY</dt>
                                <dd className="col-4"><button className="btn btn-md btn-info"><a href="https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000" target="_blank">Tickets</a></button></dd>

                                <dt className="col-4">Friday 6/24/22</dt>
                                <dt className="col-4">Lips Cafe Brooklyn, NY</dt>
                                <dd className="col-4"><button className="btn btn-md btn-info"><a href="https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000" target="_blank">Tickets</a></button></dd>
                                
                            </dl>
                        </CardBody>
                    </Card>
                       
                               
                            
                       
                    </div>
                </div>
            </>
        );
}

export default Gigs;
