import {connect} from 'react-redux';
import OrderOption from './OrderOption';
import {getOrderOptions, setOrderOption, getOrder} from '../../../../redux/orderRedux';

const mapStateToProps = (state) => {
  const options = getOrderOptions(state);
  const order = getOrder(state);
  return {
    ...state,
    options: options,
    order: order,
  };
};

const mapDispatchToProps = dispatch => ({
  setOrderOption: value => dispatch(setOrderOption(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderOption);