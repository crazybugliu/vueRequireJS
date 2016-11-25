/**
 * Created by yancongliu on 2016/11/24.
 */
define(function(require) {
    // 获取vue component
    var home = require('home');
    var user = require('user');

    app = new Vue({
        el: 'body',
        data: {
            currentView: 'home'
        },
        components: {
            home: home,
            user: user
        },
        methods: {
            toggle: function() {
                if (this.currentView == 'home') {
                    this.currentView = 'user';
                } else {
                    this.currentView = 'home'
                }
            }
        }
    })
});