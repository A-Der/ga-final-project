# Generated by Django 3.0.7 on 2020-06-18 16:24

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('categories', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Talk',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=40, unique=True)),
                ('date_time', models.DateTimeField()),
                ('location', models.CharField(max_length=300)),
                ('about', models.CharField(max_length=1000)),
                ('price', models.DecimalField(decimal_places=2, max_digits=6)),
                ('categories', models.ManyToManyField(blank=True, related_name='talks', to='categories.Category')),
                ('host', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='hosted_talks', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
