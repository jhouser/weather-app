import React, {Component} from 'react';
import {Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const searchStyles = {
    margin: '10px'
};

class SearchBar extends Component {
    render() {
        return <Col style={searchStyles} sm={12} md={6}>
            <Form>
                <FormGroup>
                    <Label for="location">Location</Label>
                    <Input type="text" name="location" id="location" placeholder="Enter your location!"/>
                </FormGroup>
            </Form>
            <Button>Submit</Button>
        </Col>
    }
}

export default SearchBar