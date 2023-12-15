from django.urls import path
from django.conf import settings
from django.conf.urls. static import static
from . import views
from django.urls import re_path as url

# app_name = 'test_app'
urlpatterns = [
    url(r'index', views.index),
    path('fanPortrait', views.fanPortrait),
    url(r'^genderDistributionChart/$',views.genderDistributionChart),
    # path('genderDistributionChart/',views.genderDistributionChart),
    path('ageDistributionChart/',views.ageDistributionChart),
    path('equipmentDistributionChart/',views.equipmentDistributionChart),
    path('geographicalDistributionChart/',views.geographicalDistributionChart),
    url(r'^search/$',views.search),
    url(r'^updateUserInfo/$',views.updateUserInfo),
    path('workAnalysis', views.workAnalysis),
]