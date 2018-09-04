var page = require('webpage').create();
var filename = 'gleds'+Date.now()+'.pdf'
page.viewportSize = {width:800,height:600 }
page.papersize = {formart : 'letter', orientation : 'portrait' , border : '0.5in'};

page.open( 'http://10.113.65.82/', function() {
    console.log(page.render)
    page.render(filename);
    phantom.exit();
});