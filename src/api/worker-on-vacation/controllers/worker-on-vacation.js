'use strict';

/**
 *  worker-on-vacation controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::worker-on-vacation.worker-on-vacation');
