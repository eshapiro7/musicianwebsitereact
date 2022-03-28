import React, { Component } from "react";
import { Card, CardBody, CardHeader } from 'reactstrap';
import background from '../img/dane1.jpg';

const giglist = [
{
    id: 0, 
    date: '6/22/22',
    location: 'Greenroom 42 New York, NY',
    ticket: 'https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000'
},
{
    id: 1, 
    date: '6/25/22',
    location: 'Greenroom 42 New York, NY',
    ticket: 'https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000'
},
{
    id: 2, 
    date: '7/3/22',
    location: 'Anything Brooklyn, NY',
    ticket: 'https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000'
},
{
    id:3, 
    date: '7/9/22',
    location: 'Anything Brooklyn, NY',
    ticket: 'https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000'
},
{
    id: 4, 
    date: '7/30/22',
    location: 'Lips Cafe Brooklyn, NY',
    ticket: 'https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000'
}, 
{
    id: 5, 
    date: '7/30/22',
    location: 'Freddy\'s Bar Brooklyn, NY',
    ticket: 'https://thegreenroom42.venuetix.com/show/details/ZCoquGtfA7zvtf2l3cQf/1655938800000'
}

];

class GigCopy extends Component {
    constructor(props) {
        super(props);

        this.date = this.date;
        this.location= this.location;
        this.ticket=this.ticket;
    }

    render() {
        const gigs = giglist.map((gig) => {
            return (
               
                    <Card>
                        <CardBody>
                            <dl className="row">
                                <dt className="col-4">{gig.date}</dt>
                                <dt className="col-4">{gig.location}</dt>
                                <dt className="col-4"><button className="btn btn-md btn-info"><a href={gig.ticket} target="_blank">Tickets</a></button></dt>
                            </dl>
                        </CardBody>
                    </Card>
             
            );
            });
        return (
            <>
                 <div id="bg-img" style={{ backgroundImage: `url(${background})` }}>
                  
                    <Card>
                        <CardHeader><h3>Upcoming Gigs</h3></CardHeader>
                        <CardBody>
                         {gigs} 
                         
                        </CardBody>
                    </Card>
                       
                               
                            
                       
                    </div>
               
            </>
        );
    }
}

export default GigCopy;
