document.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.create({ url: 'edge://extensions/shortcuts' }, () => {
    if (chrome.runtime.lastError) {
      document.getElementById('fallback').style.display = 'block';
    }
    setTimeout(() => window.close(), 1000);
  });
});
