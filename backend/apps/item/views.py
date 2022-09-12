from sre_parse import CATEGORIES
from telnetlib import STATUS
from unicodedata import name
from warnings import filters
from django.shortcuts import render
from rest_framework import generics, filters
from .serializers import ItemSerializer
from .models import Item
from django_filters.rest_framework import DjangoFilterBackend


class ItemList(generics.ListAPIView):
    queryset = Item.objects.filter(status='active')
    serializer_class = ItemSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['category']
    search_fields = ['name']
