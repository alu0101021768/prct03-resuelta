import 'mocha';
import {expect} from 'chai';
import {fromCamelToSnakeCase, fromSnakeToCamelCase} from '../src/ej4';

describe('Tests ejercicio 04', () => {
  it('fromCamelToSnakeCase(\'sampleString\') should return \'sample_string\'',
      () => {
        // const expectedValue = 'sample_string';
        const actualValue = fromCamelToSnakeCase('sampleString');
        expect(actualValue).to.eq('pepe');
      });
  it('fromSnakeToCamelCase(\'sample_string\')', () => {
    expect(fromSnakeToCamelCase('sample_string')).to.eq('sampleString');
  });
});
