from django.db import models

class Image(models.Model):
    image_url = models.URLField(max_length=255)
    task_name = models.CharField(max_length=100)

    def __str__(self):
        return self.task_name

class Annotation(models.Model):
    image = models.ForeignKey(Image, on_delete=models.CASCADE, related_name='annotations')
    annotation_data = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Annotation for {self.image.task_name} at {self.created_at}"
