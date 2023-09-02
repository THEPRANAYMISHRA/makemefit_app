from django.urls import path
from .views import ProgressTrackingListCreateView, ProgressTrackingDetailView

urlpatterns = [
    path('progress-tracking/', ProgressTrackingListCreateView.as_view(), name='progress-tracking-list'),
    path('progress-tracking/<int:pk>/', ProgressTrackingDetailView.as_view(), name='progress-tracking-detail'),
]
