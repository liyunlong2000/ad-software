from django.shortcuts import render
from django.http import JsonResponse
import random
from ._utils import *

current_id=None

def index(request):
    return render(request, "index.html")

def search(request):
    id=request.GET.get("user_id")
    current_id=id
    # print("get id from frontend:",id)
    # print("current_id:",current_id)
    return JsonResponse(data={})

def fanPortrait(request):
    return render(request, "fanPortrait.html")


def genderDistributionChart(request):
    # labels = ['男性','女性','保密']
    # data=[]
    # user_id = request.GET.get('user_id')
    # print("gender id:",user_id)
    # if user_id=="":
    #     data = [80,0,20]
    # else:
    #     data = [40,40,20]
    # print(data)
    user_id = request.GET.get('user_id')
    gender_data=get_gender_info(user_id)
    if gender_data :
        gender_keys = list(gender_data.keys())
        gender_values = list(gender_data.values())
    else:
        gender_keys = ['男性','女性','保密']
        gender_values = [40,40,20]
    return JsonResponse(data={'labels':gender_keys,'data':gender_values})

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

def loveWordCloud(request):
    user_id = request.GET.get('user_id')
    love_data=get_love_info(user_id)
    # print(love_data)
    return JsonResponse(data={'lovedata':love_data})

def gameWordCloud(request):
    user_id = request.GET.get('user_id')
    game_data=get_game_info(user_id)
    # print("game:")
    # print(game_data)
    return JsonResponse(data={'gamedata':game_data})

def typeWordCloud(request):
    user_id = request.GET.get('user_id')
    type_data=get_type_info(user_id)
    # print(type_data)
    return JsonResponse(data={'typedata':type_data})

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

def updateUserInfo(request):
    user_id = request.GET.get('user_id')
    # print("user id is:",user_id)
    data={}    
    data=get_user_info()
    if user_id in data:
        item=data[user_id][-1]
        # print(item)
        data['user_id']=item["uid"]
        data['user_name']=item["name"]
        data['user_sex']=item["sex"]
        data['user_birthday']=item["birthday"]
        data['user_brief']=item["sign"]
        data['user_label']='暂无'
        data['user_level']=item["level"]
        data['user_fans']=item["fans"]
        data['user_follows']=item["follows"]
        data['user_view']=item["view"]
        data['user_likes']=item["likes"]        
    return JsonResponse(data=data)

def workAnalysis(request):
    return render(request, "workAnalysis.html")