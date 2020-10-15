
#!/bin/sh

set -e

echo 当前目录是：$(pwd)

sleep 3

time=$(date "+%Y-%m-%d %H:%M:%S")


echo ${time} $(pwd) 拉取代码 >> ./push.log
