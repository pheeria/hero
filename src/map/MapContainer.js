import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import { berlin } from '../redux/constants';
import { addPlace, setTempLocation, selectPlace } from '../redux/actions';

const mapStateToProps = state => ({
  places: state.places,
  tempLocation: state.tempLocation,
  selectedPlace: state.selectedPlace,
  city: berlin,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `calc(100vh - 64px)` }} />,
  mapElement: <div style={{ height: `100%` }} />
});

const mapDispatchToProps = {
  addPlace,
  setTempLocation,
  selectPlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
