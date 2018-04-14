import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import SearchBar from "./searchBar";
import Forecast from "../containers/forecast";

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
                    <Forecast/>
                </div>
            </Col>
        </Row>
    }
}

export default Content;
