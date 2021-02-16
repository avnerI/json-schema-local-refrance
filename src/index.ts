console.log('test')
import replaceInKeys from "./dataReplacer";
import PrefixDataKeyPlaceholder from "./PrefixDataKeyPlaceholder";

const testObject = [
  {
    testing: 'this',
    it: 'should',
    work: {
      with: 'objects',
      and: {
        __references: 'to stuff'
      }
    }
  }
];

export default {

}

console.log(JSON.stringify(replaceInKeys(testObject, /__/, '$')));
