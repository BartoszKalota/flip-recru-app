import { cleanup, render } from '@testing-library/react';
import { PLANET_DETAIL_KEYS } from 'constants/planet-detail-keys';

import { PlanetDetails } from '../planet-details';

const planetDetailKeysMock = PLANET_DETAIL_KEYS;
const planetDetailsMock = {
  [planetDetailKeysMock[0]]: 'detail value',
};

describe('<PlanetDetails>', () => {
  afterEach(cleanup);

  let detailItemElements: HTMLElement[];
  let detailKeyElement: HTMLElement;
  let detailValueElement: HTMLElement;
  beforeEach(() => {
    const { getAllByTestId } = render(
      <PlanetDetails planet={planetDetailsMock} />,
    );
    detailItemElements = getAllByTestId('detail-item');
    detailKeyElement = getAllByTestId('detail-key-text')[0];
    detailValueElement = getAllByTestId('detail-value-text')[0];
  });

  it('should render proper amount of details', () => {
    expect(detailItemElements).toHaveLength(planetDetailKeysMock.length);
  });

  it('should have proper detail key', () => {
    expect(detailKeyElement.textContent).toEqual('Climate:');
  });

  it('should have proper detail value', () => {
    expect(detailValueElement.textContent).toEqual('detail value');
  });
});
