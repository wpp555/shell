
#!/bin/sh

set -e

echo 当前目录是：$(pwd)

sleep 3

curtime = `date "+%F"`

echo $curtime $(pwd) 拉取代码 >> ./shell/push.log
