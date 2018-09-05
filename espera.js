/**
 * Wait until the test condition is true or a timeout occurs. Useful for waiting
 * on a server response or for a ui change (fadeIn, etc.) to occur.
 *
 * @param testFx javascript condition that evaluates to a boolean,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param onReady what to do when testFx condition is fulfilled,
 * it can be passed in as a string (e.g.: "1 == 1" or "$('#bar').is(':visible')" or
 * as a callback function.
 * @param timeOutMillis the max amount of time to wait. If not specified, 3 sec is used.
 */

"use strict";
function waitFor(testFx, onReady, timeOutMillis) {
    var maxtimeOutMillis = timeOutMillis ? timeOutMillis : 50000, //< Default Max Timout is 3s
        start = Date.now()//new Date().getTime(),
        condition = false,
        interval = setInterval(function() {
            if ( (Date.now() - start < maxtimeOutMillis) && !condition ) {
                // If not time-out yet and condition not yet fulfilled
                console.log(testFx);
                console.log(onReady);
                console.log(timeOutMillis);
                condition = (typeof(testFx) === "string" ? eval(testFx) : testFx()); //< defensive code
                console.log(condition);
                console.log("saiu aqui 1");
            } else {
                if(!condition) {
                    // If condition still not fulfilled (timeout but condition is 'false')
                    console.log("'waitFor()' timeout");
                    phantom.exit(1);
                } else {
                    // Condition fulfilled (timeout and/or condition is 'true')
                    console.log("'waitFor()' finished in " + (Date.now() - start) + "ms.");
                    typeof(onReady) === "string" ? eval(onReady) : onReady(); //< Do what it's supposed to do once the condition is fulfilled
                    clearInterval(interval); //< Stop this interval
                }
            }
        }, 4000); //< repeat check every 4000ms
};

var page = require('webpage').create();

// abrindo a pagina
page.open("http://10.113.65.82/dashboard?id=carrefour.corporativo.frontend", function (status) {
    // Check for page load success
    if (status !== "success") {
        console.log("Unable to access network");
    } else {
        // Wait for 'signin-dropdown' to be visible
        waitFor(function() {
            // Check in the page if a specific element is now visible
            return page.evaluate(function() {
                return $("[DIV].style.visibility").is(":visible");
            });
        }, function() {
           console.log("The sign-in dialog should be visible now.");
           phantom.exit();
        });
    }
});
