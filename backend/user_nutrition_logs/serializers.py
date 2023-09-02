from rest_framework import serializers
from .models import UserNutritionLog

class UserNutritionLogSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserNutritionLog
        fields = '__all__'
