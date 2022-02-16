'use strict';

/**
 * worker-on-vacation router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::worker-on-vacation.worker-on-vacation');
