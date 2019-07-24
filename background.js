var hasExecutedOnce = false

function addUI(tabId) {
  chrome.tabs.sendMessage(tabId, {
    from: 'background',
    subject: 'isUIAdded?',
  })
}

chrome.browserAction.onClicked.addListener(function(tab) {
  if (!hasExecutedOnce) {
    chrome.tabs.executeScript(
      tab.id,
      {
        file: 'contentScript.js',
      },
      function() {
        addUI(tab.id)
      },
    )
    hasExecutedOnce = true
  }
  addUI(tab.id)
})
