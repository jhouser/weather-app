import React, {Component} from 'react';
import {connect} from 'react-redux';
import SearchBar from "../components/searchBar";
import {current, forecast} from "../actions/weather";

const SearchContainer = (props) => {
  return (
      <SearchBar {...props}/>
  )
};

const mapDispatchToProps = dispatch => ({
    onSubmit: (location) => {
        dispatch(current(location));
        dispatch(forecast(location));
    }
});

export default connect(null, mapDispatchToProps)(SearchContainer);