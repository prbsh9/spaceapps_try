from django.contrib import admin
from django.urls import path
from api.views import WaterDataListView


urlpatterns = [

    path('admin/', admin.site.urls),
    path('api/waterdata/', WaterDataListView.as_view(), name='waterdata-list')
]
