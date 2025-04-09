from django.db import models
from django.contrib.auth.models import User

#Stores the name of items for our database as well as the quantity
class Item(models.Model):
    name = models.CharField(max_length=100)
    quantity = models.PositiveIntegerField()

#A foreign key that links each inventory record to a specific item
class Inventory(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
