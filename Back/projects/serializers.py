from rest_framework import serializers
from .models import Project


class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = [
            "id",
            "nome",
            "vul_critica",
            "vul_alta",
            "vul_media",
            "vul_baixa",
            "scan_date",
        ]
        read_only_fields = [
            "id",
        ]
