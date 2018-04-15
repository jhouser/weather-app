import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isFetching, showWeather} from "../reducers/weather";
import SearchContainer from "../containers/searchContainer";
import Forecast from "../containers/forecast";
import Current from "../containers/current";

class ContentContainer extends Component {
    render() {
        if (!this.props.fetching && !this.props.showWeather) {
            return <SearchContainer/>
        }
        return <div>
            <SearchContainer/>
            <Current/>
            <Forecast/>
        </div>

    }
}

export default connect(state => ({fetching: isFetching(state), showWeather: showWeather(state)}))(ContentContainer);