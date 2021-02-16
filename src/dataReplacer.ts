import {isArray, map, reduce, get} from 'lodash';

// @ts-ignore
const replaceDataInValue = (obj, prefix, payload) => {
  // @ts-ignore
  return reduce(obj, (acc, value, key) => {
    if (value.startsWith(prefix)) {
      const prefixLength = prefix.length;
      return {...acc, [key]: get(payload, value.substring(prefixLength))};
    }
    if (typeof value === 'object') {
      if (isArray(value)) {
        // @ts-ignore
        const arrayValue = map(value, (item) => {
          if (typeof item === 'object') {
            return replaceDataInValue(item, prefix, payload);
          }
          return item;
        });
        return {...acc, [key]: arrayValue};
      }
      return {...acc, [key]: replaceDataInValue(value, prefix, payload)};
    }
    return {...acc, [key]: value};
  }, {});
};

export default replaceDataInValue;
