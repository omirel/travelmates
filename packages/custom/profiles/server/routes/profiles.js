'use strict';

// Profile authorization helpers
var hasAuthorization = function(req, res, next) {
  if (!req.user.isAdmin && !req.profile.user._id.equals(req.user._id)) {
    return res.status(401).send('User is not authorized');
  }
  next();
};

module.exports = function(Profiles, app, auth) {

  var profiles = require('../controllers/profiles')(Profiles);

  app.route('/api/profiles')
    .get(profiles.all)
    .post(auth.requiresLogin, profiles.create);
  app.route('/api/profiles/:profileId')
    .get(auth.isMongoId, profiles.show)
    .put(auth.isMongoId, auth.requiresLogin, hasAuthorization, profiles.update)
    .delete(auth.isMongoId, auth.requiresLogin, hasAuthorization, profiles.destroy);

  // Finish with setting up the profileId param
  app.param('profileId', profiles.profile);
};