var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

// api设置
router.get(`/sh/:id`, function (req, res) {
  const { id } = req.params;
  // 子进程
  var exec = require("child_process").exec; //需要执行的命令字符串
  var cli = "sh ./shell/" + id + ".sh"; // 执行命令
  exec(cli, { encoding: "utf8" }, function (err, stdout, stderr) {
    // 如果抛出错误
    if (err) {
      console.log(`err`, err); // 返回结果
      res.send({
        code: -1,
        data: `一些错误`,
        msg: err,
      });
      return;
    } // 如果没有错误,则执行命令成功
    console.log("stdout >>>>>>>>>>>>> " + stdout);
    console.log("stderr >>>>>>>>>>>>> " + stderr); // 返回结果
    res.send({
      code: 0,
      data: `更新成功`,
      msg: `
             ${stdout}
             >>>>>
             ${stderr}
             `,
    });
  });
});

// post请求
router.post(`/sh/:id`, function (req, res) {
  const { id } = req.params;
  // 子进程
  var exec = require("child_process").exec; //需要执行的命令字符串
  var cli = "sh ./shell/" + id + ".sh"; // 执行命令
  exec(cli, { encoding: "utf8" }, function (err, stdout, stderr) {
    // 如果抛出错误
    if (err) {
      console.log(`err`, err); // 返回结果
      res.send({
        code: -1,
        data: `一些错误`,
        msg: err,
      });
      return;
    } // 如果没有错误,则执行命令成功
    console.log("stdout >>>>>>>>>>>>> " + stdout);
    console.log("stderr >>>>>>>>>>>>> " + stderr); // 返回结果
    res.send({
      code: 0,
      data: "更新成功",
      msg: `${stdout}----${stderr}`,
    });
  });
});

module.exports = router;
