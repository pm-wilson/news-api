export const getNews = (text) => {
  return fetch(`http://newsapi.org/v2/everything?q=${text}&from=2020-09-22&sortBy=publishedAt&apiKey=dfb433632cae4da09ba53974b2d1e3c2`)
    .then(res => res.json());

};
