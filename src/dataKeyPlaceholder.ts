import {isArray, map, reduce} from 'lodash';

// @ts-ignore
const replaceInKeys = (obj, regexp, replacer) => {
  // todo make it so it will not accept regular exception - but will take a string and will make sure it appears after "{" and before ":"
  return JSON.parse(JSON.stringify(obj).replace(regexp, replacer))
};

export default replaceInKeys;
