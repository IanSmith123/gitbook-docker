## gitbook-docker
- 因为某些不可描述的原因，访问gitbook非常慢，所以这里使用docker 搭建私有gitbook
- 网上现有的gitbook的docker镜像比较陈旧，不好用
- 搭建私有gitlab作为版本控制工具,gitbook渲染网页，nginx 作为静态web服务器
- 2017-12-30

## 运行方式
配置docker和docker-compose环境，尔后运行
```bash
$ docker-compose up -d
```
容器启动完成之后访问本机4000端口即可


## todo
- [ ] 使用gitlab搭建私有仓库用作版本控制，配置webhook触发更新gitbook,
- [ ] 使用nginx作为静态服务器， gitbook只负责渲染构建网页
## refer:
- https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md


