from django.db import models
from workout_plans.models import WorkoutPlan

class NutritionPlan(models.Model):
    GOAL_CHOICES = [
        ('Weight Loss', 'Weight Loss'),
        ('Muscle Gain', 'Muscle Gain'),
        ('Balanced Diet', 'Balanced Diet'),
        # Add other goal options as needed
    ]

    plan_name = models.CharField(max_length=100)
    goal = models.CharField(max_length=100, choices=GOAL_CHOICES)
    duration_weeks = models.PositiveIntegerField()
    guidelines = models.TextField()
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)

    def __str__(self):
        return self.plan_name

