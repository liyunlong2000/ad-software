from django.urls import path
from django.conf import settings
from django.conf.urls. static import static
from . import views

# app_name = 'test_app'
urlpatterns = [
    path('index', views.index),
    path('fanPortrait', views.fanPortrait),
    path('genderDistributionChart/',views.genderDistributionChart),
    path('ageDistributionChart/',views.ageDistributionChart),
    path('equipmentDistributionChart/',views.equipmentDistributionChart),
    path('geographicalDistributionChart/',views.geographicalDistributionChart)
]