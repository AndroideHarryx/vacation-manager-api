'use strict';

/**
 *  users controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::users.user');
