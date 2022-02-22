'use strict';

/**
 * workers-info service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::workers-info.workers-info');
