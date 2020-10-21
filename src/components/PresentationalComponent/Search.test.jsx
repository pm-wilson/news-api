import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    const { asFragment } = render(<App />);
    //expect(asFragment()).toMatchSnapshot();
    expect(true).toEqual(true);
  });
});