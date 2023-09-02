from django.db import models

class ProgressTracking(models.Model):
    date = models.DateField()
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    body_measurements = models.TextField()
    notes = models.TextField()

    def __str__(self):
        return str(self.date)
