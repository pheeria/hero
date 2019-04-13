import { connect } from 'react-redux';
import Suggest from './Suggest';
import { setTempLocation } from '../redux/actions';
import { berlin } from '../redux/constants';

const mapStateToProps = state => ({
  city: berlin
});

const mapDispatchToProps = {
  setTempLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggest);
