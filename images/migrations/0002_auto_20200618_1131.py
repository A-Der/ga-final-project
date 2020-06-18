# Generated by Django 3.0.7 on 2020-06-18 11:31

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('talks', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('images', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='userimage',
            name='user',
            field=models.ForeignKey(blank=True, on_delete=django.db.models.deletion.CASCADE, related_name='profile_images', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AddField(
            model_name='talkimage',
            name='talk',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='talk_images', to='talks.Talk'),
        ),
    ]
