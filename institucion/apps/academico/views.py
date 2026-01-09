from rest_framework.viewsets import ModelViewSet
from .models import Modalidad, Carrera
from .serializers import ModalidadSerializer, CarreraSerializer

class ModalidadViewSet(ModelViewSet):
    queryset = Modalidad.objects.all()
    serializer_class = ModalidadSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        estado = self.request.query_params.get('estado')

        if estado in ("0", "1"):
            qs = qs.filter(estado=estado == "1")

        return qs


class CarreraViewSet(ModelViewSet):
    queryset = Carrera.objects.select_related('modalidad').all()
    serializer_class = CarreraSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        estado = self.request.query_params.get('estado')
        modalidad = self.request.query_params.get('modalidad')

        if estado in ("0", "1"):
            qs = qs.filter(estado=estado == "1")

        if modalidad and modalidad.isdigit():
            qs = qs.filter(modalidad_id=modalidad)

        return qs
