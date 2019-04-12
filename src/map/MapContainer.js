import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import { berlin } from '../redux/constants';
import { addPlace, presetLocation } from '../redux/actions';

const mapStateToProps = state => ({
  places: state.places,
  preset: state.preset,
  berlin: berlin,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `70vh` }} />,
  mapElement: <div style={{ height: `100%` }} />
});

const mapDispatchToProps = {
  addPlace,
  presetLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Map);
