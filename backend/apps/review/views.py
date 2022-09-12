from rest_framework import generics
from .serializers import ReviewSerializer
from .models import Review
from django_filters.rest_framework import DjangoFilterBackend

class ReviewList(generics.ListAPIView):
    queryset = Review.objects.order_by('-created_at').all()
    serializer_class = ReviewSerializer
    filter_backends = [DjangoFilterBackend]
    filterset_fields = ['item_id']

class ReviewAdd(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
