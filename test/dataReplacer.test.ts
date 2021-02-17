import { expect } from 'chai';
import dataReplacer from "../src/dataReplacer";

describe('Data Replacer in json', () => {
  it('should replace data in json Object', () => {
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

  it('should replace data in json Object with nested payload', () => {
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
    expect(results?.always).to.be.equal(expectedResult);
  });

  it('should replace data in complex Object', () => {
    const expectedResult = 5;
    const obj = {
      type: "object",
      properties: {
        checkMore: {
          minimum: '$minValue',
          type: "number"
        }
      }
    };

    const payload = {
      minValue: expectedResult,
    };

    const results = dataReplacer(obj, '$', payload);
    expect(results.properties.checkMore.minimum).to.be.equal(expectedResult);
  });

  it('should replace data in json Object with any placeholder special string', () => {
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

});
