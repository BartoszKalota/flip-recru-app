import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { AppLayout } from '../layout';

jest.mock('components/header', () => {
  return () => <div data-testid="header" />;
});
jest.mock('components/footer', () => {
  return () => <div data-testid="footer" />;
});

describe('<Layout />', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <AppLayout>
          <div>mock children</div>
        </AppLayout>,
        container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('shoud render Header component', () => {
    expect(container.querySelector("[data-testid='header']")).toBeTruthy();
  });

  it('should render Footer component', () => {
    expect(container.querySelector("[data-testid='footer']")).toBeTruthy();
  });
});
