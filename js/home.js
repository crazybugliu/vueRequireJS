/**
 * Created by yancongliu on 2016/11/24.
 */

define(function(require) {
    var template = require('text!view/home.html');  //获取组件模板
    var v = Vue.extend({
        template: template, 
        data: function () {
            return {
                name: 'home'
            };
        },
        methods: {
            show: function (data) {
                alert(data);
            }
        }
    });

    return v;
});