开发 Chrome App / Extension 的指导

## 概述

### Chrome App vs Chrome Extension

先要搞清楚 Chrome App 和 Chrome Extension 的区别：

* 生命周期不同
    * Extension 的 background 只要 `persistent` 设置为 `true`，那么这个 Extension 就会一直运行直到浏览器关闭
    * App 虽然也有 background，但和 Extension 的有很大不同。App 的 background 更像是一个入口文件(犹如C语言的main函数)，详见 [Chrome App Lifecycle](https://developer.chrome.com/apps/app_lifecycle)
* App 可以比 Extension 调更多的 API，比如 [fileSystem](https://developer.chrome.com/apps/fileSystem)、[mediaGalleries](https://developer.chrome.com/apps/mediaGalleries)
    * [App JavaScript APIs](https://developer.chrome.com/apps/api_index)
    * [Extension JavaScript APIs](https://developer.chrome.com/extensions/api_index)
* 权限不同，App 有更严格的权限策略

> 一般来说，Extension 和浏览器结合紧密，而 App 更像是一个独立的环境。

### Extension Scripts vs Content scripts vs Inject scripts

```
* Extension Scripts — Full access to all permittedchrome.* APIs.
This includes the background page, and all pages which have direct access to it viachrome.extension.getBackgroundPage(), such as thebrowser pop-ups.
* Content scripts (via the manifest file orchrome.tabs.executeScript) — Partial access to some of the chrome APIs, full access to the page’s DOM (not to any of the window objects, including frames).
Content scripts run in a scope between the extension and the page. The global window object of a Content script is distinct from the page/extension’s global namespace.
* Injected scripts (via this method in a Content script) — Full access to all properties in the page.No access to any of the chrome.* APIs.
Injected scripts behave as if they were included by the page itself, and are not connected to the extension in any way. See this post to learn more information on the various injection methods.

--- https://medium.com/front-end-hacking/how-do-chrome-extensions-modify-webpages-using-content-scripts-9ae278e2bdf8
```

* [x] pass message
* [x] file system
* [ ] content scripts
* [ ] background
* [ ] popup
* [ ] devtools