pip install django
django-admin startproject inventory_management
cd inventory_management
python manage.py startapp inventory


DATABASES = {
    'default': {
        'ENGINE':
        'NAME':
        'USER':
        'PASSWORD':
        'HOST':
        'PORT':
    }
}

from django.db import models
from django.contrib.auth.models import User

class Item(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()

class Inventory(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)

from django.shortcuts import render, redirect
from .models import Item, Inventory
from django.contrib.auth.decorators import login_required, user_passes_test

@login_required
def add_item(request):
    if request.user.is_staff:
        pass

@login_required
def update_inventory(request):
    if request.user.groups.filter(name='Managers').exists():
        pass


from django.urls import path
from . import views

urlpatterns = [
    path('add_item/', views.add_item, name='add_item'),
    path('update_inventory/', views.update_inventory, name='update_inventory'),
]


