import uuid
from django.db.models import Model
from django.db import models

class Post(Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=50)
    content = models.TextField()
    create_time = models.DateTimeField(auto_now_add=True)
    modify_time = models.DateTimeField(auto_now=True)
    create_by = models.CharField(max_length=50)
