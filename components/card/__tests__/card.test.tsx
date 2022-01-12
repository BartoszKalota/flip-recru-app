import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { Card } from '../card';

afterEach(cleanup);

describe('<Card />', () => {
  const onClickMock = jest.fn();

  it('should display proper text content', () => {
    const { getByTestId } = render(
      <Card name="Tatooine" planetId="1" onClick={onClickMock} />,
    );
    expect(getByTestId('card-name')).toHaveTextContent('Tatooine');
  });
});
