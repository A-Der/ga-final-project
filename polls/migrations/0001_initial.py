# Generated by Django 3.0.7 on 2020-06-09 09:28

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('talks', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Poll',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('question', models.CharField(max_length=300)),
                ('option_a', models.CharField(max_length=300)),
                ('option_b', models.CharField(max_length=300)),
                ('option_c', models.CharField(blank=True, max_length=300)),
                ('option_d', models.CharField(blank=True, max_length=300)),
                ('talk', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='polls', to='talks.Talk')),
            ],
        ),
    ]
