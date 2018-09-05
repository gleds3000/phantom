var page = require("webpage").create(),
    url = "http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend";

function onPageReady() {
    var htmlContent = page.evaluate(function () {
        return document.documentElement.outerHTML;
    });

    console.log(htmlContent);
    page.render('foto.png');
//gravar conteudo em um arquivo.html abrir ele novamente e printar...


/**/

    phantom.exit();
}

page.open(url, function (status) {
    function checkReadyState() {
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.readyState;
            });

            if ("complete" === readyState) {
                console.log("Completo");
                onPageReady();
                
            } else {
                checkReadyState();
            }
        });
    }

    checkReadyState();
});