from rest_framework import serializers

from .models import WaterData


class WaterDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterData
        fields = '__all__'

