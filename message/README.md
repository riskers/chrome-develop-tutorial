# 消息传递

[DOC](https://developer.chrome.com/extensions/messaging)

文档较复杂，介绍了:

* [简单一次性请求](#t1)
* [长连接](#t2)
* 跨扩展程序消息传递
* 网页发送消息
* 原生消息通信

<h2 id="t1">简单一次性请求</h2>

![模型](../assets/pass_message_1.png)

> extension 包括但不限于 **popup page**、**background** 等

### [DEMO](./simple_one_time_requests)

<img src="../assets/pass_message_from_popup_to_content.gif" width="300" alt="pass message from popup to content" title="pass message from popup to content"/>

<img src="../assets/pass_message_from_content_to_backgroud.gif" width="300" alt="pass message from content to backgroud" title="pass message from content to backgroud"/>

### 使用API

* chrome.tabs
* chrome.runtime.sendMessage
* chrome.runtime.onMessage

<h2 id="t2">长连接</h2>

### [DEMO](./long_lived_connections)

<img src="../assets/long_lived_connections.png" width="300" title="long_lived_connections" alt="long_lived_connections"/>