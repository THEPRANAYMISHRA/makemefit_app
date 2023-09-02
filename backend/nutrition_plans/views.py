from rest_framework import generics
from .models import NutritionPlan
from .serializers import NutritionPlanSerializer

class NutritionPlanListCreateView(generics.ListCreateAPIView):
    queryset = NutritionPlan.objects.all()
    serializer_class = NutritionPlanSerializer

class NutritionPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = NutritionPlan.objects.all()
    serializer_class = NutritionPlanSerializer
