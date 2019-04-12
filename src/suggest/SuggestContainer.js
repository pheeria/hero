import { connect } from 'react-redux';
import Suggest from './Suggest';
import { addPlace } from '../redux/actions';
import { berlin } from '../redux/constants';

const mapStateToProps = state => ({
  berlin
});

const mapDispatchToProps = {
  addPlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Suggest);
