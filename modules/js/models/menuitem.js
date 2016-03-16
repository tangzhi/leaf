define([
  'underscore',
  'backbone'
], function main(_, Backbone) {
  var MenuItem = Backbone.Model.extend({
    defaults: {

      // 菜单图标class
      icon_class: null,

      // 当 icon_class 存在时，才有意义
      icon_color: '',

      // 菜单名
      item_name: 'MenuItem',

      // 菜单href
      item_href: '#',

      // 菜单是否选中状态
      item_active: false,

      // 右侧标签内容
      label: null,

      // 当 label 存在时，才有意义
      label_type: '',

      // 子菜单项
      children: [],

      // 在列表中的顺序
      order: 0
    }
  });

  return MenuItem;
});
