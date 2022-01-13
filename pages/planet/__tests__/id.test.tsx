import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';

import { PlanetPage } from '../[id]';

jest.mock('components/head', () => {
  Object.defineProperty(global.document, 'title', {
    value: 'Tatooine - Star Wars Navigation System',
  });
  return () => null;
});
jest.mock('components/planet-header', () => {
  return () => <div data-testid="planet-header" />;
});
jest.mock('components/planet-details', () => {
  return () => <div data-testid="planet-details" />;
});

const planetMock = {
  name: '',
  rotation_period: 0,
  orbital_period: 0,
  diameter: 0,
  climate: '',
  gravity: '',
  terrain: '',
  surface_water: 0,
  population: 0,
  residents: [],
  films: [],
  created: new Date(),
  edited: new Date(),
  url: '',
};

describe('<PlanetPage />', () => {
  let container: HTMLElement;
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    act(() => {
      render(<PlanetPage planet={planetMock} />, container);
    });
  });

  afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
  });

  it('should render PlanetHeader component', () => {
    expect(
      container.querySelector("[data-testid='planet-header']"),
    ).toBeTruthy();
  });

  it('should render PlanetDetails component', () => {
    expect(
      container.querySelector("[data-testid='planet-details']"),
    ).toBeTruthy();
  });

  it('should set page title', () => {
    expect(global.document.title).toBe(
      'Tatooine - Star Wars Navigation System',
    );
  });
});
