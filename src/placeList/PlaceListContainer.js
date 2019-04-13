import { connect } from 'react-redux';
import PlaceList from './PlaceList';
import { removePlace } from '../redux/actions';

const mapStateToProps = state => ({
  places: state.places,
  center: state.center
});

const mapDispatchToProps = {
  removePlace
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlaceList);
