import {connect} from 'react-redux';
import OrderForm from './OrderForm';
import {getOrderOptions} from '../../../redux/orderRedux';


const mapStateToProps = (state) => {
  const options = getOrderOptions(state);
  console.log('OPTIONS', options);
  return {
    options: options,
  };
};

export default connect(mapStateToProps)(OrderForm);