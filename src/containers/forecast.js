import React, {Component} from 'react';
import {connect} from 'react-redux';
import Forecast from "../components/forecast";
import {weatherForecast} from "../reducers/weather";
import {Loading} from '../components/loading';

class ForecastContainer extends Component {
    render() {
        const weather = this.props.data || {};
        if (!this.props.data) {
            return <Loading />
        }
        return <Forecast data={weather}/>

    }
}

export default connect(state =>({data: weatherForecast(state)}))(ForecastContainer);