fs = require('fs');
fs.write('csf' + Date.now() + '.html', '<html><head>teste</head></html>', function (err) {
    if (err) throw err;
    console.log("success");
    console.log('Ok escrito');
    phantomjs.exit();
    
});