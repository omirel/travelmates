'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Profiles = new Module('profiles');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Profiles.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Profiles.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Profiles.menus.add({
    title: 'profiles example page',
    link: 'profiles example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Profiles.aggregateAsset('css', 'profiles.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Profiles.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Profiles.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Profiles.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Profiles;
});
