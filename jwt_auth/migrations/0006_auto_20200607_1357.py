# Generated by Django 3.0.7 on 2020-06-07 13:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('categories', '0007_category_talk'),
        ('jwt_auth', '0005_auto_20200607_1356'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='user',
            name='categories',
        ),
        migrations.AddField(
            model_name='user',
            name='categories',
            field=models.ForeignKey(blank=True, default=1, on_delete=django.db.models.deletion.CASCADE, related_name='User', to='categories.Category'),
            preserve_default=False,
        ),
    ]
