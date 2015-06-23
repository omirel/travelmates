'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module,
  favicon = require('serve-favicon');

var SystemPackage = new Module('system');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
SystemPackage.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  SystemPackage.routes(app, auth, database);

  // SystemPackage.aggregateAsset('css', 'common.css');
  SystemPackage.angularDependencies(['ui.router', 'mean-factory-interceptor']);

  // Lib aggregated Files
  var libDir = '../lib/';

  <!-- CSS Global Compulsory -->
  SystemPackage.aggregateAsset('css', libDir + 'plugins/bootstrap/css/bootstrap.min.css');
  SystemPackage.aggregateAsset('css', libDir + 'css/style.css');

  <!-- CSS Header and Footer -->
  SystemPackage.aggregateAsset('css', libDir + 'css/headers/header-default.css');
  SystemPackage.aggregateAsset('css', libDir + 'css/footers/footer-v1.css');

  <!-- CSS Implementing Plugins -->
  SystemPackage.aggregateAsset('css', libDir + 'plugins/animate.css');
  SystemPackage.aggregateAsset('css', libDir + 'plugins/line-icons/line-icons.css');
  SystemPackage.aggregateAsset('css', libDir + 'plugins/font-awesome/css/font-awesome.min.css');
  SystemPackage.aggregateAsset('css', libDir + 'plugins/scrollbar/css/jquery.mCustomScrollbar.css');
  SystemPackage.aggregateAsset('css', libDir + 'plugins/sky-forms-pro/skyforms/css/sky-forms.css');
  SystemPackage.aggregateAsset('css', libDir + 'plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css');

  <!-- JS Implementing Plugins -->
  SystemPackage.aggregateAsset('js', libDir + 'plugins/back-to-top.js');
  SystemPackage.aggregateAsset('js', libDir + 'plugins/smoothScroll.js');
  SystemPackage.aggregateAsset('js', libDir + 'plugins/circles-master/circles.js');
  SystemPackage.aggregateAsset('js', libDir + 'plugins/sky-forms-pro/skyforms/js/jquery-ui.min.js');
  SystemPackage.aggregateAsset('js', libDir + 'plugins/sky-forms-pro/skyforms/js/jquery.validate.min.js');
  SystemPackage.aggregateAsset('js', libDir + 'plugins/sky-forms-pro/skyforms/js/jquery.maskedinput.min.js');
  SystemPackage.aggregateAsset('js', libDir + 'plugins/scrollbar/js/jquery.mCustomScrollbar.concat.min.js');

  <!-- JS Page Level -->
  SystemPackage.aggregateAsset('js', libDir + 'js/app.js');
  SystemPackage.aggregateAsset('js', libDir + 'js/forms/reg.js');
  SystemPackage.aggregateAsset('js', libDir + 'js/forms/checkout.js');
  SystemPackage.aggregateAsset('js', libDir + 'js/plugins/datepicker.js');

  // The middleware in config/express will run before this code
  // Set views path, template engine and default layout
  app.set('views', __dirname + '/server/views');

  // Setting the favicon and static folder
  app.use(favicon(__dirname + '/public/assets/img/favicon.ico'));

  // Adding robots and humans txt
  app.useStatic(__dirname + '/public/assets/static');

  SystemPackage.menus.add({
    title: 'Log Out',
    link: 'Log Out',
    roles: ['authenticated'],
    menu: 'account'
  });

  return SystemPackage;

});
