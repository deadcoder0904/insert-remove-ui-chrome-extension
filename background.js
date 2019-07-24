var hasExecutedOnce = false

function addUI(tabId) {
  chrome.tabs.sendMessage(tabId, {
    from: 'background',
    subject: 'isUIAdded?',
  })
}

chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([
      {
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { hostEquals: 'www.google.co.in' },
          }),
        ],
        actions: [new chrome.declarativeContent.ShowPageAction()],
      },
    ])
  })
})

chrome.pageAction.onClicked.addListener(function(tab) {
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
