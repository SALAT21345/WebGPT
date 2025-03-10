from django.urls import path, include
from . import views
urlpatterns = [
    path('',views.index),
    path('news',views.news),
    path('gpt',views.Gpt)
]
