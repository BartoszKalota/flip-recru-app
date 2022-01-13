import { API } from 'constants/api';

import { getIdFromUrl } from '../get-id-from-url';

describe('getIdFromUrl service', () => {
  it('getIdFromUrl', () => {
    expect(getIdFromUrl(`${API}/planets/1/`)).toEqual('1');
  });
});
