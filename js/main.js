'use strict';
(function(document) {
  var toggle = document.querySelector('.sidebar-toggle');
  var sidebar = document.querySelector('#sidebar');
  var checkbox = document.querySelector('#sidebar-checkbox');

  document.addEventListener('click', function(e) {
    var target = e.target;

    if(!checkbox.checked ||
       sidebar.contains(target) ||
       (target === checkbox || target === toggle)) return;

    checkbox.checked = false;
  }, false);
})(document);
(function ($) {
  $(document).ready(function () {
    if ($('body').hasClass('lt-ie7')) {return; }
    // Application specific javascript code goes here
  }
  );
}(jQuery));
