phantom = require('phantom');

var fullLoad = function(anUrl, callbackDone) {
    phantom.create(function (ph) {
        ph.createPage(function (page) {
            page.open(anUrl, function (status) {
                if (status !== 'success') {
                    console.error("phantom: error opening " + anUrl, status);
                    ph.exit();
                } else {
                    // timeOut
                    global.setTimeout(function () {
                        page.evaluate(function () {
                            return document.documentElement.innerHTML;
                        }, function (result) {
                            ph.exit(); // EXTREMLY IMPORTANT
                            callbackDone(result); // callback
                        });
                    }, 5000);
                }
            });
        });
    });
}

var callback = function(htmlBody) {
    // do smth with the htmlBody
}

fullLoad('http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend', callback);
