from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include("MainGPT.urls")),
    path('account/',include("MyAccount.urls")),
    path('accounts/', include("django.contrib.auth.urls")),
    path('news/', include("news.urls")),
]
