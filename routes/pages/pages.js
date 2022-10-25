/**
 * Application module dependencies
 */

/**
 * Internal module dependencies
 */
const dashboard = require ( '../../controls/pages/dashboard');
const getEvents = require ( '../../controls/pages/events');

//pages object:
const pages = {
    dashboard: dashboard,
    getEvents: getEvents
};
//Export pages object
module.exports = pages;