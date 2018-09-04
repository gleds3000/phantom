//gerar html
console.log("iniciando os trabalhos");
var fs = require('fs');
var page = require("webpage").create(), url = "http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend";
function onPageReady() {
    var htmlContent = page.evaluate(function () {
        return document.documentElement.outerHTML;
        console.log("function ok")
    });

    console.log(htmlContent);
    fs.write("./meuarquivo.html", htmlContent, "w");
    console.log("Arquivo salvo"); 
}


page.open(url, function (status) {
    function checkReadyState() {
        console.log("entrou na funcao 2");
        setTimeout(function () {
            var readyState = page.evaluate(function () {
                return document.readyState;
                console.log("teste 0");
            });

            if ("complete" === readyState) {
                console.log("Completo");
                onPageReady();
                
            } else {
                checkReadyState();
                console.log("verifica 1")
            }
        });
    }

    checkReadyState();
    console.log("verifica 2")
});


phantom.exit(1);
