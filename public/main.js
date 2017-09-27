'use strict';

(function() {

  var evtSource = new EventSource("/__webpack_hmr");

  var socket = io();

  socket.on('connect', onConnect);

  function onConnect(){
    console.log('connect ' + socket.id);
  }

})();
