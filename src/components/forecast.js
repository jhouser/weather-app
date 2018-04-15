import React, {Component} from 'react';
import {Row, Col} from 'reactstrap';
import {Line} from 'react-chartjs-2';

class Forecast extends Component {
    state = {};

    configureTemperatureChart(data) {
        let temperatures = [];
        let labels = [];
        if (typeof data.list !== 'undefined') {
            data.list.forEach((item) => {
                labels.push(new Date(item.dt * 1000).toLocaleString());
                temperatures.push(item.main.temp);
            });
        }
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
        const weatherData = this.props.data || {};
        const data = this.configureTemperatureChart(weatherData);
        this.setState({data: data})
    }

    render() {
        return <Row>
            <Col>
                <h2>Forecast</h2>
                <Line data={this.state.data} style={{width: "100%"}}/>
            </Col>
        </Row>
    }
}

export default Forecast;