from django.urls import path
from .views import ProjectView, ProjectDetailView

urlpatterns = [
    path("projects/", ProjectView.as_view()),
    path("projects/<str:project_name>/", ProjectDetailView.as_view()),
]
