# annotations/urls.py

from django.urls import path
from . import views

from django.contrib import admin  # Import the admin module

from django.contrib.auth import views as auth_views

urlpatterns = [
    path('', views.index, name='index'),
    path('annotate/<int:image_id>/', views.annotate, name='annotate'),
    path('view_annotations/<int:image_id>/', views.view_annotations, name='view_annotations'),
    path('delete_image/<int:image_id>/', views.delete_image, name='delete_image'),
    path('admin/', admin.site.urls),
    path('logout/', auth_views.LogoutView.as_view(next_page='/'), name='logout'),  # Logout URL
]
