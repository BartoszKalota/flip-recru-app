import { cleanup, render } from '@testing-library/react';
import React from 'react';

import { Head } from '../head';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: Array<React.ReactElement> }) => {
      return <>{children}</>;
    },
  };
});

const planetName = 'Tatooine';

describe('<Head>', () => {
  afterEach(cleanup);

  it('should set page title', () => {
    render(<Head planetName={planetName} />, {
      container: document.head,
    });
    expect(document.title).toBe(`${planetName} - Star Wars Navigation System`);
  });
});
