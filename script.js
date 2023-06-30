//your JS code here. If required.
// JavaScript
window.addEventListener('DOMContentLoaded', function() {
  const browserInfoDiv = document.getElementById('browser-info');
  const browserName = navigator.userAgent;
  const version = parseFloat(navigator.appVersion);
  const message = "You are using " + browserName + " version " + version;
  browserInfoDiv.textContent = message;
});

