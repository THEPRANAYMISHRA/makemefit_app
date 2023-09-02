from rest_framework import generics
from .models import UserWorkoutLog
from .serializers import UserWorkoutLogSerializer

class UserWorkoutLogListCreateView(generics.ListCreateAPIView):
    queryset = UserWorkoutLog.objects.all()
    serializer_class = UserWorkoutLogSerializer

class UserWorkoutLogDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserWorkoutLog.objects.all()
    serializer_class = UserWorkoutLogSerializer

