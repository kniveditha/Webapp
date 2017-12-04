import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import './css/App.css';
import {Button, SplitButton, MenuItem, FormGroup, Form, ControlLabel, FormControl, Panel} from 'react-bootstrap';

class Content extends Component {
  render() {
    return (
        <div>
            <div className = "MainButtons">
                <Button bsStyle='primary' >Create Test Suite</Button> &nbsp;
                <Button bsStyle='primary' disabled>Create Test Case</Button>
            </div>

            <div className = "Dropdowns">
                <Form inline>

                    <FormGroup controlId="formControlScenario">
                        <FormControl componentClass="select">
                            <option value="given">Given</option>
                            <option value="when">When</option>
                            <option value="then">Then</option>
                            <option value="and">And</option>
                            <option value="but">But</option>
                        </FormControl>
                    </FormGroup>

                    <div className="divider"/>

                    <FormGroup controlId="formControlScenarioDetail">
                        <FormControl componentClass="select">
                            <option value="navigate">Navigate to &lt;URL&gt; </option>
                            <option value="enter"> I enter &lt;Input Value&gt; to the &lt;Element Key&gt; </option>
                            <option value="click"> Click on &lt;Element Key&gt; </option>
                            <option value="click"> The content of &lt;Element Key&gt; has text &lt;Expected Text&gt; </option>
                            <option value="click"> Element &lt;Element Key&gt; contains text &lt;Expected Text&gt; </option>
                            <option value="click"> Wait for &lt;Element Key&gt; to appear </option>
                            <option value="click"> Wait for &lt;Element Key&gt; to contain text &lt;Expected Text&gt; </option>
                            <option value="click"> Wait for &lt;Seconds&gt; seconds </option>
                            <option value="click"> Switch to main frame </option>
                            <option value="click"> Switch to iframe &lt;Element key&gt; </option>
                            <option value="click"> Switch to popup window &lt;Window or Tab Index&gt; </option>
                            <option value="click"> Select value &lt;Value&gt; from &lt;Element Key&gt; </option>
                            <option value="click"> Accept the confirmation alert </option>
                            <option value="click"> The alert message says &lt;Expected Text&gt; </option>
                            <option value="click"> I Dismiss the confirm dialog </option>
                            <option value="click"> I Accept the confirm dialog </option>
                            <option value="click"> I enter &lt;Input Text&gt; into prompt </option>
                            <option value="click"> I drag &lt;Dragable Element Key&gt; and drop on to &lt;Droppable Element Key&gt; </option>
                            <option value="click"> I read the content of element &lt;Element Key&gt; and store in variable &lt;Variable Key&gt; as a &lt;Variable Type&gt; </option>
                            <option value="click"> I store the value &lt;Value&gt; in variable &lt;Variable Key&gt; as a &lt;Variable Type&gt; </option>
                            <option value="click"> The value in variable &lt;Variable key&gt; of type &lt;Variable Type&gt; equals to &lt;Value&gt; </option>
                            <option value="click"> I Add variable &lt;Variable1 key&gt; to &lt;Variable2 key&gt; and store in &lt;Variable3 key&gt; </option>
                            <option value="click"> I Subtract variable &lt;Variable1 key&gt; from &lt;Variable2 key&gt; and store in &lt;Variable3 key&gt; </option>
                            <option value="click"> I Multiply variable &lt;Variable1 key&gt; from &lt;Variable2 key&gt; and store in &lt;Variable3 key&gt; </option>
                            <option value="click"> I Divide variable &lt;Variable1 key&gt; from &lt;Variable2 key&gt; and store in &lt;Variable3 key&gt; </option>
                            <option value="click"> I populate &lt;Element Key&gt; with the value of variable &lt;Variable Key&gt; of type &lt;Variable Type&gt; </option>
                            <option value="click"> I Upload &lt;File Path&gt; to &lt;Element Key&gt; </option>
                            <option value="click"> Click on &lt;Element Key&gt; when active </option>
                        </FormControl>
                    </FormGroup>

                    <div class="divider"/>
                    
                    <Button type="submit" bsStyle="success"> Submit </Button>
                </Form>

                <div className="panel">
                    <Panel>
                        {/*Panel content*/}
                    </Panel>
                </div>
                
            </div>


        </div>

    );
  }
}

export default Content;