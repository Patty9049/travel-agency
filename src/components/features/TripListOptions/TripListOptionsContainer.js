import {connect} from 'react-redux';
import TripListOptions from './TripListOptions';
import {getAllTags} from '../../../redux/tagsRedux';
import {getAllFilters, changeSearchPhrase, addTag, removeTag, durationFrom, durationTo} from '../../../redux/filtersRedux';

const mapStateToProps = state => ({
  tags: getAllTags(state),
  filters: getAllFilters(state),
});

const mapDispatchToProps = dispatch => ({
  changeSearchPhrase: phrase => dispatch(changeSearchPhrase(phrase)),
  // TODO - add more dispatchers for other filters
  addTag: tag => dispatch(addTag(tag)),
  removeTag: tag => dispatch(removeTag(tag)),
  durationFrom: value => dispatch(durationFrom(value)),
  durationTo: value => dispatch(durationTo(value)),

});

export default connect(mapStateToProps, mapDispatchToProps)(TripListOptions);
