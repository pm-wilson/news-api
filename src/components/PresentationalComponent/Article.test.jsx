import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Article from './Article';

describe('Article component', () => {
  afterEach(() => cleanup());
  it('renders Article', () => {
    const { asFragment } = render(<Article 
      title="Test Title"
      author="Earthworm Jim"
      description="This is a description of the article"
      url="http://techcrunch.com/2020/10/21/paypal-to-let-you-buy-and-sell-cryptocurrencies-in-the-us/"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
