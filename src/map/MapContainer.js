import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import { berlin } from '../redux/constants';
import { addPlace, setTempLocation, setCenter } from '../redux/actions';

const mapStateToProps = state => ({
  places: state.places,
  tempLocation: state.tempLocation,
  center: state.center,
  berlin: berlin,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `70vh` }} />,
  mapElement: <div style={{ height: `100%` }} />
});

const mapDispatchToProps = {
  addPlace,
  setTempLocation,
  setCenter
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
