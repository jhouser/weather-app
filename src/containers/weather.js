import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import WeatherDisplay from "../components/weatherDisplay";

class Weather extends Component {
    render() {
        return <Row>
            <Col sm={12} md={2}>
                <WeatherDisplay/>
            </Col>
            <Col sm={12} md={2}>
                <WeatherDisplay/>
            </Col>
            <Col sm={12} md={2}>
                <WeatherDisplay/>
            </Col>
            <Col sm={12} md={2}>
                <WeatherDisplay/>
            </Col>
            <Col sm={12} md={2}>
                <WeatherDisplay/>
            </Col>
        </Row>
    }
}

export default Weather;