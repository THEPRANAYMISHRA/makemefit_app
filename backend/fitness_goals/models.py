from django.db import models

class FitnessGoal(models.Model):
    GOAL_TYPE_CHOICES = [
        ('Weight Loss', 'Weight Loss'),
        ('Muscle Gain', 'Muscle Gain'),
        ('Endurance', 'Endurance'),
        # Add other goal options as needed
    ]

    goal_type = models.CharField(max_length=100, choices=GOAL_TYPE_CHOICES)
    target = models.TextField()
    timeline = models.TextField()

    def __str__(self):
        return self.goal_type
