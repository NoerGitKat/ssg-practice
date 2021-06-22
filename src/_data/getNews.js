const fetch = require("node-fetch");
require("dotenv").config();

const getNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.NEWS_API_KEY}`
    );
    const news = await response.json();

    return news;
  } catch (error) {
    console.error(error);
  }
};

module.exports = getNews;
