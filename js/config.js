requirejs.config({
    baseUrl: '', //默认路径，和'/'有区别
    paths: {
        'text': 'js/lib/text',
        'main': 'js/main',
        'home': 'js/home',
        'user': 'js/user'
    }
});

require(['main'] , function(main) {
	console.log('main loaded.');
});