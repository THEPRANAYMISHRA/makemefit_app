from django.urls import path
from .views import UserWorkoutLogListCreateView, UserWorkoutLogDetailView

urlpatterns = [
    path('user-workout-logs/', UserWorkoutLogListCreateView.as_view(), name='user-workout-log-list'),
    path('user-workout-logs/<int:pk>/', UserWorkoutLogDetailView.as_view(), name='user-workout-log-detail'),
]
