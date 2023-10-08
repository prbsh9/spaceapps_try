from rest_framework.generics import ListAPIView
from .models import WaterData
from .serializers import WaterDataSerializer


class WaterDataListView(ListAPIView):
    queryset = WaterData.objects.all()
    serializer_class = WaterDataSerializer
