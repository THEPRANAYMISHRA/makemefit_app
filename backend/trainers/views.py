from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import TrainerProfile
from .serializers import TrainerProfileSerializer

class TrainerProfileListCreateView(generics.ListCreateAPIView):
    queryset = TrainerProfile.objects.all()
    serializer_class = TrainerProfileSerializer

class TrainerProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = TrainerProfile.objects.all()
    serializer_class = TrainerProfileSerializer

