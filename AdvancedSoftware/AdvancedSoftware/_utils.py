import json
from collections import Counter
import jieba
import numpy as np
from PIL import Image
from wordcloud import WordCloud
import matplotlib.pyplot as plt

    
# 返回一个用户列表[[user],[user]]，其中user表示同一用户在多个时间段的信息
def get_user_info():
    with open('./data/ase_assignment.bili_userinfo.json', 'r') as f:
        data = json.load(f)
        # for item in data:
        #     print("uid:", item["uid"])
        #     print("name:", item["name"])
        #     print("sex:", item["sex"])
        #     print("birthday:", item["birthday"])
        #     print("sign:", item["sign"])
        #     print("level:", item["level"])
        #     print("fans:", item["fans"])
        #     print("follows:", item["follows"])
        #     print("view:", item["view"])
        #     print("likes:", item["likes"])
        #     print("time:", item["time"])
        #     print()''
            
        result = {}
        for item in data:
            uid = item['uid']
            if uid not in result:
                result[uid] = []
            result[uid].append(item)
        return result
    
def get_gender_info(uid):
    data = get_fans_info(uid)
    sex_counter = Counter(item['sex'] for item in data)
    # print(dict(sex_counter))
    return sex_counter

def get_love_info(uid):
    data = get_fans_info(uid)
    # print(data[1])
    name_like_videos = {}
    # stopwords = set([',', '。', '?', '!', '的', '我', '你', '他', '她'])
    for item in data:
        like_videos = item['likeVideos']
        # 使用 jieba 分词，将字符串类型的视频类别划分为词语
        seg_list = jieba.cut(','.join(like_videos))
        # 构建字典，保存词语及其出现次数
        for word in seg_list:
            if word not in name_like_videos:
                name_like_videos[word] = 1
            else:
                name_like_videos[word] += 1
    name_like_videos[","]=0
    name_like_videos["."]=0
    name_like_videos["·"]=0
    # print(name_like_videos)
    result = [{'name': key, 'value': 2*value} for key, value in name_like_videos.items()]
    return result

def get_game_info(uid):
    data = get_fans_info(uid)
    # print(data[1])
    name_game = {}
    # stopwords = set([',', '。', '?', '!', '的', '我', '你', '他', '她'])
    for item in data:
        like_videos = item['playedGames']
        # 使用 jieba 分词，将字符串类型的视频类别划分为词语
        # seg_list = jieba.cut(','.join(like_videos))
        # 构建字典，保存词语及其出现次数
        for word in like_videos:
            if word not in name_game:
                name_game[word] = 1
            else:
                name_game[word] += 1
    name_game[","]=0
    name_game["."]=0
    name_game["·"]=0
    # print(name_like_videos)
    result = [{'name': key, 'value': value} for key, value in name_game.items()]
    # print(result)
    return result

def get_type_info(uid):
    data = get_fans_info(uid)
    # print(data[1])
    name_game_type = {}
    # stopwords = set([',', '。', '?', '!', '的', '我', '你', '他', '她'])
    for item in data:
        like_videos = item['gameTypes']
        # 使用 jieba 分词，将字符串类型的视频类别划分为词语
        seg_list = jieba.cut(','.join(like_videos))
        # 构建字典，保存词语及其出现次数
        for word in seg_list:
            if word not in name_game_type:
                name_game_type[word] = 1
            else:
                name_game_type[word] += 1
    name_game_type[","]=0
    name_game_type["."]=0
    name_game_type["·"]=0
    # print(name_like_videos)
    result = [{'name': key, 'value': 2*value} for key, value in name_game_type.items()]
    return result
    
def get_fans_info(uid):
    result = []
    with open('./data/ase_assignment.bili_fansinfo.json', 'r') as f:
        data = json.load(f)
        # 遍历数据
        for item in data:
            if isinstance(item['belong'], dict):
                item['belong'] = item['belong']['$numberLong']
        # 判断belong是否等于uid，相等则添加到结果列表中
            if str(item['belong']) == str(uid):
                result.append(item)
        # print(result)
        return result
    
if __name__ == '__main__':
    # get_user_info()
    # get_gender_info(1665798336)
    get_love_info(1665798336)