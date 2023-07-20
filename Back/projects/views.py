from django.shortcuts import render, get_list_or_404
from rest_framework import generics
from rest_framework.response import Response
from .models import Project
from .serializers import ProjectSerializer


class ProjectView(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    def get(self, request, *args, **kwargs):
        projects_names = []

        for item in self.queryset.all():
            if item.nome not in projects_names:
                projects_names.append(item.nome)

        return Response(projects_names)


class ProjectDetailView(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

    lookup_url_kwarg = "project_name"

    def get_queryset(self):
        projects = get_list_or_404(Project, nome=self.kwargs.get("project_name"))
        for item in projects:
            item.__dict__

        def order_projects_by_date(teste):
            return teste.__dict__["scan_date"]

        project_return = sorted(projects, key=order_projects_by_date, reverse=True)

        return project_return
