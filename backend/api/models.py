from django.db import models


class WaterData(models.Model):
    year = models.CharField(max_length=4)
    temperature = models.FloatField()
    precipitation = models.FloatField()
    freshwater_availability = models.FloatField()

    def __str__(self):
        return f"Water Data for Year {self.year}"


