from django.db import models
from workout_plans.models import WorkoutPlan

class UserWorkoutLog(models.Model):
    date = models.DateField()
    workout_plan = models.ForeignKey(WorkoutPlan, on_delete=models.CASCADE)
    exercises = models.TextField()
    duration_minutes = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.date} - {self.workout_plan.plan_name}"

