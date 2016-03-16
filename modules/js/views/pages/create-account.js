define([
  'jquery',
  'underscore',
  'backbone',
  'bootstrap-select/dist/js/bootstrap-select'// ,
  // 'bootstrap-select/dist/js/i18n/defaults-zh_CN'
], function home($, _, Backbone) {
  var CreateAccountView = Backbone.View.extend({
    el: '.container-default',

    initialize: function initialize() {
    },

    events: {
    },

    render: function render() {
      var template = require('templates/pages/create-account.hbs');

      // 添加页面上下拉框式样 bootstrap-select.css
      require('style!css!bootstrap-select/dist/css/bootstrap-select.css');

      // 添加页面Dom
      this.$el.html(template());

      // 动态生成页面，故需手工加载一下
      $('.selectpicker').each(function a() {
        var $selectpicker = $(this);
        $.fn.selectpicker.call($selectpicker, $selectpicker.data({
          style: 'btn-light',
          iconBase: 'fa'
        }));
      });

      return this;
    }

    // clean: function clean() {
    // }
  }, {
    // 默认值为 null
    getLayout: 'default'
  });

  return CreateAccountView;
});
