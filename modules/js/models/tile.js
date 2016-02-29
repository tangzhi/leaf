define([
  'underscore',
  'backbone'
], function main(_, Backbone) {
  var Tile = Backbone.Model.extend({
    defaults: {
      // tile 的形状 : '', 'double', 'double-down'
      type: '',

      // 背景色
      bg_color: '',

      // 聚焦状态 （鼠标选中，或者鼠标浮动其上)
      selected: false,

      // 选中状态
      checked: false,

      // 展示的图标
      body_i_class: '',

      // 自定义body , 与 body_icon_class 不能同时使用
      body_custom: null,

      // 左下标
      object_name: null,

      // 右下标
      object_number: null,

      // 自定义 object , 与 object_number/object_name 不能同时使用
      object_custom: null,

      // 在列表中的顺序
      order: 0
    }
  });

  return Tile;
});
