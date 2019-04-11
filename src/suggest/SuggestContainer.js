import { connect } from 'react-redux';
import Suggest from './Suggest';
import addPlace from '../redux/actions';
import { berlin } from '../redux/constants';

export default connect(
  ...berlin,
  {
    addPlace
  }
)(Suggest);
