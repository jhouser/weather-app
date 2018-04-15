import React, {Component} from 'react';
import {Row, Col, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

const searchStyles = {
    margin: '10px'
};

class SearchBar extends Component {
    state = {
        location: ''
    };

    handleInputChange = (event) => {
        const target = event.target,
            value = target.value,
            name = target.name;
        this.setState({
            [name]: value
        });
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.location)
    };

    render() {
        return <Row>
            <Col style={searchStyles} sm={12} md={6}>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Input onChange={this.handleInputChange} type="text" name="location" id="location" placeholder="Enter your location!"/>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Col>
        </Row>
    }
}

export default SearchBar;