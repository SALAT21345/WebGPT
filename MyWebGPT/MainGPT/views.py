
from django.shortcuts import render
from django.http import HttpResponse
import g4f
from g4f.client import Client

client = Client()


def index(request):
    return render(request, 'MainGPT/Gpt.html')

def Gpt(request):
    return render(request, 'MainGPT/Gpt.html')

def news(request):
    return render(request, 'MainGPT/News.html')
