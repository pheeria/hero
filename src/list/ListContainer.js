import { connect } from 'react-redux';
import List from './List';
import { removePlace, selectPlace } from '../redux/actions';

const mapStateToProps = state => ({
  places: state.places,
  selectedPlace: state.selectedPlace
});

const mapDispatchToProps = {
  removePlace,
  selectPlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
