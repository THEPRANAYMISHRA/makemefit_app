from django.urls import path
from .views import NutritionPlanListCreateView, NutritionPlanDetailView

urlpatterns = [
    path('nutrition-plans/', NutritionPlanListCreateView.as_view(), name='nutrition-plan-list'),
    path('nutrition-plans/<int:pk>/', NutritionPlanDetailView.as_view(), name='nutrition-plan-detail'),
]
