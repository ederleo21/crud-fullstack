from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ModalidadViewSet, CarreraViewSet

router = DefaultRouter()
router.register(r'modalidad', ModalidadViewSet)
router.register(r'carrera', CarreraViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
