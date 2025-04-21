from django.shortcuts import render
from django.contrib.auth.decorators import login_required
@login_required
def Gpt(request):
    return render(request, 'MainGPT/Gpt.html')

def TestNewDisgine(request):
    return render(request, "MainGPT/TestGpt.html")


