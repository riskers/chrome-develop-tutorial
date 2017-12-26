// pass message from content to background
document.body.onclick = function() {
  chrome.runtime.sendMessage({message: '这是从content_scripts发送信息到background\n'}, function(response) {
    console.log(response)
  })
}

// 监听来自 popup 的信息
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    // request: 传递的信息
    // sender: 发送者
    // sendResponse: 回调函数

    sendResponse('收到信息')
  }
)
