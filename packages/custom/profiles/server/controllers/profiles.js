'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Profile = mongoose.model('Profile'),
  _ = require('lodash');

module.exports = function(Profiles) {

    return {
        /**
        * Find profile by id
        */
        profile: function(req, res, next, id) {
            Profile.load(id, function(err, profile) {
                if (err) return next(err);
                if (!profile) return next(new Error('Failed to load profile ' + id));
                req.profile = profile;
                next();
            });
        },
        /**
        * Create an profile
        */
        create: function(req, res) {
            var profile = new Profile(req.body);
            profile.user = req.user;

            profile.save(function(err) {
                if (err) {
                  return res.status(500).json({
                    error: 'Cannot save the profile'
                  });
                }

                Profiles.events.publish('create', {
                    description: req.user.name + ' created ' + req.body.title + ' profile.'
                });

                res.json(profile);
            });
        },
        /**
        * Update an profile
        */
        update: function(req, res) {
            var profile = req.profile;

            profile = _.extend(profile, req.body);


            profile.save(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot update the profile'
                    });
                }

                Profiles.events.publish('update', {
                    description: req.user.name + ' updated ' + req.body.title + ' profile.'
                });

                res.json(profile);
            });
        },
        /**
        * Delete an profile
        */
        destroy: function(req, res) {
            var profile = req.profile;


            profile.remove(function(err) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot delete the profile'
                    });
                }

                Profiles.events.publish('remove', {
                    description: req.user.name + ' deleted ' + profile.title + ' profile.'
                });

                res.json(profile);
            });
        },
        /**
        * Show an profile
        */
        show: function(req, res) {

            Profiles.events.publish('view', {
                description: req.user.name + ' read ' + req.profile.title + ' profile.'
            });

            res.json(req.profile);
        },
        /**
        * List of Profiles
        */
        all: function(req, res) {
            Profile.find().sort('-created').populate('user', 'name username').exec(function(err, profiles) {
                if (err) {
                    return res.status(500).json({
                        error: 'Cannot list the profiles'
                    });
                }

                res.json(profiles);
            });
        }
    };
}