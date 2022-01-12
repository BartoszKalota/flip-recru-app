import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Header } from '../header';

describe('<Header />', () => {
  afterEach(cleanup);

  it('should display proper text content', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('title')).toHaveTextContent(
      'Star Wars Navigation System',
    );
  });
});
