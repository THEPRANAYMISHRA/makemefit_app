from django.db import models

class TrainerProfile(models.Model):
    GENDER_CHOICES = [
        ('Male', 'Male'),
        ('Female', 'Female'),
        ('Other', 'Other'),
    ]

    name = models.CharField(max_length=100)
    gender = models.CharField(max_length=10, choices=GENDER_CHOICES)
    specialization = models.CharField(max_length=100)
    experience = models.PositiveIntegerField()
    email = models.EmailField()
    contact_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name

