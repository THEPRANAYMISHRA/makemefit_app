from django.urls import path
from .views import WorkoutPlanListCreateView, WorkoutPlanDetailView

urlpatterns = [
    path('workout-plans/', WorkoutPlanListCreateView.as_view(), name='workout-plan-list'),
    path('workout-plans/<int:pk>/', WorkoutPlanDetailView.as_view(), name='workout-plan-detail'),
]
