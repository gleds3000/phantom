
//start = Date.now()//new Date().getTime(),
//end = new Date().getTime()

console.log(new Intl.NumberFormat('en').format(Date.now()));

//console.log(start);
//console.log(end);
/*
var webPage = require('webpage');
var page = webPage.create();

page.open('https://github.com/', function(status) {

  var title = page.evaluate(function() {
    //return document.title.length > 0;
    return document.readyState;
  });
  var tratamento = document.readyState.replace('https://assets-cdn.github.com/assets/frameworks-bf2c22b1c392529e298b629d4e812b82.js:1','') 
  console.log(tratamento);
  //console.log(document.readyState);
  phantom.exit();

});

*/

//phantom.exit(1);