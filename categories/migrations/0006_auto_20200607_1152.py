# Generated by Django 3.0.7 on 2020-06-07 11:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0005_auto_20200607_1127'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='category',
            name='talk',
        ),
        migrations.RemoveField(
            model_name='category',
            name='user',
        ),
    ]
