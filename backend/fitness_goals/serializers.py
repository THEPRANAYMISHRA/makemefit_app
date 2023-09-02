from rest_framework import serializers
from .models import FitnessGoal

class FitnessGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = FitnessGoal
        fields = '__all__'
