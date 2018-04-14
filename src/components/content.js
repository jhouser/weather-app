import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';

const contentStyles = {
    minHeight: '70vh',
    backgroundColor: '#dfe3e6'
};

class Content extends Component {
    render() {
        return <Row>
            <Col>
                <div style={contentStyles}>
                    Test
                </div>
            </Col>
        </Row>
    }
}

export default Content;
