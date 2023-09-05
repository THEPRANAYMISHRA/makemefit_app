from django.shortcuts import render
from rest_framework import generics
from .models import UserProfile
from .serializers import UserProfileSerializer

class UserProfileListCreateView(generics.ListCreateAPIView):
    serializer_class = UserProfileSerializer

    def get_queryset(self):
        search_email = self.request.GET.get('email', '')  # Get the 'email' query parameter from the request
        queryset = UserProfile.objects.filter(email=search_email)  # Filter profiles by email
        return queryset


class UserProfileDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer

