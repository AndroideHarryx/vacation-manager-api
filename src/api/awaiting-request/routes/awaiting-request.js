'use strict';

/**
 * awaiting-request router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::awaiting-request.awaiting-request');
