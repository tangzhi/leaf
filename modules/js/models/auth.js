define([
  'jquery',
  'underscore',
  'backbone'
], function auth($, _, Backbone) {
  var AuthModel = Backbone.Model.extend({

    url: 'service/auth',

    initialize: function initialize() {
      var that = this;

      $.ajaxPrefilter(function a(options, originalOptions, jqXHR) {
        // If we have a csrf token send it through with the next request
        if (typeof that.get('_csrf') !== 'undefined') {
          console.log(that.get('_csrf'));
          jqXHR.setRequestHeader('X-CSRF-Token', that.get('_csrf'));
        }
      });
    },

    login: function login(creds, callback) {
      // Do a POST to /service/session and send the serialized form creds
      /* eslint-disable no-param-reassign */
      creds._csrf = this.get('_csrf');
      /* eslint-enable no-param-reassign */

      // this.clear({silent: true});
      this.save(creds, {
        success: callback,
        wait: true
      });
    },

    getAuth: function getAuth(callback) {
      // getAuth is wrapped around our router
      // before we start any routers let us see if the user is valid
      this.fetch({
        success: callback
      });
    },

    logout: function logout() {
    }

  });

  return new AuthModel();
});
