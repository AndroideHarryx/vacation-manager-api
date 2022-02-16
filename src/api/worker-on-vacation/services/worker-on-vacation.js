'use strict';

/**
 * worker-on-vacation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::worker-on-vacation.worker-on-vacation');
