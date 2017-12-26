// pass message from popup to content
chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
  chrome.tabs.sendMessage(
    tabs[0].id,
    {"message": "这是从popup发送信息到content_scripts\n"},
    function(response) {
      document.write(response)
    }
  )
})
