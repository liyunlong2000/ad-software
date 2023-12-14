from django.shortcuts import render
from django.http import JsonResponse
import random

def index(request):
    return render(request, "index.html")

def fanPortrait(request):
    return render(request, "fanPortrait.html")

def genderDistributionChart(request):
    labels = ['男性','女性','中性']
    data = [80,0,20]
    return JsonResponse(data={'labels':labels,'data':data})

def ageDistributionChart(request):
    labels = [
      '18-24(49.71%)',
      '0-17(24.56%)',
      '25-30(16.57%)',
      '30以上(9.78%)'
    ]
    data = [49.1, 24.56, 16.57,9.78]
    return JsonResponse(data={'labels':labels,'data':data})

def equipmentDistributionChart(request):
    data=[28, 28.06, 16.05, 9.57, 7.75, 9.79]
    labels=["apple(28.76%)", "huawei(28.06%)", "xiaomi(16.05%)", "vivo(9.57%)", "oppo(7.75%)", "其它(9.79%)"]
    return JsonResponse(data={'labels':labels,'data':data})

def randomData():
    return round(random.random() * 500) 

def geographicalDistributionChart(request):
    dataMap =[
    {'name': '北京','value': '100' },{'name': '天津','value': randomData() },
    {'name': '上海','value': randomData() },{'name': '重庆','value': randomData() },
    {'name': '河北','value': randomData() },{'name': '河南','value': randomData() },
    {'name': '云南','value': randomData() },{'name': '辽宁','value': randomData() },
    {'name': '黑龙江','value': randomData() },{'name': '湖南','value': randomData() },
    {'name': '安徽','value': randomData() },{'name': '山东','value': randomData() },
    {'name': '新疆','value': randomData() },{'name': '江苏','value': randomData() },
    {'name': '浙江','value': randomData() },{'name': '江西','value': randomData() },
    {'name': '湖北','value': randomData() },{'name': '广西','value': randomData() },
    {'name': '甘肃','value': randomData() },{'name': '山西','value': randomData() },
    {'name': '内蒙古','value': randomData() },{'name': '陕西','value': randomData() },
    {'name': '吉林','value': randomData() },{'name': '福建','value': randomData() },
    {'name': '贵州','value': randomData() },{'name': '广东','value': randomData() },
    {'name': '青海','value': randomData() },{'name': '西藏','value': randomData() },
    {'name': '四川','value': randomData() },{'name': '宁夏','value': randomData() },
    {'name': '海南','value': randomData() },{'name': '台湾','value': randomData() },
    {'name': '香港','value': randomData() },{'name': '澳门','value': randomData() },
    {'name': '南海诸岛','value': randomData() }]
    return JsonResponse(data={'dataMap':dataMap})
