import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import NewsSearch from './NewsSearch';
import { getNews } from '../../services/getNews-api';

jest.mock('../../services/getNews-api');

describe('NewsSearch container', () => {
  it('displays a list of articles', async() => {
    getNews.mockResolvedValue('apple');

    render(<NewsSearch />);

    const newsList = await screen.findByTestId('articles');

    expect(newsList).not.toBeEmptyDOMElement();
  });
});
