import React, { Component } from 'react';
import background from "../img/dane1.jpg";



class About extends Component {

    render() {

        return(
        <>
        
            <div style={{ backgroundImage: `url(${background})`}}>
               <div className='container'>
                
                    <h3>
                    Dane Scozzari is a drummer, DJ and singer-songwriter based in Brooklyn, NY.
                    </h3>
                    <p>He was the leader of the neo-soul/jazz group, The Human Race, and has since written, recorded and performed with Will Leet, Olive Tiger, Fat Bradley, and Larger Than Life: The Ultimate Boy Band Tribute. Scozzari’s upcoming solo project, which aims to synthesize elements of jazz, hip-hop and EDM into a new vehicle of self-expression, will be called The Defense. Scozzari continues to play drums and DJ professionally, and lives with his wife in Brooklyn, NY.</p>
                    </div>
            </div>
        </>
        );
    };
}
export default About
