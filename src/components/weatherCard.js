import React, {Component} from 'react';
import {Col, Card, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

class WeatherCard extends Component {
    render() {
        return <Card>
                <CardBody>
                    <CardTitle>Title</CardTitle>
                    <CardText>Test!</CardText>
                </CardBody>
            </Card>
    }
}

export default WeatherCard;