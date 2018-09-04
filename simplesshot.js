var page = require('webpage').create();
page.open('http://10.113.65.82/', function() {
    setTimeout(function() {
        page.render('simples.png');
        phantom.exit();
    }, 10000);
});