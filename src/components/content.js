import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import SearchBar from "./searchBar";
import Weather from "../containers/weather";

const contentStyles = {
    minHeight: '70vh',
    backgroundColor: '#dfe3e6'
};

class Content extends Component {
    render() {
        return <Row>
            <Col>
                <div style={contentStyles}>
                    <SearchBar/>
                    <Weather/>
                </div>
            </Col>
        </Row>
    }
}

export default Content;
