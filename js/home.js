/**
 * Created by yancongliu on 2016/11/24.
 */

define(function(require) {
    var template = require('text!view/home.html');
    var v = Vue.extend({
        template: template, //to be replace
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
})