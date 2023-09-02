from django.urls import path
from .views import UserNutritionLogListCreateView, UserNutritionLogDetailView

urlpatterns = [
    path('user-nutrition-logs/', UserNutritionLogListCreateView.as_view(), name='user-nutrition-log-list'),
    path('user-nutrition-logs/<int:pk>/', UserNutritionLogDetailView.as_view(), name='user-nutrition-log-detail'),
]
