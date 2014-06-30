function removeElm(elm) {
  if (null !== elm && elm.parentNode) {
    elm.parentNode.removeChild(elm);
  }
};

var unwantedIds = ['box-network', 'box-contact', 'Tvguide'];
unwantedIds.forEach(function(id) {
  removeElm(document.getElementById(id));
});

// Remove the dropdown panel menus from each section heading on the homepage.
var unwantedPanels = document.querySelectorAll('div.dropdown-panel');
for (var i = 0; i < unwantedPanels.length; ++i) {
  removeElm(unwantedPanels[i]);
}

