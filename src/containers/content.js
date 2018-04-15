import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showWeather} from "../reducers/weather";
import SearchContainer from "../containers/searchContainer";
import Forecast from "../containers/forecast";
import Current from "../containers/current";

class ContentContainer extends Component {
    render() {
        if (!this.props.showWeather) {
            return <SearchContainer/>
        }
        return <div>
            <SearchContainer/>
            <Current/>
            <Forecast/>
        </div>

    }
}

export default connect(state => ({showWeather: showWeather(state)}))(ContentContainer);