# Generated by Django 3.0.7 on 2020-06-07 10:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('baskets', '0006_basket_total_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='basket',
            name='summary',
            field=models.CharField(default=1, max_length=200),
            preserve_default=False,
        ),
    ]
