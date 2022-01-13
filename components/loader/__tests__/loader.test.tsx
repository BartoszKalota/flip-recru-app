import { cleanup, render } from '@testing-library/react'; 
import React from 'react';

import { Loader } from '../loader';

describe('<Loader>', () => {
  afterEach(cleanup);

  it('should contain Spin component', () => {
    const { getByTestId } = render(<Loader />);
    expect(getByTestId('spin')).toBeTruthy();
  });
});
