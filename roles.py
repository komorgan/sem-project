from django.shortcuts import render, redirect
from .models import Item, Inventory
from django.contrib.auth.decorators import login_required, user_passes_test

@login_required
def add_item(request):
  if request.user.is_staff: #checking for admin priv
  pass

@login_required
  def update_inventory(request):
    if request.user.groups.filter(name='Managers').exists():
      pass
      
