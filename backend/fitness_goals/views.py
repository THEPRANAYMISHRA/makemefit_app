from rest_framework import generics
from .models import FitnessGoal
from .serializers import FitnessGoalSerializer

class FitnessGoalListCreateView(generics.ListCreateAPIView):
    queryset = FitnessGoal.objects.all()
    serializer_class = FitnessGoalSerializer

class FitnessGoalDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = FitnessGoal.objects.all()
    serializer_class = FitnessGoalSerializer
