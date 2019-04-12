import { connect } from 'react-redux';
import Suggest from './Suggest';
import { presetLocation } from '../redux/actions';
import { berlin } from '../redux/constants';

const mapStateToProps = state => ({
  berlin
});

const mapDispatchToProps = {
  presetLocation
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggest);
