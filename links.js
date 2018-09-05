var page = require("webpage").create();
//define o viewport da tela
page.viewportSize = {
    width: 1024,
    height: 720
};
//abre a url
page.open("http://10.113.65.82/projects?sort=-analysis_date", function(status) {
    if (status !== "success") {
        console.log("erro ao acessar página");
    } else {
        //links na página
        var listLink = page.evaluate(function() {
            var list = [];
            var links = document.querySelectorAll("a");
            //para cada link coloca o indice dele do lado em vermelho
            [].forEach.call(links, function(item, i) {
                item.innerHTML += "<span style='color:red;font-size:11px'> [" + item.href + "]</span>";
                list.push(item.href);
            });
            document.body.innerHTML = [
                "<ul>",
                    list.map(function(item, indice) {
                        return "<li>" + item + "</li>";
                    }).join(""),
                "</ul>",
                "<hr />",
                document.body.innerHTML
            ].join("");
            //retorna a lista de links
            return list;
        });
        console.log(listLink);
        //renderiza  apagina
        page.render('sonar'+Date.now()+'.png');
    }
    phantom.exit();
});