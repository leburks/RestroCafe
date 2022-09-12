from config.constants import *
from django.db import models
from cloudinary.models import CloudinaryField


class Item(models.Model):
    class Meta(object):
        db_table = 'item'

    status = models.TextField(
        'status', blank=False, default='draft', db_index=True, choices=STATUS
    )
    category = models.TextField(
        'category', blank=False, null=False, default='others', max_length=20, db_index=True, choices=CATEGORIES,
    )
    name = models.TextField(
        'Name', blank=False, null=False, max_length=120, db_index=True,
    )
    price = models.DecimalField(
        'Price', blank=False, null=False, max_digits=10, decimal_places=2,
    )
    image = CloudinaryField(
        'image', blank=True, null=True
    )
