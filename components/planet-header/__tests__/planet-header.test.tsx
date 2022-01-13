import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { PlanetHeader } from '../planet-header';

jest.mock('components/back-button', () => {
  return () => <div data-testid="back-button" />;
});

describe('<PlanetHeader />', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(<PlanetHeader planetName="Tatooine" />, container);
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should render BackButton component', () => {
    expect(container.querySelector("[data-testid='back-button']")).toBeTruthy();
  });

  it('should display proper text content', () => {
    expect(
      container.querySelector("[data-testid='title']")?.textContent,
    ).toEqual('Tatooine');
  });
});
