
#!/bin/sh

# 错误抛出
set -e

echo 接收到pull请求

sleep 2


# 日志目录
pwd1=$(pwd)

# 当前时间
time1=$(date "+%Y-%m-%d %H:%M:%S")
echo ${time1} pull_github_shell_main start >> ${pwd1}/push.log



# 拉取
git pull origin main

echo 拉取代码完成



# 当前时间
time2=$(date "+%Y-%m-%d %H:%M:%S")

# 记录 拉取时间 拉取代码详细信息
echo ${time2} $(pwd) pull_success >> ${pwd1}/push.log

sleep 6

# 重启
pm2 restart shell_8822


