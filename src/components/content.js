import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import SearchContainer from "../containers/searchContainer";
import Forecast from "../containers/forecast";
import Current from "../containers/current";

const contentStyles = {
    minHeight: '70vh',
    backgroundColor: '#dfe3e6'
};

class Content extends Component {
    render() {
        return <Row>
            <Col>
                <div style={contentStyles}>
                    <SearchContainer/>
                    <Current/>
                    <Forecast/>
                </div>
            </Col>
        </Row>
    }
}

export default Content;
