/* SELECTORS */

export const getAllFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types
export const ADD_TAG = createActionName('ADD_TAG');
export const REMOVE_TAG = createActionName('REMOVE_TAG');
export const DURATION_FROM = createActionName('DURATION_FROM');
export const DURATION_TO = createActionName('DURATION_TO');


// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators
export const addTag = payload => ({ payload, type: ADD_TAG });
export const removeTag = payload => ({ payload, type: REMOVE_TAG });
export const durationFrom = payload => ({ payload, type: DURATION_FROM });
export const durationTo = payload => ({ payload, type: DURATION_TO });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    // TODO - handle other action types
    case ADD_TAG:
      console.log( 'action', action);
      console.log( 'ADD_TAG statePart', statePart);
      console.log( 'ADD_TAG statePart.tags', statePart.tags);

      return {
        ...statePart,
        tags: [...statePart.tags, action.payload],
        // tags: statePart.tags + ' ' + action.payload,
      };
    case REMOVE_TAG:
      console.log('REMOVE TAG');
      return {
        ...statePart,
        // tags: action.payload,
        tags: statePart.tags.filter(tag => tag != action.payload),
        // tags: statePart.tags.splice(action.payload),
        // activeTag:  statePart.activeTag.filter(tag => tag != action.payload),
      };
    case DURATION_FROM:
      console.log('DURATION_FROM');
      return {
        ...statePart,
        from: action.payload,
      };
    case DURATION_TO:
      console.log('DURATION_TO');
      return {
        ...statePart,
        to: action.payload,
      };
    default:
      return statePart;
  }
}
