import React, {Component} from 'react';
import {connect} from 'react-redux';
import Current from "../components/current";
import {currentWeather} from "../reducers/weather";


class CurrentContainer extends Component {
    render() {
        const weather = this.props.data || {};
        if (!this.props.data) {
            return <div></div>
        }
        return <Current data={weather}/>

    }
}

export default connect(state =>({data: currentWeather(state)}))(CurrentContainer);