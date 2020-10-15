
#!/bin/sh

set -e

echo 接收到pull请求


# 放日志目录
pwd1=$(pwd)

# 当前时间
time=$(date "+%Y-%m-%d %H:%M:%S")



git pull origin main

echo 拉取代码完成


echo ${time} $(pwd) pull_github_main_shell >> ${pwd1}/push.log

pm2 restart shell_8822
