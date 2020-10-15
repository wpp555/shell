
#!/bin/sh

set -e

echo 当前目录是：$(pwd)


# 放日志目录
pwd1=$(pwd)

# 当前时间
time=$(date "+%Y-%m-%d %H:%M:%S")


git pull origin main

echo ${time} $(pwd) pull_github_shell >> ${pwd1}/push.log
