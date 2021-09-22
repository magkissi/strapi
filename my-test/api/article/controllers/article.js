"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  async find(ctx) {
    console.log(123);
    const articles = await strapi.services.article.find(ctx.query);
    return articles.map((article) => article.title);
  },
};
