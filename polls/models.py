from django.db import models
from django.contrib.postgres.fields import ArrayField
from talks.models import Talk


class Poll(models.Model):
    question = models.CharField(max_length=300)
    option_a = models.CharField(max_length=300)
    option_b = models.CharField(max_length=300)
    option_c = models.CharField(max_length=300)
    option_d = models.CharField(max_length=300)

    talk = models.ForeignKey(
        'talks.Talk',
        related_name='polls',
        on_delete=models.CASCADE
    )