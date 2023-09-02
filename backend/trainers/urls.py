from django.urls import path
from .views import TrainerProfileListCreateView, TrainerProfileDetailView

urlpatterns = [
    path('trainers/', TrainerProfileListCreateView.as_view(), name='trainer-list'),
    path('trainers/<int:pk>/', TrainerProfileDetailView.as_view(), name='trainer-detail'),
]
