var page = require('webpage').create();
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';

page.open('http://google.com', function() {
  // being the actual size of the headless browser
  page.viewportSize = { width: 1440, height: 900 };

  var clipRect = page.evaluate(function(){
    return document.querySelector('#hplogo').getBoundingClientRect();
  });

  page.clipRect = {
    top:    clipRect.top,
    left:   clipRect.left,
    width:  clipRect.width,
    height: clipRect.height
  };

  page.render('google.png');
  phantom.exit();
});