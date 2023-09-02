from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import WorkoutPlan
from .serializers import WorkoutPlanSerializer

class WorkoutPlanListCreateView(generics.ListCreateAPIView):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer

class WorkoutPlanDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = WorkoutPlan.objects.all()
    serializer_class = WorkoutPlanSerializer

