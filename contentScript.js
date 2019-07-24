var body = document.getElementsByTagName('body')[0]

function insertUI() {
  var div = document.createElement('div')
  div.setAttribute('id', 'sample-extension-12345')
  div.innerHTML = `<h1>Sample Extension</h1>`
  body.appendChild(div)
}

function removeUI() {
  document.getElementById('sample-extension-12345').remove()
}

function main() {
  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.subject === 'isUIAdded?') {
      const id = document.getElementById('sample-extension-12345')
      if (id === null) insertUI()
      else removeUI()
    }
  })
}

main()
