/**
 * EVENTS
 */
/**
 * Application module dependencies
 */


/**
 * Internal module dependencies
 */

//Fetch event handlers
const getEvents = ( req, res) => {
    res
    .setHeader('Content-Type', 'application/json')
    .status(200)
    .json ( {
        events: 'events'
    })
};

//Export event handlers
module.exports = getEvents;

