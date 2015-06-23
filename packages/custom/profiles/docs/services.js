'use strict';

exports.load = function(swagger, parms) {

  var searchParms = parms.searchableOptions;

  var list = {
    'spec': {
      description: 'Profile operations',
      path: '/profiles',
      method: 'GET',
      summary: 'Get all Profiles',
      notes: '',
      type: 'Profile',
      nickname: 'getProfiles',
      produces: ['application/json'],
      params: searchParms
    }
  };

  var create = {
    'spec': {
      description: 'Device operations',
      path: '/profiles',
      method: 'POST',
      summary: 'Create profile',
      notes: '',
      type: 'Profile',
      nickname: 'createProfile',
      produces: ['application/json'],
      parameters: [{
        name: 'body',
        description: 'Profile to create.  User will be inferred by the authenticated user.',
        required: true,
        type: 'Profile',
        paramType: 'body',
        allowMultiple: false
      }]
    }
  };

  swagger.addGet(list)
    .addPost(create);

};
