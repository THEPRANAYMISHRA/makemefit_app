from rest_framework import serializers
from .models import ProgressTracking

class ProgressTrackingSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProgressTracking
        fields = '__all__'
