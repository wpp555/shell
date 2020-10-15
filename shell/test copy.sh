
#!/bin/sh

set -e

echo 接收到pull请求


# 放日志目录
pwd1=$(pwd)

# 拉取
git pull origin main

echo 拉取代码完成

# 记录拉取代码详细信息
echo $(pwd) pull_github_main_shell >> ${pwd1}/push.log

