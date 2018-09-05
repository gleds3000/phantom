var casper = require('casper').create({
  remoteScripts:  [
    'http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.6.1/lodash.js'
  ],
  pageSettings: {
    userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/40.0.1500.71 Safari/537.36'
  },
  viewport: {
    width: 1280,
    height: 1024
  },
  waitTimeout: 60000,
  logLevel: 'debug',
  verbose: true
});

casper.start('http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend', function(){
    this.echo('Starting...')
    this.waitForSelector('.qrcode', function() {
        this.captureSelector('sonar'+Date.now()+'.png', 'html');
        this.echo('Screeshot Taken!')
    });
});

casper.run();