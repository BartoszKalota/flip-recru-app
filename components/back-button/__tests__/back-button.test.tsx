import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';

import { BackButton } from '../back-button';

describe('<BackButton />', () => {
  afterEach(cleanup);

  const onBackMock = jest.fn();

  let backButtonComponent: HTMLElement;
  let leftArrowIconComponent: HTMLElement;
  beforeEach(() => {
    const { getByTestId } = render(<BackButton onBack={onBackMock} />);
    backButtonComponent = getByTestId('back-button');
    leftArrowIconComponent = getByTestId('left-arrow-icon');
  });

  it('should launch onBack function once clicked', () => {
    fireEvent.click(backButtonComponent);
    expect(onBackMock).toHaveBeenCalled();
  });

  it('should contain LeftOutlined icon', () => {
    expect(backButtonComponent.contains(leftArrowIconComponent)).toBeTruthy();
  });
});
