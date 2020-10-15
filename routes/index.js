var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get(`/sh/:id`, function (req, res) {
  const { id } = req.params;
  // branch 必填 
  let allObj = {
    "test": {branch:'main',shell:'restart'},
  }
  if(allObj[id]){
    res.send({
      code: 0,
      data: "正在更新，详细日志访问",
      msg: "收到提示",
    });
  }else{
    res.send({
      code: 404,
      data: "没有 "+id+" 的链接",
      msg: "收到提示",
    });
    return;
  }
  // 子进程
  var exec = require("child_process").exec; //需要执行的命令字符串
  var cli = "sh ./shell/" + id + ".sh"; // 执行命令
  exec(cli, { encoding: "utf8" }, function (err, stdout, stderr) {
    if(err){ // 如果抛出错误

      return
    }
    // 如果没有错误,则执行命令成功

  })
});

// post请求
router.post(`/sh/:id`, function (req, res) {
  const { id } = req.params;
  // branch 必填 
  let allObj = {
    "test": {branch:'main',shell:'restart'},
  }
  console.log(49)
  console.log(req.body.payload)
  console.log(JSON.parse(req.body.payload))
  console.log(req.body.payload.ref)
  if(allObj[id]){
    res.send({
      code: 0,
      data: "正在更新，详细日志访问",
      msg: "收到提示",
    });
  }else{
    res.send({
      code: 404,
      data: "没有 "+id+" 的链接",
      msg: "收到提示",
    });
    return;
  }
  // 子进程
  var exec = require("child_process").exec; //需要执行的命令字符串
  var cli = "sh ./shell/" + id + ".sh"; // 执行命令
  exec(cli, { encoding: "utf8" }, function (err, stdout, stderr) {
    if(err){ // 如果抛出错误

      return
    }
    // 如果没有错误,则执行命令成功

  })
});

module.exports = router;
