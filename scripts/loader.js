var jewel = {};

window.addEventListener("load", function() {

  Modernizr.load([
  {
    // these files are always loaded
    load : [
        "scripts/sizzle.js",
        "scripts/dom.js",
        "scripts/game.js"
    ],
    //called when all files are finished loading
    complete : function() {
      //console.log("All files loaded");
      jewel.game.showScreen("spash-screen");
    }
  }
]);

}, false);