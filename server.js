// 环境变量中获取远程仓库的地址 BOOK_URL
var spawn = require('child_process').spawn;
var book_url = process.env.BOOK_URL;

console.log(book_url);

free = spawn('dir');
/*
free.stdout.on('data', function (data) {
    console.log('output'+data)
});

free.on('exit', function (code, signal) {
    console.log('exit' +code)
});
*/
