import { getPreparedTitle } from '../get-prepared-title';

describe('getPreparedTitle service', () => {
  it('getPreparedTitle', () => {
    expect(getPreparedTitle('example_text')).toEqual('Example text');
  });
});
