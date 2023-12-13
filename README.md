# ad-software
高软作业
## 环境依赖
```
conda env create -f environment.yml

conda activate django
```

## 服务器运行(参考)
使用虚拟环境
```
conda activate django
```
在当前目录`/AdvancedSoftware`下，输入以下命令，启动服务器：
```
python3 manage.py runserver 0.0.0.0:8000
```
在本地浏览器中访问以下网址:
```
http://localhost:8000/index
```