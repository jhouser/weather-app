import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import forecastData from '../fixtures/forecast.json'

class Forecast extends Component {
    componentDidMount() {
        this.setState({data: forecastData})
    }
    render() {
        return <Row>
            <Col sm={12} md={2}>

            </Col>
        </Row>
    }
}

export default Forecast;