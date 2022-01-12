import { render, cleanup } from '@testing-library/react';
import React from 'react';

import { Footer } from '../footer';

describe('<Footer />', () => {
  afterEach(cleanup);

  it('should display proper text content', async () => {
    const { getByTestId } = render(<Footer />);
    expect(getByTestId('small')).toHaveTextContent('Copyright 2022');
  });
});
