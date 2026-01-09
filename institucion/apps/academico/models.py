from django.db import models

class Modalidad(models.Model):
    nombre = models.CharField(max_length=100, unique=True)
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "Modalidad"
        verbose_name_plural = "Modalidades"


class Carrera(models.Model):
    nombre = models.CharField(max_length=150, unique=True)
    modalidad = models.ForeignKey(Modalidad, on_delete=models.CASCADE, related_name='carreras')
    estado = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

    class Meta:
        verbose_name = "Carrera"
        verbose_name_plural = "Carreras"