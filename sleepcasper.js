const phantom = require('phantom');
const sleep = require('sleep');

let args = process.argv.slice(2);

(async function () {
  const instance = await phantom.create();
  const page = await instance.createPage();

  const status = await page.open(
   args[0]
  );

  console.log('Pagina carregada com sucesso: ', args[0]);
  sleep.msleep(9000);
  await page.evaluate(function () {
    var style = document.createElement('style'),
      text = document.createTextNode('body { background-color: #fff }');
    style.setAttribute('type', 'text/css');
    style.appendChild(text);
    document.head.appendChild(style);
  });

  await page.render(args[1],
    {quality: 100});

  console.log('Pronto');
  await instance.exit();
})();