from django.contrib.auth.models import AbstractUser
from django.db import models



class CustomUser(AbstractUser):
    tokens = models.IntegerField(default=0)