chrome.runtime.onInstalled.addListener(function () {
  var domainSnippets = [
    'theage',
    'smh',
    'brisbanetimes',
    'watoday',
    'canberratimes'
  ],
    prefixes = ['', '*.'],
    pattern = '',
    settings = {};

  domainSnippets.forEach(function(snippet) {
    prefixes.forEach(function(prefix) {
      pattern = '*://' + prefix + snippet + '.com.au/*';
      settings = {
        primaryPattern: pattern,
        setting: 'block'
      };

      chrome.contentSettings['javascript'].set(settings);
      chrome.contentSettings['cookies'].set(settings);
    });
  });
});
