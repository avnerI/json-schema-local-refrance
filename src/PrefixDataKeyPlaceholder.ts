import {isArray, map, reduce} from 'lodash';

// @ts-ignore
const PrefixDataKeyPlaceholder = (obj, regexp, replacer) => {
  return reduce(obj, (acc, value, key) => {
    if (regexp.test(key)) {
      const newKey = key.replace(regexp, replacer);
      return {...acc, [newKey]: obj[key]};
    }
    if (typeof value === 'object') {
      if (isArray(value)) {
        // @ts-ignore
        const arrayValue = map(value, (item: []) => {
          if (typeof item === 'object') {
            return PrefixDataKeyPlaceholder(item, regexp, replacer);
          }
          return item;
        });
        return {...acc, [key]: arrayValue};
      }
      return {...acc, [key]: PrefixDataKeyPlaceholder(value, regexp, replacer)};
    }
    return {...acc, [key]: value};
  }, {});
};

export default PrefixDataKeyPlaceholder;
