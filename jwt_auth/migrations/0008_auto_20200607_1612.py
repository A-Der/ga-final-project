# Generated by Django 3.0.7 on 2020-06-07 16:12

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('jwt_auth', '0007_auto_20200607_1406'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='categories',
            new_name='interests',
        ),
    ]
