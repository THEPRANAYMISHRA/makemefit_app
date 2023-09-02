from rest_framework import generics
from .models import UserNutritionLog
from .serializers import UserNutritionLogSerializer

class UserNutritionLogListCreateView(generics.ListCreateAPIView):
    queryset = UserNutritionLog.objects.all()
    serializer_class = UserNutritionLogSerializer

class UserNutritionLogDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserNutritionLog.objects.all()
    serializer_class = UserNutritionLogSerializer

