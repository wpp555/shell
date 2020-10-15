
#!/bin/sh

set -e

sleep 10


# 放日志目录
pwd1=$(pwd)
time=$(date "+%Y-%m-%d %H:%M:%S")


# 记录拉取代码详细信息
echo ${time} >> ${pwd1}/push.log