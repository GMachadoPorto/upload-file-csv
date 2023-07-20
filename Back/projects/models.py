from django.db import models


class Project(models.Model):
    class Meta:
        ordering = ["nome"]

    nome = models.CharField(max_length=120)
    vul_critica = models.CharField(max_length=2)
    vul_alta = models.CharField(max_length=2)
    vul_media = models.CharField(max_length=2)
    vul_baixa = models.CharField(max_length=2)
    scan_date = models.CharField(max_length=11)
