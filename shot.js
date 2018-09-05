var page = new WebPage();
page.open('http://10.113.65.82/about');
page.onLoadFinished = function(status) {
    console.log(status);
    console.log(page.getPage(windowName));
    page.go(1);
    page.render('screenshot.png');
    phantom.exit();
};