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
        globals()[fun_name]()
    else:
        print('no func')

def a():
    print('a')

def b():
    print('b')

main('a')
```

## Python任务队列
> celery