from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.Gpt),
    path('test', views.TestNewDisgine)
]
