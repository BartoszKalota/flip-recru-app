import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { PaginationButton } from '../pagination-button';

const onPageChangeMock = jest.fn();

describe('<PaginationButton>', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  describe('type', () => {
    it('should contain RightOutlined icon', () => {
      act(() => {
        render(
          <PaginationButton
            type="next"
            isDisabled={false}
            onPageChange={onPageChangeMock}
          />,
          container,
        );
      });
      const button = container.querySelector(
        "[data-testid='pagination-button']",
      );
      const icon = container.querySelector("[data-testid='right-arrow-icon']");
      expect(button?.contains(icon)).toBeTruthy();
    });

    it('should contain LeftOutlined icon', () => {
      act(() => {
        render(
          <PaginationButton
            type="prev"
            isDisabled={false}
            onPageChange={onPageChangeMock}
          />,
          container,
        );
      });
      const button = container.querySelector(
        "[data-testid='pagination-button']",
      );
      const icon = container.querySelector("[data-testid='left-arrow-icon']");
      expect(button?.contains(icon)).toBeTruthy();
    });
  });

  describe('isDisabled', () => {
    it('should be disabled', () => {
      act(() => {
        render(
          <PaginationButton
            type="next"
            isDisabled={true}
            onPageChange={onPageChangeMock}
          />,
          container,
        );
      });
      expect(
        container
          .querySelector("[data-testid='pagination-button']"),
      ).toHaveAttribute('disabled');
    });

    it('should not be disabled', () => {
      act(() => {
        render(
          <PaginationButton
            type="next"
            isDisabled={false}
            onPageChange={onPageChangeMock}
          />,
          container,
        );
      });
      expect(
        container
          .querySelector("[data-testid='pagination-button']"),
      ).not.toHaveAttribute('disabled');
    });
  });

  describe('onPageChange', () => {
    it('should launch onPageChange function once clicked', () => {
      act(() => {
        render(
          <PaginationButton
            type="next"
            isDisabled={false}
            onPageChange={onPageChangeMock}
          />,
          container,
        );
      });
      const button = container.querySelector(
        "[data-testid='pagination-button']",
      );
      act(() => {
        button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      });
      expect(onPageChangeMock).toHaveBeenCalledTimes(1);
    });
  });
});
