const fetch = require("node-fetch");
const countries = require("./countries.json");
require("dotenv").config();

const getNewsByCountry = async (country) => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`
    );
    const news = await response.json();

    return { country: country, articles: news.articles };
  } catch (error) {
    console.error(error);
  }
};

const getNews = async () => {
  const news = countries.map(getNewsByCountry);
  const newsObjects = await Promise.all(news);

  return newsObjects;
};

module.exports = getNews;
