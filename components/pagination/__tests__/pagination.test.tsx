import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Pagination } from '../pagination';

jest.mock('components/pagination-button', () => {
  return () => <div data-testid="pagination-button" />;
});

describe('<Pagination />', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <Pagination
          isPrevPageAvailable={true}
          isNextPageAvailable={true}
          currentPage={1}
          setCurrentPage={jest.fn()}
        />,
        container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should render PaginationButton component', () => {
    expect(
      container.querySelector("[data-testid='pagination-button']"),
    ).toBeTruthy();
  });

  it('should render current page', () => {
    expect(
      container.querySelector("[data-testid='current-page']")?.textContent,
    ).toEqual('1');
  });
});
