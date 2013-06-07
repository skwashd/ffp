var overlay = document.getElementById('subscription-overlay');
if (null !== overlay && overlay.parentNode) {
  overlay.parentNode.removeChild(overlay);
  document.getElementsByTagName('body')[0].style.overflow = 'auto';
}
