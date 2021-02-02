/* SELECTORS */

export const getAllTrips = ({trips}) => trips;

export const getFilteredTrips = ({trips, filters}) => {
  let output = trips;
  console.log(filters);   // FILTERS
  console.log(output);   // OUTPUT


  // filter by search phrase
  if(filters.searchPhrase){
    const pattern = new RegExp(filters.searchPhrase, 'i');
    output = output.filter(trip => pattern.test(trip.name));
    console.log('pattern-tripsredux', pattern);
    console.log('pattern-tripsredux', typeof(pattern)); //obj

  }
  // TODO - filter by duration
  if(filters.duration.from, filters.duration.to){
    console.log('filters.duration.from', filters.duration.from);
    console.log('filters.duration.to', filters.duration.to);

    output = output.filter(trip => trip.days >= filters.duration.from && trip.days <= filters.duration.to);
  }
  // TODO - filter by tags
  if(filters.activeTag){
    const toCompare = new RegExp(filters.activeTag, 'i');
    output = output.filter(trip => toCompare.test(trip.tags));
  }
  // TODO - sort by cost descending (most expensive goes first)

  return output;
};

export const getTripById = ({trips}, tripId) => {
  const filtered = trips.filter(trip => new RegExp(tripId, 'i').test(trip.id));

  // TODO - filter trips by tripId

  console.log('filtering trips by tripId:', tripId, filtered);
  return filtered.length ? filtered[0] : {error: true};
};

export const getTripsForCountry = ({trips}, countryCode) => {
  const filtered = trips.filter(trip => new RegExp(countryCode, 'i').test(trip.country.code));


  // TODO - filter trips by countryCode

  console.log('filtering trips by countryCode:', countryCode, filtered);
  return filtered.length ? filtered : [{error: true}];
};

/* ACTIONS */

/*
// action name creator
const reducerName = 'trips';
const createActionName = name => `app/${reducerName}/${name}`;

// action types


// action creators


// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    default:
      return statePart;
  }
}
 */
