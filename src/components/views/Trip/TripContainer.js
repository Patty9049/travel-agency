import {connect} from 'react-redux';
import Trip from './Trip';
import {getTripById} from '../../../redux/tripsRedux';
import {getCountryByCode} from '../../../redux/countriesRedux';
import {getOrder} from '../../../redux/orderRedux';

const mapStateToProps = (state, props) => {
  const trip = getTripById(state, props.match.params.id);
  const country = getCountryByCode(state, trip.country.code);
  const order = getOrder(state);

  return {
    ...trip,
    country,
    order,
  };
};

export default connect(mapStateToProps)(Trip);
