from django.urls import path
from . import views

url patterns = [
  path('add_item/', views.add_item, name='add_item'),
  path('update_inventory/', views.update_inventory, name='update_inventory'),
]
