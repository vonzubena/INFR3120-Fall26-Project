// IIFE - Immediately Invoked Function Expression
// Runs right away and keeps our variables out of the global scope
(function(){
    function Start(){
        console.log("App started...");
    }
    window.addEventListener("load", Start);
})();