import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Articles from './Articles';

describe('Articles component', () => {
  const data = [
    {
      'source': {
        'id': 'techcrunch',
        'name': 'TechCrunch'
      },
      'author': 'Romain Dillet',
      'title': 'PayPal to let you buy and sell cryptocurrencies in the US',
      'description': 'PayPal has partnered with cryptocurrency company Paxos to launch a new service. PayPal users in the U.S. will soon be able to buy, hold and sell cryptocurrencies. More countries are coming soon. PayPal plans to support Bitcoin, Ethereum, Bitcoin Cash and Lite…',
      'url': 'http://techcrunch.com/2020/10/21/paypal-to-let-you-buy-and-sell-cryptocurrencies-in-the-us/',
      'urlToImage': 'https://techcrunch.com/wp-content/uploads/2020/07/GettyImages-887657568.jpg?w=600',
      'publishedAt': '2020-10-21T13:28:15Z',
      'content': 'PayPal has partnered with cryptocurrency company Paxos to launch a new service. PayPal users in the U.S. will soon be able to buy, hold and sell cryptocurrencies. More countries are coming soon.\r\nPay… [+2069 chars]'
    }, {
      'source': {
        'id': 'the-verge',
        'name': 'The Verge'
      },
      'author': 'Nick Statt',
      'title': 'PayPal and Venmo will offer and accept cryptocurrency for all online payments',
      'description': 'PayPal is joining the cryptocurrency industry with support for bitcoin and other digital currencies, making the digital payments company one of the most significant adopters of the technology to date. PayPal plans to extend support to its money-sending app Ve…',
      'url': 'https://www.theverge.com/2020/10/21/21527288/paypal-cryptocurrency-support-buy-sell-venmo-bitcoin',
      'urlToImage': 'https://cdn.vox-cdn.com/thumbor/altkKN7BnaLUpbAVPi6j4xmC2Ug=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/13546110/acastro_181126_1777_bitcoin_0001.jpg',
      'publishedAt': '2020-10-21T19:49:27Z',
      'content': 'PayPal is rolling out cryptocurrency support later this year\r\nIllustration by Alex Castro / The Verge\r\nPayPal on Wednesday announced it would begin supporting cryptocurrencies for the first time, all… [+2172 chars]'
    },
  ];

  afterEach(() => cleanup());
  it('renders Articles', () => {
    const { asFragment } = render(<Articles articles={data}/>);
    expect(asFragment()).toMatchSnapshot();
  });
});
