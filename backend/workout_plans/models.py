from django.db import models
from trainers.models import TrainerProfile

class WorkoutPlan(models.Model):
    GOAL_CHOICES = [
        ('Weight Loss', 'Weight Loss'),
        ('Muscle Gain', 'Muscle Gain'),
        ('Cardio Fitness', 'Cardio Fitness'),
        # Add other goal options as needed
    ]

    trainer = models.ForeignKey(TrainerProfile, on_delete=models.CASCADE)
    plan_name = models.CharField(max_length=100)
    goal = models.CharField(max_length=100, choices=GOAL_CHOICES)
    duration_weeks = models.PositiveIntegerField()
    description = models.TextField()

    def __str__(self):
        return self.plan_name

