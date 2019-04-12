import React from 'react';
import { connect } from 'react-redux';
import Map from './Map';
import { berlin } from '../redux/constants';

const mapStateToProps = state => ({
  places: state.places,
  berlin: berlin,
  loadingElement: <div style={{ height: `100%` }} />,
  containerElement: <div style={{ height: `70vh` }} />,
  mapElement: <div style={{ height: `100%` }} />
});

export default connect(mapStateToProps)(Map);