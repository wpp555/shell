
#!/bin/sh

set -e

sleep 1

# 放日志目录
pwd1=$(pwd)

# 当前时间
time=$(date "+%Y-%m-%d %H:%M:%S")

# 记录拉取时间
echo 记录拉取时间 ${time} >> ${pwd1}/push.log

# 重启
pm2 restart shell_8822
