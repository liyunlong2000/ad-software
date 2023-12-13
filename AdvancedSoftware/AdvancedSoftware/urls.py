from django.urls import path
from django.conf import settings
from django.conf.urls. static import static
from . import views

urlpatterns = [
    path('index', views.index),
    path('fanPortrait', views.fanPortrait),
]