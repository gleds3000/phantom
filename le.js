var page = require('webpage').create();
var system = require('system');

page.onInitialized = function() {
    page.onCallback = function(data) {
        console.log('Main page is loaded and ready');
        page.render('screenshot.png');
        phantom.exit();
    };

    page.evaluate(function() {
        document.addEventListener('DOMContentLoaded', function() {
            window.callPhantom();
                
        }, false);
        console.log("Added listener to wait for page ready");
    });

};

page.open('http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend', function(status) {});