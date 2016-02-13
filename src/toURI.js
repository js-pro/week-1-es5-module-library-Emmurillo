(function() {
  'use strict';

  function toURI(object) {
    var encodedArray = [];
    for(var key in object)
      if (object.hasOwnProperty(key))
        encodedArray
          .push(encodeURIComponent(key) + "=" + encodeURIComponent(object[key]));
    return encodedArray.join("&");
  }

  module.exports = toURI;
})();
