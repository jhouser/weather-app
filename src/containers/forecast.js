import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import forecastData from '../fixtures/forecast.json';
import {Line} from 'react-chartjs-2';

class Forecast extends Component {
    state = {};

    configureTemperatureChart(data) {
        let temperatures = [];
        let labels = [];
        data.list.forEach((item) => {
            labels.push(new Date(item.dt * 1000).toLocaleString());
            temperatures.push(item.main.temp);
        });
        return {
            labels: labels,
            datasets: [
                {
                    label: "Temperature",
                    fill: false,
                    borderColor: '#007bff',
                    backgroundColor : '#007bff',
                    data: temperatures
                }
            ]
        };
    }

    componentDidMount() {
        const data = this.configureTemperatureChart(forecastData);
        this.setState({data: data})
    }

    render() {
        return <Row>
            <Col>
                <Line data={this.state.data} style={{width: "100%"}}/>
            </Col>
        </Row>
    }
}

export default Forecast;