from rest_framework import serializers
from .models import Modalidad, Carrera
from rest_framework import serializers

class BaseNombreSerializer(serializers.ModelSerializer):
    def validate_nombre(self, value):
        value = value.strip()

        if not value:
            raise serializers.ValidationError("El nombre no puede estar vacío.")

        model = self.Meta.model
        qs = model.objects.filter(nombre__iexact=value)
        if self.instance:
            qs = qs.exclude(pk=self.instance.pk)

        if qs.exists():
            raise serializers.ValidationError(f"Ya existe un {model.__name__.lower()} con este nombre.")

        return value


class ModalidadSerializer(BaseNombreSerializer):
    class Meta:
        model = Modalidad
        fields = '__all__'


class CarreraSerializer(BaseNombreSerializer):
    modalidad_id = serializers.PrimaryKeyRelatedField(queryset=Modalidad.objects.all(), source='modalidad', write_only=True)
    modalidad = ModalidadSerializer(read_only=True)

    class Meta:
        model = Carrera
        fields = ['id', 'nombre', 'estado', 'modalidad_id', 'modalidad']