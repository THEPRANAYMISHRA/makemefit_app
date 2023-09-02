from django.urls import path
from .views import UserProfileListCreateView, UserProfileDetailView

urlpatterns = [
    path('profiles/', UserProfileListCreateView.as_view(), name='profile-list'),
    path('profiles/<int:pk>/', UserProfileDetailView.as_view(), name='profile-detail'),
]
