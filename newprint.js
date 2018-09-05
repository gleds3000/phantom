var page = require('webpage').create(),
  system = require('system'),
  t, address;

if (system.args.length === 1) {
  console.log('Como usar: load.js [Sua URL]');
  phantom.exit();
}

t = Date.now();
address = system.args[1];
page.open(address, function(status) {
  if (status !== 'success') {
    console.log('Falha ao carregar pagina');
  } else {
    t = Date.now() - t;
    console.log('Carregando ' + system.args[1]);
    console.log('Tempo para carregar ' + t + ' msec');
    
  }
  phantom.exit();
});
