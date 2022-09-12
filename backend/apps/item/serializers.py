from django.urls import reverse_lazy
from .models import Item
from rest_framework import serializers
from apps.review.models import Review


class ItemSerializer(serializers.ModelSerializer):

    image = serializers.ImageField(allow_null=True)
    total_like_count = serializers.SerializerMethodField()

    class Meta:
        model = Item
        fields = '__all__'

    def get_total_like_count(self, obj):
        reviews = Review.objects.filter(item_id=obj.id)
        total_like_count = 0
        for x in reviews:
            total_like_count += x.like_count
        return total_like_count
