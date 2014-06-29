var unwanted = ['box-network', 'box-contact', 'Tvguide'];
unwanted.forEach(function(id) {
  var elm = document.getElementById(id);
  if (null !== elm && elm.parentNode) {
    elm.parentNode.removeChild(elm);
  }
});
