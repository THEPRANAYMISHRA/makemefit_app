from rest_framework import generics
from .models import ProgressTracking
from .serializers import ProgressTrackingSerializer

class ProgressTrackingListCreateView(generics.ListCreateAPIView):
    queryset = ProgressTracking.objects.all()
    serializer_class = ProgressTrackingSerializer

class ProgressTrackingDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = ProgressTracking.objects.all()
    serializer_class = ProgressTrackingSerializer
