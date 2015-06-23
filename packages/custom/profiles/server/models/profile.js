'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;


/**
 * Profile Schema
 */
var ProfileSchema = new Schema({
  created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  content: {
    type: String,
    required: true,
    trim: true
  },
  content2: {
    type: String,
    required: true,
    trim: true
  },
  user: {
    type: Schema.ObjectId,
    ref: 'User'
  },
  updated: {
    type: Array
  }
});

/**
 * Validations
 */
ProfileSchema.path('title').validate(function(title) {
  return !!title;
}, 'Title cannot be blank');

ProfileSchema.path('content').validate(function(content) {
  return !!content;
}, 'Content cannot be blank');

ProfileSchema.path('content2').validate(function(content2) {
  return !!content2;
}, 'Where is my Content2???');

/**
 * Statics
 */
ProfileSchema.statics.load = function(id, cb) {
  this.findOne({
    _id: id
  }).populate('user', 'name username').exec(cb);
};

mongoose.model('Profile', ProfileSchema);
