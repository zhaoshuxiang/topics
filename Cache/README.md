# 关于缓存

缓存可以**减少HTTP请求** 或 **减少HTTP Response的大小**

---

###Expires
指定组件的过期时间（具体时间点）
特点：如果组件没有过期，不用发送HTTP请求；
弊端：客户端和服务端需要严格的时间同步
```javascript
Expires: Wed, 04 Jul 2012 08:26:05 GMT
```
###Cache-Control
多个指令，以“,”分隔
####max-age
指定组件缓存的时间（以秒为单位 ）
特点：如果组件没有过期，不用发送HTTP请求；不需要客户端和服务端时间同步；和Expires同时指定缓存策略，Expires的优先级高于Expires
弊端：需要HTTP/1.1支持
```javascript
Cache-Control: max-age=31536000
```
###Conditional GET Request
“条件性GET请求” 的条件是：ETag和Last-Modified
###ETag
如果缓存的组件过期了，且Response中有ETag，HTTP的请求会包含 If-None-Match 并把Etag带上，与服务端比较，如果匹配则返回304，不需要返回实体。
###Last-Modified
如果缓存的组件过期了，且Response中有Last-Modified，HTTP的请求会包含 If-Modified-Since 并把日期带上，与服务端比较，如果匹配则返回304，不需要返回实体。



