import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import currentData from '../fixtures/current.json';

const imageStyles = {
    float: "left",
    height: "50px",
    width: "50px"
};

const temperatureStyles = {
    fontWeight: "bold"
};

class Current extends Component {
    state = {};

    static extractWeatherData(data) {
        let weatherData = {};
        if (typeof data.main !== 'undefined') {
            weatherData.name = data.name;
            weatherData.temp = data.main.temp;
            weatherData.sunrise = data.sys.sunrise;
            weatherData.sunset = data.sys.sunset;
            weatherData.weather = data.weather[0].main;
            weatherData.icon = data.weather[0].icon;
        }
        return weatherData;
    }

    componentDidMount() {
        const weatherData = this.props.data || {};
        this.setState(Current.extractWeatherData(weatherData));
    }

    render() {
        return <Row>
            <Col>
                <Row>
                    <Col>
                        <h2>Current Weather in {this.state.name}</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>

                        <img style={imageStyles} src={`http://openweathermap.org/img/w/${this.state.icon}.png`}/>
                        <div style={temperatureStyles}>
                            {this.state.temp}°C
                        </div>
                        <div>
                            {this.state.weather}
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    }
}

export default Current;