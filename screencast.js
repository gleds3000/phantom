var casper = require('casper').create({
  waitTimeout:20000,
  verbose: true,
  logLevel: 'error',
  pageSettings: {
    loadImages: true,
    loadPlugins: true,
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_2) AppleWebKit/537.11 (KHTML, like Gecko) Chrome/23.0.1271.97 Safari/537.11'
  },
  //clientScripts: ['vendor/jquery.min.js', 'vendor/lodash.js'],
  viewportSize: {
    width: 1600,
    height:1000
  },
});

casper.start('http://10.113.65.82/')

casper.then(function() {
  this.waitForSelector('img', function() {
    this.capture('test.png')
  })
})

casper.run()