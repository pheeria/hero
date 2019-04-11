import { connect } from 'react-redux';
import PlaceList from './PlaceList';

const mapStateToProps = state => ({
  places: state.places
});

export default connect(mapStateToProps)(PlaceList);
