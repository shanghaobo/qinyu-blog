# Linux笔记

## Linux添加用户
```bash
adduser tommy  #添加一个名为tommy的用户
passwd tommy   #修改密码
```

## Linux重启Django项目脚本
```bash
#!/bin/sh
NAME="uwsgi"
if [ ! -n "$NAME" ];then
    echo "no arguments"
    exit;
fi

echo $NAME
ID=`ps -ef | grep "$NAME" |grep $USER | grep -v "$0" | grep -v "grep" | awk '{print $2}'`
echo $ID
echo "################################################"
for id in $ID
do
kill -9 $id
echo "kill $id"
done
echo  "################################################"
pathbin=/usr/local/bin
echo ${pathbin}
nohup ${pathbin}/uwsgi --ini admin.ini & > nohup.out
echo "项目已重启"

```

## CentOS防火墙操作
::: tip
- active(running)为防火墙开启
- inactive(dead)为防火墙关闭
:::
```bash
# 查看防火墙状态
systemctl status firewalld

# 关闭防火墙
systemctl stop firewalld

# 打开防火墙
systemctl start firewalld
```

## CentOS搜索文件
::: tip
find [搜索范围] [搜索条件]
:::
```bash
find / -name install.log
```

## Mysql用户访问权限设置
::: warning
注意：赋予权限的时候不指定来自哪个远程服务器，只需用 % 替代远程主机地址即可。
:::
- 查看数据库中的所有用户
```sql
SELECT DISTINCT CONCAT('User: ''',user,'''@''',host,''';') AS query FROM mysql.user;
```
- 查看数据库中具体某个用户的权限
```sql
show grants for 'root'@'localhost';
```
- 取消来自远程服务器的 AA 用户所有数据库的所有的表的权限
```sql
revoke all privileges on *.* from AA@"%";
```
- 取消来自远程服务器的 AA 用户对数据库 db 里的表 tb 的所有权限
```sql
revoke all on db.tb from AA@"%";
```
- 取消来自远程服务器的 AA 用户对数据库 db 的所有表的所有权限
```sql
revoke all on db.* from AA@"%";
```
- 为来自 11.1.1.1 的用户 AA 分配可对数据库 db 的表 tb 进行 select，insert，update，delete，create，drop 的权限，并设密码为 123456
```sql
grant select,insert,update,delete,create,drop on db1.tb1 to AA@11.1.1.1 identified by '123456';
```
- 为来自 11.1.1.1 的 AA 用户分配可对数据库 db 所有表进行所有操作的权限，密码 123456
```sql
grant all privileges on db1.* to AA@11.1.1.1 identified by '123456';
```
- 为来自 11.1.1.1 的 AA 用户分配可对所有数据库的所有表进行所有操作的权限，密码 123456
```sql
grant all privileges on *.* to AA@11.1.1.1 identified by '123456';
```
- 禁止root远程访问
```sql
mysql -u root -p
use mysql;
select host,user from user;
# 修改root用户的host属性，确保其为localhost，这表示只能本地访问（%表示可以远程访问）；
update user set host = "localhost" where user = "root" and host = "%";
UPDATE user SET Host='%' WHERE User='root' AND Host='localhost' LIMIT 1;
# 刷新
flush privileges;
```

## Mysql设置不区分大小写
```bash
vi /etc/my.cnf
```
```bash
[mysqld]
#加在最后一行
lower_case_table_names=1 
```

## Linux查看磁盘空间占用
```bash
df -h
```