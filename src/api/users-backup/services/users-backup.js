'use strict';

/**
 * users-backup service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::users-backup.users-backup');
