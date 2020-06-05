# Generated by Django 3.0.7 on 2020-06-05 18:03

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('talks', '0002_talk_price'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Image',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.CharField(max_length=200)),
                ('talk', models.ManyToManyField(blank=True, related_name='images', to='talks.Talk')),
                ('user', models.ManyToManyField(blank=True, related_name='images', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
