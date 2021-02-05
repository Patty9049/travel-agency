import countries from '../data/countries.json';
import pricing from '../data/pricing.json';
// import {parseOptionPrice} from './parseOptionPrice';

const parseTrips = (trips, setStates) => {
  const newState = {
    countries: {},
    regions: {},
    subregions: {},
    tags: {},
    order: {
      trip: null,
      email: '',
      options: {},
    },
  };

  for(let trip of trips){

    /* add country to newState.countries */
    if(typeof(newState.countries[trip.country.code]) == 'undefined'){
      const countryDetails = countries.filter(item => item.alpha3Code == trip.country.code)[0] || {};
      newState.countries[trip.country.code] = JSON.parse(JSON.stringify(countryDetails));
      newState.countries[trip.country.code].trips = [trip.id];
    } else {
      newState.countries[trip.country.code].trips.push(trip.id);
    }

    /* add all tags to newState.tags */
    for(let tag of trip.tags){
      if(typeof(newState.tags[tag]) == 'undefined'){
        newState.tags[tag] = {trips: [trip.id]};
      } else {
        newState.tags[tag].trips.push(trip.id);
      }
    }
  }

  for(let countryCode in newState.countries){
    const country = newState.countries[countryCode];

    /* add region to newState.regions */
    if(typeof(newState.regions[country.region]) == 'undefined'){
      newState.regions[country.region] = {
        countries: [country.alpha3Code],
        subregions: [country.subregion],
      };
    } else if(newState.regions[country.region].subregions.indexOf(country.subregion) == -1) {
      newState.regions[country.region].subregions.push(country.subregion);
      newState.regions[country.region].countries.push(country.alpha3Code);
    } else if(newState.regions[country.region].countries.indexOf(country.alpha3Code) == -1) {
      newState.regions[country.region].countries.push(country.alpha3Code);
    }

    /* add subregion to newState.subregions */
    if(typeof(newState.subregions[country.subregion]) == 'undefined'){
      newState.subregions[country.subregion] = {
        region: country.region,
        countries: [country.alpha3Code],
      };
    } else if(newState.subregions[country.subregion].countries.indexOf(country.alpha3Code) == -1) {
      newState.subregions[country.subregion].countries.push(country.alpha3Code);
    }
  }

  for(let option of pricing){
    if(typeof(option.defaultValue) != 'undefined'){
      newState.order.options[option.id] = option.defaultValue;
    } else if(typeof(option.limits) != 'undefined' && typeof(option.limits.min) != 'undefined'){
      newState.order.options[option.id] = option.limits.min;
    } else if(option.type == 'checkboxes'){
      newState.order.options[option.id] = [];
    } else {
      newState.order.options[option.id] = '';
    }
  }

  setStates(newState);
};

export default parseTrips;

export const calculateTotal = (tripCost, options) => {
  let total = parseOptionPrice(tripCost).value;
  let multiplier = 0;
  for (let option of pricing) {
    const currentValue = options[option.id];
    if (typeof (currentValue) != 'undefined') {
      if (Array.isArray(currentValue) && Array.isArray(option.values)) {
        for (let optionId of currentValue) {
          const value = option.values.filter(opt => opt.id == optionId)[0];
          const price = parseOptionPrice(value.price);
          if (price.type == 'multiplier') {
            multiplier += price.value;
          }
          else if (price.type == 'number') {
            total += price.value;
          }
        }
      }
      else if (currentValue !== '' && Array.isArray(option.values)) {
        const value = option.values.filter(opt => opt.id == currentValue)[0];
        const price = parseOptionPrice(value.price);
        if (price.type == 'multiplier') {
          multiplier += price.value;
        }
        else if (price.type == 'number') {
          total += price.value;
        }
      }
      else if (option.type == 'number') {
        const price = parseOptionPrice(option.price);
        if (price.type == 'multiplier') {
          multiplier += price.value * currentValue;
        }
        else if (price.type == 'number') {
          total += price.value * currentValue;
        }
      }
    }
  }
  return total * multiplier;
};

export const formatPrice = price => {
  return typeof(price) != 'number'
    ? price
    : Math.ceil(price)
      .toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });
};

export const parseOptionPrice = price => {
  if (typeof (price) == 'number') {
    return { type: 'number', value: price };
  }
  else {
    const priceParsed = price.replace(/^\$\s*/, '').replace(/,/g, '');
    const pricePercent = priceParsed.match(/(^\d+)%$/);
    if (pricePercent) {
      return { type: 'multiplier', value: parseFloat(pricePercent[1]) / 100 };
    }
    else if (!isNaN(priceParsed)) {
      return { type: 'number', value: parseFloat(priceParsed) };
    }
    else {
      return { type: 'error', value: 0 };
    }
  }
};

