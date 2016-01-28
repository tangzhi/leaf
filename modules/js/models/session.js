define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    var SessionModel = Backbone.Model.extend({

        url: 'service/session',

        initialize: function () {
            that = this;

            $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
                /*
                // Use withCredentials to send the server cookies
                // The server must allow this through response headers
                options.xhrFields = {
                    withCredentials: true
                };
                */
                // If we have a csrf token send it through with the next request
                if(typeof that.get('_csrf') !== 'undefined') {
                    console.log(that.get('_csrf'));
                    jqXHR.setRequestHeader('X-CSRF-Token', that.get('_csrf'));
                }
            });
        },

        login: function(creds, callback) {
            // Do a POST to /service/session and send the serialized form creds
            //this.clear({silent: true});
            creds._csrf = this.get('_csrf');
            this.save(creds, {
                success: callback,
                wait: true
            });
        },

        logout: function() {
        }

    });

    return new SessionModel();
});
