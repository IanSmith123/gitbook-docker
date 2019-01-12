## gitbook-docker
##  序 

- 因为某些不可描述的原因，访问gitbook非常慢，所以这里使用docker 搭建私有gitbook
- 网上现有的gitbook的docker镜像比较陈旧，不好用
- 搭建私有gitlab作为版本控制工具,gitbook渲染网页

## 运行方式
配置docker和docker-compose环境，尔后运行将需要渲染展示的`gitbook`的`git` 仓库的`URI`填写到`docker-compose.yml`中，运行
```bash
$ git clone https://github.com/IanSmith123/gitbook-docker --depth=1
$ cd gitbook-docker
$ docker-compose up -d
```
容器启动完成之后访问4000端口即可看到`gitbook`页面

注：可自行修改端口，建议使用nginx反代到80端口

## 配置webhook
在git仓库中设置`webhook` , 当`commit`事件发生时，触发`url`为`gitbook`服务器的`4001`端口

触发之后，gitbook将会自动`git pull`然后更新内容

## nginx反代
nginx反代配置
```
server { 
    server_name example.com;
    access_log /var/log/nginx/example_access.log;
    error_log /var/log/nginx/example_error.log;

    location / {
        proxy_pass http://localhost:4000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

## todo
- [x] 配置webhook触发更新gitbook,
- [x] 使用nginx反向代理`gitbook`到`80`端口

## refer:
- https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md



Les1ie
2018-3-6 15:30:22
