'use strict';

/**
 * workers-info router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::workers-info.workers-info');
