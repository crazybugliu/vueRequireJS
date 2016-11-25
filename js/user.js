/**
 * Created by yancongliu on 2016/11/24.
 */

define(function (require) {
    var template = require('text!view/user.html');

    var v = Vue.extend({
        template: template, //to be replace
        data: function () {
            return {
                name: 'user'
            };
        },
        methods: {
            modify: function (data) {
                alert(data);
            }
        }
    });

    return v;
});