'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Travelmates = new Module('travelmates');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Travelmates.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Travelmates.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Travelmates.menus.add({
    title: 'travelmates Profile',
    link: 'travelmates Profile',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Travelmates.aggregateAsset('css', 'travelmates.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Travelmates.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Travelmates.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Travelmates.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Travelmates;
});
