from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from django.shortcuts import redirect
from django.contrib import messages
from .models import Image, Annotation
from django.views.decorators.csrf import csrf_exempt
import logging
import json

def index(request):
    """Home Page: List all annotation tasks (images)."""
    images = Image.objects.all()
    return render(request, 'annotate.html', {'images': images})

def annotate(request, image_id):
    """Annotate a specific image."""
    image = get_object_or_404(Image, id=image_id)
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            annotation_data = data.get('annotation')
            if annotation_data:
                Annotation.objects.create(image=image, annotation_data=annotation_data)
                return JsonResponse({'message': 'Annotation saved!'}, status=201)
            else:
                return JsonResponse({'error': 'No annotation data provided.'}, status=400)
        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON.'}, status=400)
    return render(request, 'annotate.html', {'image': image})




# Configure logging
logger = logging.getLogger(__name__)

def view_annotations(request, image_id):
    """
    View to display all annotations for a specific image.
    """
    image = get_object_or_404(Image, id=image_id)
    annotations = Annotation.objects.filter(image=image)
    
    # Debugging Statements
    logger.debug(f"Image ID: {image_id}, Task Name: {image.task_name}")
    logger.debug(f"Number of Annotations Retrieved: {annotations.count()}")
    for annotation in annotations:
        logger.debug(f"Annotation Data: {annotation.annotation_data}")
    
    return render(request, 'view_annotations.html', {'image': image, 'annotations': annotations})

def delete_image(request, image_id):
    """
    View to delete an image and its associated annotations.
    """
    image = get_object_or_404(Image, id=image_id)
    if request.method == 'POST':
        image.delete()
        messages.success(request, 'Image and its annotations have been successfully deleted.')
        return redirect('index')
    return render(request, 'confirm_delete.html', {'image': image})