import React, { Component } from "react";

class Music extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div class="row">
                        <div class="col">
                            <h3> Music </h3>
                        </div>
                    </div>
                    <div class="row row-content">
                        <div class="col">
                            <a>
                                {" "}
                                <img
                                    src="https://f4.bcbits.com/img/a3537997805_10.jpg"
                                    height="200"
                                    id="oliveOne"
                                />
                            </a>
                        </div>
                        <div class="col">
                            <a>
                                {" "}
                                <img
                                    src="https://i.scdn.co/image/ab67616d0000b273cbc2c23d1bc771c62c9a81e5"
                                    height="200"
                                    id="willLeet"
                                />
                            </a>
                        </div>
                        <div class="col">
                            <a>
                                {" "}
                                <img
                                    src="https://f4.bcbits.com/img/0013514705_10.jpg"
                                    height="200"
                                    id="oliveTwo"
                                />
                            </a>
                        </div>
                        <div class="col">
                            <a>
                                {" "}
                                <img
                                    src="src/img/Human Race album cover.jpg"
                                    height="200"
                                    id="humanRace"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Music;
