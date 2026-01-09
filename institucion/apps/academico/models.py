from django.db import models

class Modalidad(models.Model):
    nombre = models.CharField(max_length=100, verbose_name="Nombre de modalidad")
    estado = models.BooleanField(default=True, verbose_name="Estado activo")

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "Modalidad"
        verbose_name_plural = "Modalidades"


class Carrera(models.Model):
    nombre = models.CharField(max_length=150, verbose_name="Nombre de carrera")
    modalidad = models.ForeignKey(Modalidad, on_delete=models.CASCADE, related_name='carreras')
    estado = models.BooleanField(default=True, verbose_name="Estado activo")

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "Carrera"
        verbose_name_plural = "Carreras"