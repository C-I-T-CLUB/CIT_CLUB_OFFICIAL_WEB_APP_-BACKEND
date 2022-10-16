/**
 * Application module dependencies
 */
const router = require ( 'express').Router();

/**
 * Interal dependencies
 */
const signup = require ( '../controllers/sign_up');
const login = require ( '../controllers/login');

// Path: routes\auth.js
router.post ('/signup', signup );
router.post ( '/login', login);



//Export routes
module.exports = router;