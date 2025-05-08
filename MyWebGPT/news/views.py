from django.shortcuts import render

# Create your views here.
def MainNews(request):
    return render(request, "news/MainNews.html")