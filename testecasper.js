var casper = require('casper').create();
casper.start('http://10.113.65.82/');

casper.then(function() {
    this.echo('First Page: ' + this.getTitle());
});

casper.thenOpen('http://10.113.65.82/about', function() {
    this.echo('Second Page: ' + this.getTitle());
});

casper.run();