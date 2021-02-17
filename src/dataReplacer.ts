import {isArray, map, reduce, get} from 'lodash';

const replaceDataInValue = (obj: any, prefix: string, payload: object) : object => {
  return reduce(obj, (acc, value, key) => {
    if (typeof value === 'string' && value.startsWith(prefix)) {
      const prefixLength = prefix.length;
      return {...acc, [key]: get(payload, value.substring(prefixLength))};
    }
    if (isArray(value)) {
      const arrayValue = map(value, (item) => {
        if (typeof item === 'object') {
          return replaceDataInValue(item, prefix, payload);
        }
        return item;
      });
      return {...acc, [key]: arrayValue};
    }
    if (typeof value === 'object') {
      return {...acc, [key]: replaceDataInValue(value, prefix, payload)};
    }
    return {...acc, [key]: value};
  }, {});
};

export default replaceDataInValue;
