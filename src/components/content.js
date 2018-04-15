import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import ContentContainer from "../containers/content";

const contentStyles = {
    minHeight: '70vh',
    backgroundColor: '#dfe3e6'
};

class Content extends Component {
    render() {
        return <Row>
            <Col>
                <div style={contentStyles}>
                    <ContentContainer />
                </div>
            </Col>
        </Row>
    }
}

export default Content;
