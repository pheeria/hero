import { connect } from 'react-redux';
import List from './List';
import { removePlace } from '../redux/actions';

const mapStateToProps = state => ({
  places: state.places,
  selectedPlace: state.selectedPlace
});

const mapDispatchToProps = {
  removePlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
