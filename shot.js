var page = new WebPage();
page.open('http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend');
page.onLoadFinished = function(status) {
    page.render('screenshot.png');
    phantom.exit();
};