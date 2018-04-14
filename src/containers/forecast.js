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
            labels.push(item.dt);
            temperatures.push(item.main.temp);
        });
        return {
            labels: labels,
            datasets: [
                {
                    label: "Temperature",
                    fillColor: "rgba(220,220,220,0.2)",
                    strokeColor: "rgba(220,220,220,1)",
                    pointColor: "rgba(220,220,220,1)",
                    pointStrokeColor: "#fff",
                    pointHighlightFill: "#fff",
                    pointHighlightStroke: "rgba(220,220,220,1)",
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