import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import Content from './content';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';

class Popup extends Component {
    constructor(props) {
        super();
        // this.state = {
        //     line: ''
        // }
    }

    render() {
        return (
            <div>
                <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">New Test Suit</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Test Suit Description</p>
                        <FormControl type="text" id="description" name="desc" placeholder="Enter text" value={this.props.line} onChange={this.props.onChange} />
                        <br />
                        <center>
                            <Button bsStyle="primary" onClick={this.props.onSubmit}>Create</Button>
                        </center>
                    </Modal.Body>
                </Modal>
            </div>
        );
    }
}

export default Popup;

