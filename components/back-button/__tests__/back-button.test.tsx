import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { BackButton } from '../back-button';

afterEach(cleanup);

describe('<BackButton />', () => {
  const onBackMock = jest.fn();

  it('should launch onBack function once clicked', () => {
    const { getByTestId } = render(<BackButton onBack={onBackMock} />);
    fireEvent.click(getByTestId('back-button'));
    expect(onBackMock).toHaveBeenCalled();
  });

  it('should contain LeftOutlined icon', () => {
    const { getByTestId } = render(<BackButton onBack={onBackMock} />);
    expect(
      getByTestId('back-button').contains(getByTestId('left-arrow-icon')),
    ).toBeTruthy();
  });
});
