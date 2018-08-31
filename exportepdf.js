// load the module
var webpage = require('webpage');
// get timestamp
function getTimestamp(){
    // or use Date.now()
    return new Date().getTime();
}

var lastTimestamp = getTimestamp();

var page = webpage.create();
page.onResourceRequested = function(request) {
    // update the timestamp when there is a request
    lastTimestamp = getTimestamp();
};
page.onResourceReceived = function(response) {
    // update the timestamp when there is a response
    lastTimestamp = getTimestamp();
};

page.open(http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend, function(status) {
    if (status !== 'success') {
        // exit if it fails to load the page
        phantom.exit(1);
    }
    else{
        page.render('fu.png');
    }
});

function checkReadyState() {
    setTimeout(function () {
        var curentTimestamp = getTimestamp();
        if(curentTimestamp-lastTimestamp>5000){
            // exit if there isn't request or response in 1000ms
            phantom.exit();
        }
