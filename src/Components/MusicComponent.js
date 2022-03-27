import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import HumanRace from "../../assets/img/thehumanrace.jpg";
import Bandcamp from "../../assets/img/open-bandcamp-logo-white-11562938577ooqpoam563.png";

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            isModalOpen2: false,
            isModalOpen3: false,
            isModalOpen4: false,
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleModal2 = this.toggleModal2.bind(this);
        this.toggleModal3 = this.toggleModal3.bind(this);
        this.toggleModal4 = this.toggleModal4.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen,
        });
    }

    toggleModal2() {
        this.setState({
            isModalOpen2: !this.state.isModalOpen2,
        });
    }

    toggleModal3() {
        this.setState({
            isModalOpen3: !this.state.isModalOpen3,
        });
    }

    toggleModal4() {
        this.setState({
            isModalOpen4: !this.state.isModalOpen4,
        });
    }

    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h3> Music </h3>
                        </div>
                    </div>
                    <div className="row row-content">
                        <div className="col">
                            <a onClick={this.toggleModal}>
                                {" "}
                                <img
                                    src="https://f4.bcbits.com/img/a3537997805_10.jpg"
                                    alt="olive one"
                                    height="200"
                                />
                            </a>
                        </div>
                        <div className="col">
                            <a onClick={this.toggleModal2}>
                                {" "}
                                <img
                                    src="https://i.scdn.co/image/ab67616d0000b273cbc2c23d1bc771c62c9a81e5"
                                    height="200"
                                    alt="will Leet"
                                />
                            </a>
                        </div>
                        <div className="col">
                            <a onClick={this.toggleModal3}>
                                {" "}
                                <img
                                    src="https://f4.bcbits.com/img/0013514705_10.jpg"
                                    alt="olive two"
                                    height="200"
                                />
                            </a>
                        </div>
                        <div className="col">
                            <a onClick={this.toggleModal4}>
                                {" "}
                                <img
                                    src={HumanRace}
                                    alt="human race"
                                    height="200"
                                />
                            </a>
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.isModalOpen}
                    toggle={this.toggleModal}
                >
                    <ModalHeader toggle={this.toggleModal}>
                        Instant Treeline: Morning Songs
                        <Button className="close" data-dismiss="modal"></Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row row-content">
                                    <div className="col">
                                        <a href="https://open.spotify.com/album/0NBpFMH79asdc7N0hHTAXs?si=39VMHY1TQ_Gyd-rcJKbi7Q">
                                            {" "}
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
                                                alt="spotify"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.youtube.com/channel/UCRZt81KXtvzI41a3imriLFw">
                                            {" "}
                                            <img
                                                src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/YouTube.png"
                                                alt="youtube"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://willleet.bandcamp.com/album/morning-songs">
                                            {" "}
                                            <img
                                                src={Bandcamp}
                                                alt="bandcamp"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

                <Modal
                    isOpen={this.state.isModalOpen2}
                    toggle={this.toggleModal2}
                >
                    <ModalHeader toggle={this.toggleModal2}>
                        Olive Tiger: Softest Eyes
                        <Button className="close" data-dismiss="modal"></Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row row-content">
                                    <div className="col">
                                        <a href="https://open.spotify.com/album/2VvWuZtlELZDn5RH4SdZtF?si=T8CVEYFPT3CRkeHvGYEvNA">
                                            {" "}
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
                                                alt="spotify"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.youtube.com/c/OliveTiger">
                                            {" "}
                                            <img
                                                src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/YouTube.png"
                                                alt="youtube"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://olivetiger.bandcamp.com/album/softest-eyes-side-a">
                                            {" "}
                                            <img
                                                src={Bandcamp}
                                                alt="bandcamp"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

                <Modal
                    isOpen={this.state.isModalOpen3}
                    toggle={this.toggleModal3}
                >
                    <ModalHeader toggle={this.toggleModal3}>
                        Olive Tiger: Until My Body Breaks
                        <Button className="close" data-dismiss="modal"></Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row row-content">
                                    <div className="col">
                                        <a href="https://open.spotify.com/album/5Z1PbVa9h554hHhDXaK4ls?si=zEbFCsbMTTO3XwRpYYOnsQ">
                                            {" "}
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
                                                alt="spotify"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.youtube.com/c/OliveTiger">
                                            {" "}
                                            <img
                                                src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/YouTube.png"
                                                alt="youtube"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://olivetiger.bandcamp.com/album/until-my-body-breaks">
                                            {" "}
                                            <img
                                                src={Bandcamp}
                                                alt="bandcamp"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>

                <Modal
                    isOpen={this.state.isModalOpen4}
                    toggle={this.toggleModal4}
                >
                    <ModalHeader toggle={this.toggleModal4}>
                        The Human Race: It's Christmastime Again
                        <Button className="close" data-dismiss="modal"></Button>
                    </ModalHeader>
                    <ModalBody>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row row-content">
                                    <div className="col">
                                        <a href="http://spotify.com">
                                            {" "}
                                            <img
                                                src="https://cdn-icons-png.flaticon.com/512/174/174872.png"
                                                height="100"
                                                alt="spotify"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://www.youtube.com">
                                            {" "}
                                            <img
                                                src="https://cdn0.iconfinder.com/data/icons/web-social-and-folder-icons/512/YouTube.png"
                                                alt="youtube"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a href="https://bandcamp.com/">
                                            {" "}
                                            <img
                                                src="img/open-bandcamp-logo-white-11562938577ooqpoam563.png"
                                                alt="bandcamp"
                                                height="100"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}
export default Music;
