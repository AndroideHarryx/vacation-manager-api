'use strict';

/**
 * users service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users.user');
