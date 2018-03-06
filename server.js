
// 环境变量中获取远程仓库的地址 BOOK_URL
var http = require('http');
var exec = require('child_process').exec;
var cmd = 'dir';

var book_url = process.env.BOOK_URL;

console.log(book_url);

http.createServer(function (req, res) {
    res.write('success');
    res.end();

    var cmd = 'git pull';
    exec(cmd, function (error, stdout, stderr) {
        console.log("ok");
        console.log(stdout);

    });
}).listen(8080);

