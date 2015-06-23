'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Adverts = new Module('adverts');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Adverts.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Adverts.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Adverts.menus.add({
    title: 'adverts example page',
    link: 'adverts example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Adverts.aggregateAsset('css', 'adverts.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Adverts.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Adverts.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Adverts.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Adverts;
});
