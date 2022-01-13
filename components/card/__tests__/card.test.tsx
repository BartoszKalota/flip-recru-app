import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { Card } from '../card';

jest.mock('next/link', () => {
  return ({ href, children }: { href: string; children: React.ReactNode }) => (
    <a href={href} data-testid="card-link">
      {children}
    </a>
  );
});

const onClickMock = jest.fn();

describe('<Card />', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(
        <Card name="Tatooine" planetId="1" onClick={onClickMock} />,
        container,
      );
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should have proper href', () => {
    expect(
      container
        .querySelector("[data-testid='card-link']")
        ?.getAttribute('href'),
    ).toEqual('/planet/1');
  });

  it('should launch onClick function once clicked', () => {
    const card = container.querySelector("[data-testid='card']");
    act(() => {
      card?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should display proper text content', () => {
    expect(
      container.querySelector("[data-testid='card-name']")?.textContent,
    ).toEqual('Tatooine');
  });
});
