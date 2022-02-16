'use strict';

/**
 * awaiting-request service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::awaiting-request.awaiting-request');
