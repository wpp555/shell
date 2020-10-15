var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get(`/log`, function (req, res) {
  res.send({
    code: 404,
    data: "暂未开发日志功能",
    msg: "提示"
  });
});

// post请求
router.post(`/sh/:id`, function (req, res) {
  const { id } = req.params;
  /**
   * branch 必填分支
   * shell  选填脚本
   * */ 
  let allObj = {
    "test": {branch:'main',shell:'restart'},
  }
  let ref = JSON.parse(req.body.payload).ref
  let refArr = ref.split('/')

  if(allObj[id]){
    if(refArr[refArr.length-1] === allObj[id].branch){
      res.send({
        code: 200,
        data: "正在更新中，详细日志请访问 http://sh.wpp47.top/log",
        msg: "提示",
      });
    }else{
      res.send({
        code: 603,
        data: "仅收到"+allObj[id].branch+"分支的提示才会下一步",
        msg: "提示",
      });
      return;
    }
  }else{
    res.send({
      code: 404,
      data: "没有 "+id+" 的链接",
      msg: "提示",
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
