from rest_framework import serializers
from .models import UserWorkoutLog

class UserWorkoutLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserWorkoutLog
        fields = '__all__'
