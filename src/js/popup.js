import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/App.css';
import Content from './content';
import { Button, Form, FormControl, Modal } from 'react-bootstrap';

class Popup extends Component {
    constructor(props) {
        super();
        this.state = {
            line: ''
        }
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
                        <Form onSubmit={this.handleSubmit.bind(this)}>
                            <FormControl type="text" id="description" name="desc" placeholder="Enter text" value={this.state.line} onChange={this.handleLineChange.bind(this)} />
                            <br />
                            <center>
                                <Button bsStyle="primary" type="submit">Create</Button>
                            </center>
                        </Form>
                    </Modal.Body>
                </Modal>
                <Content >
                    <p> No shit</p>
                </Content>
            </div>
        );
    }

    handleLineChange(event) {
        console.log(event.target.value);
        this.setState({
            line: event.target.value
        })
    }

    handleSubmit() {
        console.log("Now hiting submit");
        console.log(this.state);
    }

}

export default Popup;

