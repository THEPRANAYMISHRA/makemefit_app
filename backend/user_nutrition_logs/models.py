from django.db import models
from nutrition_plans.models import NutritionPlan

class UserNutritionLog(models.Model):
    date = models.DateField()
    nutrition_plan = models.ForeignKey(NutritionPlan, on_delete=models.CASCADE)
    meals = models.TextField()
    caloric_intake = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.date} - {self.nutrition_plan.plan_name}"

