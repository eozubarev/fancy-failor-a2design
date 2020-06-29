/* myLib */
(function() {
  window.myLib = {};

  window.myLib.body = document.querySelector("body");

  window.myLib.closestAttr = function(item, attr) {
    var node = item;

    while (node) {
      var attrValue = node.getAttribute(attr);
      if (attrValue) {
        return attrValue;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.closestItemByClass = function(item, className) {
    var node = item;

    while (node) {
      if (node.classList.contains(className)) {
        return node;
      }

      node = node.parentElement;
    }

    return null;
  };

  window.myLib.toggleScroll = function() {
    myLib.body.classList.toggle("no-scroll");
  };
})();

/* myLib */

/* header */
(function() {
  if (window.matchMedia("(max-width: 1300px)").matches) {
    return;
  }

  var headerPage = document.querySelector(".header-page");

  window.addEventListener("scroll", function() {
    if (window.pageYOffset > 0) {
      headerPage.classList.add("is-active");
    } else {
      headerPage.classList.remove("is-active");
    }
  });
})();
/* header */
