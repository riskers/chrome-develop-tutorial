// 监听来自 content 的信息
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(request)
    console.log(sender)
    console.log(sendResponse)
  }
)
