let express = require('express');
const app = express();
app.use(express.static('assets'));
app.listen(80, function () {
    console.log('服务器成功启动，端口:80');
});