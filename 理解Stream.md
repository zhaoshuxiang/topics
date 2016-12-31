# 理解Stream

 流分为：steam.Readable、steam.Writable、steam.Duplex、steam.Transform
 
 node只定义了流的接口，需要具体的对象去实现接口
 
 steam.Readable的实现有：fs.createReadStream、http.IncomingMessage  
 steam.Writable的实现由：fs.creatWriteStream
 
 Buffer和Stream的关系？  
 Buffer用于操作二进制数据，流是建立在Buffer的基础上，实现对二进制数据的流式操作。

Duplex 是双工通道，可读可写  
Transform不会缓存数据，只对流经的数据做处理
