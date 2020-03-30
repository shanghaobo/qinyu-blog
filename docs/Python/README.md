# Python笔记

## Python获取程序所在目录
```python
local=os.path.dirname(os.path.realpath(sys.argv[0]))
```

## Python统计函数运行时间装饰器
```python
def run_time(func):
    """
    计算函数运行时间装饰器
    :param func: 
    :return: 
    """
    def wrapper(*args,**kwargs):
        start_time = int(time.time() * 1000)
        result=func(*args,**kwargs)
        end_time = int(time.time() * 1000)
        print('用时%s ms' % (end_time - start_time))
        return result
    return wrapper
```

## Python函数超时控制装饰器
```python
from func_timeout import func_set_timeout, FunctionTimedOut

#装饰器
def time_out(fn, *args, **kwargs):
    """
    超时控制装饰器
    :param args: 
    :param kwargs: 
    :return: 
    """
    def wrapper(*args, **kwargs):
        try:
            result = fn(*args, **kwargs)
            return result
        except FunctionTimedOut as e:
            #超时后处理代码
            print(e)
            return False

    return wrapper

#调用
@time_out
@func_set_timeout(1)
def test():
    print('test')
    time.sleep(3)

```

## Django生成静态资源
```
python manage.py collectstatic
```

## Python带下标循环列表
```python
for i,value in enumerate(['A', 'B', 'C']):
    print(i,value)
```

## Python格式化当前时间
```python
now = time.strftime("%Y-%m-%d %H:%M:%S")
```

## Python动态调用函数
```python
def main(fun_name):
    if globals().get(fun_name):
        return globals()[fun_name]()
    else:
        return 'no func'

def a():
    print('a')

def b():
    print('b')

main('a')
```

## Python函数运行日志记录装饰器
```python
#函数运行日志记录装饰器
def func_log(func):
    def wrapper(*args,**kwargs):
        log = public.logger #获取logger对象
        fun_name=func.__name__
        log.info('----------------------func-%s-begin---------------------------'%fun_name)
        res=func(log,*args,**kwargs)
        log.info('----------------------func-%s-end---------------------------'%fun_name)
        return res
    return wrapper
```

## Python任务队列
> celery

## django部署后样式丢失
1. 在项目的settings.py文件里添加以下内容：

```python
STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static')
]
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
```

2. 执行下面的命令将admin的样式文件拷贝到static文件夹里

```bash
python manage.py collectstatic
```

实际就是往static文件夹里增添了两个文件夹：admin、django_extensions。

3. 将新生成的static文件夹替换掉原先的文件夹。