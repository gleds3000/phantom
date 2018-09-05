//gera html 

var page = require("webpage").create(),
    url = "http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend";
var fs = require('fs');
function onPageReady() {
    var htmlContent = page.evaluate(function () {
        return document.documentElement.outerHTML;
    });

    console.log(htmlContent);
   
    fs.write('csf' + Date.now() + '.html', htmlContent , function (err) {
    console.log('Ok escrito');
    });
    phantom.exit();
}

page.open(url, function (status) {
    function checkReadyState() {
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.readyState;
            });

            if ("complete" === readyState) {
                onPageReady();
            } else {
                checkReadyState();
            }
        });
    }

    checkReadyState();
});