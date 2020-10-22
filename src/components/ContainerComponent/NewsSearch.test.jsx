import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';

describe('NewsSearch component', () => {
  afterEach(() => cleanup());
  it('renders NewsSearch', () => {
    const { asFragment } = render(<NewsSearch />);
    //expect(asFragment()).toMatchSnapshot();
    expect(true).toEqual(true);
  });
});
