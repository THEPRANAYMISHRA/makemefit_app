from django.urls import path
from .views import FitnessGoalListCreateView, FitnessGoalDetailView

urlpatterns = [
    path('fitness-goals/', FitnessGoalListCreateView.as_view(), name='fitness-goal-list'),
    path('fitness-goals/<int:pk>/', FitnessGoalDetailView.as_view(), name='fitness-goal-detail'),
]
