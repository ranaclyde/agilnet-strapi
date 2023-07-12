'use strict';

/**
 * internet-pack service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::internet-pack.internet-pack');
