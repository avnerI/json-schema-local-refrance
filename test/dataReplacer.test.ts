import { expect } from 'chai';
import dataReplacer from "../src/dataReplacer";

describe('Data Replacer in json', () => {
  it('should replace Data in json Object', () => {
    const expectedResult = 'horrible';
    const obj = {
      testing: 'is',
      always: '$fun'
    };
    const payload = {
      fun: expectedResult,
    }

    const results = dataReplacer(obj, '$', payload);
    expect(results.always).to.be.equal(expectedResult);
  });

  it('should replace Data in json Object with nested payload', () => {
    const expectedResult = 'hey';
    const obj = {
      testing: 'is',
      always: '$fun.only.for.me'
    };
    const payload = {
      fun: {
        only: {
          for: {
            me: expectedResult
          },
        },
      },
    }

    const results = dataReplacer(obj, '$', payload);
    expect(results.always).to.be.equal(expectedResult);
  });
});
